# Joining an Activity requires the Initiator's approval

- **Status:** Accepted
- **Date:** 2026-10-18

## Context

Bifrost asks people to meet strangers in person. One-tap joining would occupy a Spot immediately; approval trades that simplicity for a request/accept state.

## Decision

A Join Request does not occupy a Spot until the Initiator accepts it. The person who posted the Activity decides who they are meeting.

## Consequences

- Approval doubles as the first safety control.
- Joining costs a request/accept state and more friction than one-tap joining.
- Recorded so a future reader does not "simplify" this into instant claiming.
