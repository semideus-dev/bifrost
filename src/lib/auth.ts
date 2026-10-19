import { betterAuth } from "better-auth";
import { emailOTP } from "better-auth/plugins";
import { expo } from "@better-auth/expo";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { neon } from "@neondatabase/serverless";

import { drizzle } from "drizzle-orm/neon-serverless";

// Ensure required environment variables are present
if (!process.env.DATABASE_URL) {
	throw new Error("Missing required configuration: DATABASE_URL");
}

// Initialize Neon connection and Drizzle ORM
const sql = neon(process.env.DATABASE_URL);
const db = drizzle({ client: sql } as any);

// Simple in‑memory rate limiter for OTP requests (max 5 per email per hour)
const OTP_REQUEST_LIMIT = 5;
const OTP_REQUEST_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const otpRequestStore = new Map<string, number[]>();

async function sendVerificationOTP({
	email,
	otp,
	type,
}: {
	email: string;
	otp: string;
	type: string;
}) {
	const now = Date.now();
	const timestamps = otpRequestStore.get(email) ?? [];
	// Keep only timestamps within the window
	const recent = timestamps.filter((t) => now - t < OTP_REQUEST_WINDOW_MS);
	if (recent.length >= OTP_REQUEST_LIMIT) {
		// Too many requests – let Better Auth surface this as an error
		throw new Error("Too many OTP requests. Please try again later.");
	}
	recent.push(now);
	otpRequestStore.set(email, recent);

	// For development we just log the OTP to the dev server console
	console.log(`OTP for ${type} (${email}): ${otp}`);
}

export const auth = betterAuth({
	adapter: drizzleAdapter(db, { provider: "pg" }),
	plugins: [
		emailOTP({
			sendVerificationOTP,
			// Use defaults: 6‑digit OTP, 5‑minute expiry, 3 verification attempts
			// The plugin already enforces allowedAttempts = 3
		}),
		expo(),
	],
	// Session lasts 7 days (default is 7 days, but we set explicitly for clarity)
	session: {
		expiresIn: 60 * 60 * 24 * 7, // seconds
	},
});
