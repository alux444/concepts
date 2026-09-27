---
name: ui-visual-validation
description: Validate web, mobile, and desktop UIs through scenario coverage, repeatable screen captures, visual inspection, and image comparisons. Use for UI audits, design reviews, screenshot testing, and visual regression coverage.
---

# UI visual validation

Produce a reviewable visual inventory of the requested UI, supported by repeatable
setup, behavioral checks, and clear image artifacts. Adapt to the platform and
available access: source repository, running application, simulator, device, or
component preview. Do not assume a framework, package manager, authentication
provider, test harness, directory layout, or operating system.

## Discover the UI and scope

- When source is available, read applicable project instructions, design standards,
  run commands, navigation, test configuration, and existing fixtures and baselines.
  Inspect the working tree before editing and preserve unrelated changes.
- Identify supported platforms, display sizes, input methods, roles, and feature
  flags. Prefer the existing automation and capture harness. If implementation is
  in scope and no harness exists, add the smallest suitable option for the platform.
  Browser automation suits web UIs; native apps need platform-compatible automation
  and capture tools. Do not assume browser tools can inspect native controls.
- When only a running UI is available, use available UI controls and screen capture
  tools. Record repeatable setup steps and access limitations. Manual captures can
  support a review, but do not claim automated regression coverage from them.
- For a broad request, inventory relevant screens from navigation, source or stories
  when available, and runtime exploration. Reconcile declared screens with what is
  reachable. For a scoped request, cover changed screens and affected shared UI.
  Group dynamic records by distinct layout and behavior instead of capturing each.
- Include relevant dialogs, sheets, drawers, tabs, menus, and authenticated variants,
  even when they are not separate routes or windows. Separate product UI from tools
  and external applications.
- Continue with accessible screens when credentials, devices, or tools are missing.
  Record gaps and ask for missing access only when it blocks meaningful work. Do not
  fabricate coverage or silently replace a supported platform with another.

## Build the scenario matrix

Read [Common scenario coverage](references/scenario-matrix.md). Create a coverage
matrix with stable case IDs, screens, roles, scenarios, setup, display configuration,
assertions, capture paths, and status. Keep it beside the project's tests or review
artifacts, following existing conventions.

Derive cases from actual product behavior, contracts, and design requirements.
Use realistic dense content as well as default states. Combine compatible dimensions,
but separate cases when their layout or behavior differs. Record exclusions and
blocked cases with reasons; do not label partial coverage exhaustive.

Choose representative supported configurations: browser viewport, app window size,
or device and orientation as appropriate. Include relevant layout boundaries,
display scaling, safe areas, and text sizes. Do not impose phone layouts, themes,
orientations, or input modes the product does not support.

## Make setup and checks repeatable

- Use isolated test accounts, local seeded data, supported previews, or mocked
  service responses. Avoid production writes and real customer data. Keep credentials
  out of fixtures, screenshots, and reports.
- Match actual contracts and business rules. Control visible dates, timezone, locale,
  random values, ordering, and timers. Reset state between cases; avoid dependencies
  on execution order. Record manual steps when automation is unavailable.
- Exercise the UI as users encounter it. Component previews supplement full-screen
  and navigation coverage; they do not prove integration into the running app.
- Wait for meaningful readiness using observable state, semantic checks, and relevant
  fonts and media. Use platform readiness or idling mechanisms when available instead
  of fixed sleeps. Establish loading, error, and retry states through supported state
  mechanisms or controlled dependencies.
- Stabilize animations and animated media for baseline captures using supported
  controls. Test motion, focus, keyboard, pointer, and gesture behavior separately
  when a screenshot cannot prove them. Do not change the layout just to stabilize it.
- Check behavior before capturing: visible content, item counts, available actions,
  preserved input, successful recovery, and relevant scrolling constraints. Prefer
  user-visible outcomes over assertions that merely repeat implementation details.

## Capture and compare

Choose the mode requested. For a visual review, capture images and record coverage.
For regression coverage, add actual image assertions in the platform's test harness;
plain screenshots are not regression tests. If comparison tools are unavailable,
report review-only coverage and the gap. Follow the project's baseline policy and
include reference images when tracked regression coverage is requested.

Use descriptive screen, scenario, and display-configuration filenames. Keep baselines
separate from run outputs and failure diffs. Record rendering conditions that affect
comparison, such as OS, browser or runtime, device, pixel density, font availability,
and theme. Compare like configurations; do not relabel platform-specific baselines
as portable. Avoid machine-specific paths and fixed ports in committed tests.

Capture normal screen or window sizes plus relevant scrolling and overlay states.
Full-content or stitched images supplement normal-size captures; they do not prove
that internal scrolling, sticky controls, safe areas, or keyboard avoidance work.
Verify last-item visibility and inspect for clipped or blank regions. Label expanded
captures clearly, and do not hide UI to manufacture a pass.

Investigate unexpected differences. Do not blindly regenerate baselines, disable
assertions, mask the feature under test, or loosen tolerances to make tests pass.
Mask nondeterministic peripheral content only with a documented reason. For intended
changes, inspect updated images and rerun comparison without updating references.

## Inspect and hand off

Open and inspect every new or changed capture. Review hierarchy, alignment, density,
wrapping, readability, focus visibility, missing assets, overflow, and overlay
collisions. Inspect dense, narrow, and error cases as carefully as defaults. Check
platform-specific issues such as system insets, app chrome, and on-screen keyboards
where applicable. Fix defects within the authorized scope or report them clearly.
A passing image comparison does not establish design quality or accessibility;
use interaction and accessibility checks for claims screenshots cannot substantiate.

Run checks appropriate to the changed UI. Avoid concurrent runs that share mutable
fixtures, simulators, output directories, or ports. Scope baseline updates to affected
cases, then run comparison mode. Broaden checks when shared UI behavior warrants it.

Finish with links to the matrix, checks or tests, and representative captures.
Distinguish planned, implemented, captured, visually reviewed, and comparison-passed
cases. State actual results, uncovered areas, and commands or manual steps to rerun
and intentionally update references. Follow the project's artifact and commit rules.
