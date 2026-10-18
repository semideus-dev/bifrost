# Natural-language search parses structured constraints first

- **Status:** Accepted
- **Date:** 2026-10-18

## Context

Users describe what they want in plain language. Parsing the query into a structured filter and embedding retrieval are both options from the start, and the choice decides whether search needs the infrastructure a vector store brings.

## Decision

A natural-language query is parsed into a structured filter — activity, date, place, budget, number of Spots — and matched deterministically against Activities, rather than relying on embedding retrieval. Semantic retrieval is reserved for fuzzy intent ("something chill") and layered on later.

## Consequences

- Determinism first: a parsed query is inspectable and cannot silently return wrong-but-plausible results.
- Every target query is a hard constraint ("next weekend", "under ₹300", "3 spots"), which parsing handles exactly, testably, and cheaply.
- It ships without a vector store; semantic retrieval is a later addition.
