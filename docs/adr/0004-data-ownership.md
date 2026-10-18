# Sanity owns the taxonomy and places; Neon owns everything transactional

- **Status:** Accepted
- **Date:** 2026-10-18

## Context

Bifrost holds two kinds of data: curated, read-mostly content, and concurrent transactional writes. They have different access patterns and different owners.

## Decision

Curated, read-mostly data — the Category / Interest taxonomy and Place records — lives in Sanity. Activities, Spots, and Join Requests live in Neon (PostgreSQL).

## Consequences

- The split follows the read/write line: taxonomy and places change rarely and are edited by us.
- Putting Activities in Sanity would place the product's hot path behind a CMS API and force us to hand-roll transactional guarantees.
- Putting the taxonomy in Neon would bury a curated vocabulary in a table only we write.
