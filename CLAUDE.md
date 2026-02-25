# Concepts — Coding Standards

## TypeScript

- **NEVER use `any`** — use `unknown`, proper interfaces, or generics instead
- Strict mode always — no `@ts-ignore`, no `@ts-expect-error`
- Prefer `interface` over `type` for object shapes
- All function parameters and return types must be explicitly typed

## Functions

- **Max 50 lines per function** — no exceptions
- Extract helpers aggressively ("wishful thinking" style: write the high-level flow first calling functions that don't exist yet, then implement them)
- Each function does ONE thing

## Control Flow

- **Early returns only** — guard clause at the top, happy path at the bottom
- No nested if/else chains — invert conditions and return early
- No `else` after a `return`

## Style

- `const` by default, `let` only when mutation is required
- Destructure parameters and objects
- Named exports only — no default exports (except page components for routes)

## Project Structure

- `src/lib/` — shared frontend utilities
- `src/components/` — reusable React components
- `src/pages/` — route-level page components
- `src/docs/` — MDX content files organized by category

## Port

- **Always use `8789`** — both dev and production
- This is the canonical port. Don't use 3001/5173/other defaults

## Documentation

- If setup steps or how-to-run instructions change, update `README.md` to match
- Keep the README minimal — just how to run
