# Bifrost

Bifrost is a mobile app that connects people who want company doing an activity. You describe what you want to do in plain language; Bifrost finds others nearby who want to do it too.

## The problem

You want to play turf football this weekend, catch a concert, try a new café, or take a weekend trip — but you have nobody to do it with. Existing apps list *things happening*; they do not solve *finding a person to go with*. Organising the outing is the easy part. Finding someone is the hard part.

## What Bifrost does

Bifrost is a **connection layer between peers**. It does not organise or run anything.

- Someone with a plan opens an **Activity** to others — naming the activity, the time, the place, and how many Spots are free.
- Someone looking describes what they want in plain language — *"3 spots for turf football next weekend under ₹300 per person"* — and Bifrost turns that into a search.
- Joining is a **Join Request** the Initiator approves — or, if one term doesn't fit, a single bounded **Ask** for a change: one question, no back-and-forth.
- Once a Join Request is accepted, the Participants share the Activity's chat and a **Bridge** exists between them. No money moves through Bifrost; price is information, not a transaction.

## Who it's for

The person with a free weekend and nobody to share it with. The Initiator is the same person in a different moment — someone who wanted company and took the first step. Launching city by city in India.

## How it's built

Expo / React Native with Expo Router and TypeScript, targeting iOS and Android.

- **Auth** — Better Auth, signing in with an email code or Google. A Profile is identified by its email; the phone number collected during onboarding is contact information, not identity (ADR-0006).
- **Data** — Neon (PostgreSQL).
- **Content** — Sanity, holding the curated Category / Interest taxonomy and Place data.
- **Analytics** — PostHog.

> The stack above is chosen but **not yet installed**; the app is still the default Expo starter template.

## Status

Early. The core idea and vocabulary are settled (see `GLOSSARY.md`); the feature set is not mapped yet and will come from a spec. Decisions that are hard to reverse live in `docs/adr/`.

Deliberately out of scope for now, but kept in mind as future direction: payments, reputation, and a friend graph that outlives an Activity.

## Read next

- `GLOSSARY.md` — the words this project thinks in
- `docs/adr/` — decisions made, and why
- `AGENTS.md` — how to work in this repo
