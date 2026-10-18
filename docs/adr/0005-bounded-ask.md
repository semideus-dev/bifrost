# Pre-join contact is a single bounded Ask, not a chat

- **Status:** Accepted
- **Date:** 2026-10-18

## Context

A person may want an Activity on different terms before committing to join. A free pre-join messaging channel is the obvious way to negotiate that, but Bifrost asks strangers to meet in person and the approval gate (see ADR-0003) is the safety control.

## Decision

A person who wants an Activity on different terms sends one **Ask** — a single question the Initiator accepts or declines — and then either joins or does not. There is no thread and no follow-up, and a person may send at most one Ask per Activity.

## Consequences

- A free pre-join messaging channel would reopen exactly the surface the approval gate closes, while adding little beyond the one question that actually matters ("could this move to 6pm?").
- An accepted Ask **amends** the Activity for everyone: an Activity has one set of terms and never two, so there is no such thing as a private deal between the Initiator and one person.
- Existing Participants are notified of an Amendment and may leave.
