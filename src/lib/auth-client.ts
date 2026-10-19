import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import { emailOTPClient } from "better-auth/client/plugins";
import * as SecureStore from "expo-secure-store";

// Base URL of the Better Auth backend. It can be an absolute URL (e.g. during development) or an empty
// string when the API routes live in the same Expo app.
const baseURL = process.env.EXPO_PUBLIC_BACKEND_URL ?? "";

export const authClient = createAuthClient({
	baseURL,
	// The expo client plugin handles cookie storage with SecureStore and deep‑link scheme handling.
	plugins: [
		expoClient({ scheme: "bifrost", storage: SecureStore }),
		emailOTPClient(),
	],
});
