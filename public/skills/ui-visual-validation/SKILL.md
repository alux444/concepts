---
name: ui-visual-validation
description: Audit rendered UIs and verify visual regressions with scoped scenario coverage, repeatable captures, and focused behavioral checks. Use for design reviews, screenshot testing, or component coverage audits.
---

# UI visual validation

## Scope the evidence

Read project instructions, the working tree, supported configurations, existing
fixtures, and capture/test commands. Preserve unrelated changes. Use tools suited
to the platform; browser automation does not establish native-app coverage.

For a focused fix, cover the changed state and affected shared UI. For a broad
review, inventory screens, overlays, roles, and distinct layouts. For an exhaustive
component audit, enumerate public components, compound parts, wrappers, supported
prop axes, and applicable states before claiming completeness.

Use the [scenario selection guide](references/scenario-matrix.md) when planning
multi-screen or multi-state coverage. Record case ID, surface, scenario, setup,
display configuration, core assertion, capture, and status. A small fix can use a
short case list. Combine compatible dimensions; split cases with different behavior.
Record missing access and inapplicable cases rather than inventing coverage.

## Establish real, repeatable states

- Prefer the existing harness, isolated fixtures, seeded data, or controlled
  dependencies. Match actual contracts; avoid production writes and customer data.
  Keep credentials out of captures and reports.
- Control visible time, locale, randomness, ordering, and timers. Reset between
  cases and record rendering conditions: runtime, fonts, density, theme, and size.
- Wait for meaningful readiness, hydration, fonts, and media using observable
  state rather than fixed sleeps. Visible server-rendered controls may not yet
  have working handlers.
- Render actual components. Galleries supplement integrated screens; static overlay
  or simulated hover/focus specimens do not prove live interaction behavior.
- Exercise real pointer and keyboard states, especially selected-plus-hover and
  focus-visible. Check focus edges at scroll/overflow boundaries and portal themes.
- Assert readiness and the core user-visible outcome. Add precise assertions for
  actual contracts or demonstrated failures; avoid duplicating screenshot coverage
  with label-by-label, style, render-count, or pixel-geometry checks.

## Separate appearance from behavior

Capture stable states with controlled animation for comparison. Separately exercise
relevant motion, keyboard, pointer, touch, and assistive-technology paths. Images
cannot establish focus restoration, scrolling, usable actions, or absence of flicker.

For navigation/loading changes, check slow requests, rapid and back navigation,
late responses, retained input, shared UI, and intentional focus/scroll changes.
For overlays, check opening, validation, submission, supported dismissal, and rapid
reopening with a new selection in normal and reduced motion. Keep content through
exit. Use recordings or targeted measurements to diagnose collapse; regressions
should assert the user-visible failure, such as stale cleanup clearing new input.

## Capture, compare, and inspect

A review produces captures and findings. Regression coverage requires image
assertions and baselines in the actual harness. State which exists. Keep baseline,
run, and failure-diff outputs separate, with descriptive case/configuration names.
Compare like rendering environments; keep committed tests free of fixed local paths
and ports. Avoid parallel runs sharing mutable fixtures, devices, or output paths.

Use normal viewport/window captures plus relevant scroll and overlay states.
Expanded images supplement them; they do not prove internal scrolling, sticky
controls, safe areas, or keyboard avoidance. Check the last item remains reachable.

Open every new or changed capture after the final change. Inspect hierarchy,
alignment, density, wrapping, clipping, focus, missing assets, and overlay collisions,
especially in dense, narrow, and error states. Compare component identity across
small controls, feedback, and portals, not just the showcase.

Use accessibility, contrast, and bounds checks for their specific invariants.
Inspect incomplete accessibility results. Test resolved/composited colours and
track disabled states separately. Passing checks cannot establish design quality.

Investigate unexpected diffs. Do not mask the feature, loosen tolerances, or replace
baselines to manufacture a pass. After an intended baseline update, inspect images
and rerun comparison without updating references. If consumer parity is in scope,
verify a fresh exported kit; the internal preview alone is insufficient.

## Report actual coverage

Link findings, relevant captures, case inventory, and tests or repeatable manual
steps. Distinguish implemented, captured, visually reviewed, and comparison-passed
cases, plus simulated, manual, blocked, and missing coverage. State concrete defects,
corrections, rerun commands, and gaps; do not call sampled coverage exhaustive.
