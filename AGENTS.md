This is an Expo/React Native mobile application. Prioritize mobile-first patterns, performance, and cross-platform compatibility.

## What Bifrost is

Bifrost connects people who want company doing an activity. Read `README.md` before designing or building any feature, and `GLOSSARY.md` to use its vocabulary.

## Expo has changed — do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json`.
2. Fetch the matching versioned docs: `https://docs.expo.dev/versions/v<major>.0.0/`
3. For anything else, fetch https://docs.expo.dev/llms.txt — an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Commands

This project uses Bun (`bun.lock` present). Never use `npx`, `npm`, `yarn`, or `pnpm`. Run package binaries with `bunx` and package scripts with `bun run`.

```bash
bunx expo install <package>     # ALWAYS use instead of npm/yarn/pnpm add — resolves SDK-compatible versions
bunx expo start                 # start the dev server
bunx expo lint                  # lint (ESLint via expo lint)
bunx tsc --noEmit               # typecheck
bunx expo-doctor                # diagnose dependency and config issues
bunx expo install --fix         # fix incompatible package versions

bunx biome format --write <file>  # format one file — run after every file you create or edit
bun run format                  # format the whole repo
bun run typecheck               # same as bunx tsc --noEmit
```

Run format, lint, and typecheck before declaring any task done.

## Navigation & Routing

- Use **Expo Router** for all navigation. Routes live in `src/app/` — every file there is a screen, `_layout.tsx` files define navigators. Keep non-route code (components, hooks, utils) outside `src/app/`.
- Import `Link`, `router`, and `useLocalSearchParams` from `expo-router`.
- Docs: https://docs.expo.dev/router/introduction.md

## Building with EAS

Use EAS to build, sign, and submit the app in the cloud (`eas build`, `eas submit`) and to ship over-the-air updates (`eas update`) — no local Xcode or Android Studio required. Run EAS CLI as `bunx eas-cli <command>` in Bun projects, or `npx eas-cli@latest <command>` otherwise; substitute that for bare `eas` in docs examples.
Docs: https://docs.expo.dev/eas/index.md

## Rules

- If `ios/` and `android/` directories do not exist, they are generated (Continuous Native Generation). Never create or edit them by hand — configure native behavior in `app.json` and config plugins.
- Expo Go only includes its bundled native modules. After adding a library with native code, the app needs a development build: `bunx expo run:ios|android` locally, or `eas build --profile development`.
- Prefer recommended Expo modules over third-party libraries, and check your available skills before adding dependencies. Docs: https://docs.expo.dev/versions/latest/index.md

## Code conventions

### File naming

- Name every new file in kebab-case, at most three words: `word1-word2-word3.tsx`.
- The only exception is filenames Expo Router reserves, which must not be renamed: `_layout.tsx`, `index.tsx`, `+not-found.tsx`, dynamic routes like `[id].tsx`, and platform variants like `thing.web.tsx` / `thing.native.tsx`.

### File size & modularity

- Keep files short — soft cap of **400 lines of actual code** (blank lines and comments excluded). Split a file before it grows past that.
- One file = one primary purpose. If it starts doing several unrelated things, break it up.
- Don't over-modularize. Club short, closely related helpers into one file instead of creating a file per function; avoid cluttering the project with tiny files.
- Group related files into folders that describe them (e.g. `src/components/`, `src/hooks/`, `src/lib/`, `src/constants/`). Keep non-route code out of `src/app/`.

### Formatting

- **Biome** is the formatter and is format-only — ESLint (via `expo lint`) remains the linter. Config lives in `biome.json`.
- Biome runs on **code files only** (JS/TS/JSON/CSS); docs and assets are excluded in `biome.json`. Don't run it on Markdown or asset files.
- After creating or editing any file, format it:
  ```bash
  bunx biome format --write <file>
  ```
  Or format everything at once with `bun run format`.

## Agent skills

### Issue tracker

Issues and specs live as GitHub issues (via the `gh` CLI). See `docs/agents/issue-tracker.md`.

### Triage labels

The five default triage roles, each label string equal to its role name. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: a root `GLOSSARY.md` plus `docs/adr/`. See `docs/agents/domain.md`.

Write an ADR **only** when a decision is all three: hard to reverse, surprising without context, and the product of a real trade-off. Otherwise keep it out — vocabulary goes in `GLOSSARY.md`, "how we do X" stays in the code, and work goes in issues/specs. ADRs are append-only: add a new file and mark the old one `Superseded by ADR-NNNN`; never rewrite an accepted ADR. `docs/adr/README.md` is the index — add a row when you add an ADR.
