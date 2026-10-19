import { auth } from "@/lib/auth";

// The Better Auth handler works for both GET and POST requests.
export const GET = auth.handler;
export const POST = auth.handler;
