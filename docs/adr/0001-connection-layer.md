# Bifrost is a connection layer, not an events platform

- **Status:** Accepted
- **Date:** 2026-10-18

## Context

People want company for an activity. The obvious adjacent product is an events platform — listings, organisers, tickets — and that framing would reshape the data model and the whole surface if it crept in.

## Decision

Bifrost connects people who want company for an activity; it does not organise, host, or sell tickets to events. The unit of the product is an **Activity** posted by a peer who will themselves attend — there is no organiser who stays home.

## Consequences

- Promoter-run concerts and any "announce an event I am not part of" capability are ruled out.
- The model stays small: no ticketing, no venue relationships, no event logistics.
- A promoter wants a different product, and we are not building it.
