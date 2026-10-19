# Identity is an email address; a phone number is contact information

- **Status:** Accepted
- **Date:** 2026-10-19

## Context

`README.md` claims Bifrost uses "Better Auth with phone-based identity, so every account maps to a reachable person." Bifrost asks people to meet strangers in person and ADR-0003 leans on identity as the first safety control, so that claim was load-bearing.

We are instead launching with an email code or a Google account, and asking for a phone number during onboarding without verifying it.

## Decision

A Profile's identity is its **Email** — proven at sign-in by an email code or by Google. A **Phone** is collected during onboarding, required and unique, but unverified: it is contact information a person asserts, not a fact Bifrost has established.

## Consequences

- The README's phone-based-identity claim is superseded.
- "Reachable person" becomes a claim rather than a guarantee until SMS verification exists.
- Adding verification later is additive: a provider, a verification step, and a flag. It does not reshape the schema or the sign-in flow.
- We knowingly trade the strongest available safety signal for an onboarding flow that needs no SMS provider.
