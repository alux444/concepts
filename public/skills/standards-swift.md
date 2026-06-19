Here's the condensed version, matching your TS doc's density:

**iOS Modularization (Swift)**

- Split the app into framework modules by responsibility (`Core`, `Networking`, `DesignSystem`, `FeatureHome`, etc.) — never one monolithic target
- Each module's public API is exactly what's marked `public`/`open` — default to `internal`, leak nothing else
- Dependencies point one direction only, toward `Core` — features never import each other
- Only the app target (composition root) knows concrete implementations — everything else depends on protocols

Type Safety

- NEVER use `Any`/`AnyObject` to bridge modules — define a shared `protocol` or type in `Core` instead
- No force-casts (`as!`) or force-unwraps (`!`) across module boundaries — use `as?` + `guard`
- Prefer `struct` over `class` for shared models unless reference semantics are required
- Eliminate invalid states with types, not comments — use `Optional`, `Result`, or `enum` with associated values, not `nil`/`-1` + a comment
- Use `map`, `filter`, `compactMap`, `reduce`, `first(where:)` over manual loops

Functions

- Max 50 lines — no exceptions
- Extract helpers aggressively ("wishful thinking" style)
- Each function does ONE thing
- Accept dependencies via initializer params — never `.shared` singletons inside a module
- Use factory types when implementation choice depends on runtime context

Control Flow

- `guard` at the top, happy path at the bottom
- No nested if/else — invert and return early
- No else after a return
- No if/else or switch chains to pick an implementation — use a protocol + multiple conformances, inject the right one

Naming

- NEVER abbreviate — `networkClient` not `netClt`
- Units in names — `timeoutMs`, `cacheExpiryMinutes`
- Magic values → named constants, or better, an `enum` instead of raw `Int`/`String`
- Complex conditions become named `let`s or functions

Style

- `let` by default, `var` only when mutation required
- Access control is deliberate — don't leave things `public` (or default-visible) by accident
- NEVER bundle helpers into `Utils.swift`/`Extensions.swift` — sort into the module/type they relate to

Comments

- Don't explain how code works — improve the code instead
- Complex conditions get extracted, not commented
- Exceptions: unsafe/perf hacks, links to algorithms implemented
- `///` doc comments on `public` API only — document usage/behavior/errors, not internals

Dependency Injection

- Constructor injection over singletons/global imports
- One protocol per external boundary (wrap third-party SDKs in your own `Core` protocol)
- Composition at the entry point only
- No module knows who imports it
- Protocols shaped by the consumer's needs, not the implementer's
- Inject fakes in tests — mocking imports is a signal to extract + inject instead

Commits & PRs

- One logical change per commit
- Scaffold (module + protocol stub) before implementation, as separate commits
- Reviewable in a single sitting or split it
- Refactor commits never mix with logic changes