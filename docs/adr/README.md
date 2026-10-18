# Architecture Decision Records

Decisions that are hard to reverse, surprising without context, and the product of a real trade-off. This is the history of *why* Bifrost is shaped the way it is.

## Adding an ADR

- One decision per file, named `NNNN-short-title.md` (zero-padded number, at most three words after it).
- Copy the format of an existing ADR: **Status** and **Date** in the header, then **Context**, **Decision**, and **Consequences**.
- Append — never rewrite an accepted ADR. To change a decision, add a new one and set the old one's status to `Superseded by ADR-NNNN`.
- Add a row to the table below.

## Index

| # | Decision | Status |
| --- | --- | --- |
| [0001](0001-connection-layer.md) | Bifrost is a connection layer, not an events platform | Accepted |
| [0002](0002-search-parsing.md) | Natural-language search parses structured constraints first | Accepted |
| [0003](0003-join-approval.md) | Joining an Activity requires the Initiator's approval | Accepted |
| [0004](0004-data-ownership.md) | Sanity owns the taxonomy and places; Neon owns everything transactional | Accepted |
| [0005](0005-bounded-ask.md) | Pre-join contact is a single bounded Ask, not a chat | Accepted |
