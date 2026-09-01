**Go Modularization / Style**

Prefer clear, idiomatic Go and the smallest design that satisfies the current product requirement.

## Packages and dependencies

- Split code by product or infrastructure responsibility; keep `main` as a small composition root.
- Default to unexported identifiers. Export only the API another package needs.
- Keep dependencies directed: transport may depend on domain packages, and domain packages may depend on small shared identity/value packages. Avoid cycles and feature-to-feature coupling.
- Wire concrete implementations only in `main` or a dedicated composition package.
- Do not create a generic `core`, `common`, `utils`, or `helpers` dumping ground. Put code with the behavior it supports.

## Interfaces and dependency injection

- Define small interfaces where they are consumed, shaped around the consumer's needs.
- Accept external dependencies through constructors or function parameters; do not create mutable package globals or `init`-managed services.
- Use a compile-time assertion for each production service or repository implementation:
  ```go
  var _ ServiceInterface = (*ServiceImplementation)(nil)
  ```

- Inject fakes in tests. If a test must replace package-level state, extract a dependency boundary.
- Wrap third-party clients when the application needs a smaller, stable boundary. Do not wrap standard-library APIs merely for uniformity.

## Types

- Use explicit structs and interfaces for data passed between packages. Do not use `any` as an application data contract.
- `any` is acceptable when required by a standard-library or third-party boundary such as JSON, logging, or `pgx` query arguments. Keep it at that boundary and convert promptly to application types.
- Use the two-value form for type assertions when runtime input can have the wrong type. Unchecked assertions are acceptable inside tightly controlled test doubles such as `pgx.Row.Scan` implementations.
- Prefer value types for shared data. Use pointers when absence, mutation, identity, or meaningful copy cost requires them.
- Represent enum-like domain values with named types and constants. Validate untrusted strings before converting them.
- Use named domain errors for conditions callers must branch on. Wrap operational errors with `%w` and useful context.
- Do not encode missing or invalid states with magic values such as `-1`.

## Functions and control flow

- A function should have one clear responsibility.
- Treat ~50 lines as a rough function limit. Readability matters more than line counting.
- Return errors close to where they occur.
- Prefer guard clauses and avoid `else` after an unconditional return.
- Extract deeply nested or genuinely complex conditions into named functions or variables.
- Select interchangeable implementations at the composition root. Ordinary business branching does not require a new interface.
- Use clear range loops and `append`. Extract transformations only when the loop contains distinct or complex behavior.

## Naming

- Prefer complete, descriptive names. Conventional Go names such as `ctx`, `err`, `r`, `w`, and short receiver names are acceptable when their meaning is obvious.
- Put units in names for untyped numeric values, such as `bodySizeBytes`. A typed `time.Duration` should use names such as `requestTimeout`, not `requestTimeoutMs`.
- Replace unexplained literals with named constants when the value has domain or operational meaning.
- Name errors for the condition callers observe. `ErrNotFound` is sufficient in a focused package; use a more specific name when the package can report multiple not-found conditions.

## Comments and formatting

- Use names and structure to explain what code does. Comments should explain intent, constraints, or a non-obvious reason.
- Add standard Go doc comments to exported identifiers when their behavior, usage, or errors are not already obvious from a small local API.
- Do not add narration comments that merely restate the following line.

## Changes and reviews

- Keep one logical change per commit and avoid mixing behavior changes with unrelated refactors.
- Keep each commit buildable and tests passing.
- Prefer a scaffold-first commit when infrastructure or an API is large enough to review independently. Do not create empty abstractions solely to satisfy this pattern.
- Refactor commits never mix with logic changes