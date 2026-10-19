# A Profile signs in one way, not two

- **Status:** Accepted
- **Date:** 2026-10-19

## Context

Better Auth links accounts implicitly by default: signing in with Google using an address that already exists silently attaches Google as a second login method to that Profile. Its own documentation warns that trusted-provider linking "may increase the risk of account takeover".

Email-code sign-in is also asymmetric — it writes no account record at all, so a Profile that gained a code login this way is indistinguishable from a Google-only Profile.

## Decision

A Profile has exactly **one** sign-in method. A Google sign-in whose email already belongs to an email-code Profile is refused, and an email code is refused for a Profile that has a Google account. Each refusal names the method to use instead.

## Consequences

- Refusals are symmetric and never leave anyone stuck.
- "Authentication method" is exactly derivable from the account records — no tracking flag.
- Adding a second method becomes a deliberate, authenticated act (`linkSocial()`), which is the trustworthy direction to assert an identity from.
- Account recovery, and changing sign-in method, become real future features rather than something implicit linking provided by accident.
