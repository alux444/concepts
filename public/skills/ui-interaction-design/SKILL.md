---
name: ui-interaction-design
description: Design or refine accessible UI with coherent visual hierarchy, clear feedback, and stable navigation and overlay behavior. Use for interface implementation, visual refinement, interaction polish, or diagnosing lost state and flicker.
---

# UI interaction design

## Establish the direction

Identify the audience, task, primary action, likely failures, and relevant loading,
empty, error, success, and unavailable states. Read the existing design brief and
inspect rendered components. Preserve accepted choices and deferred scope.

For an uncertain identity, turn adjectives into visible alternatives: typography,
proportion, density, shape, surfaces, and accent roles. Ask only questions that
change the design; compare a small study with consistent content and states.
Use real buttons, labelled fields, selection, feedback, and an overlay. A hero
or palette alone cannot establish a component system's character.

For an existing UI, name the visible symptom before changing it. Familiar layouts
and fonts are not defects. Refine hierarchy and coherence rather than novelty.

## Make the visual language agree

- Use order, proximity, alignment, type, and spacing before decoration. Give each
  task context one dominant action; a focused dialog has its own hierarchy.
- Tune type size, weight, leading, and tracking together. Inspect operational
  labels, wrapping, descenders, and fallback fonts at actual size, not just titles.
- Keep related labels, controls, and feedback close. Let content set height;
  use layout stretching for equal-height groups instead of fixed text heights.
- Give accents, surfaces, borders, elevation, and radii clear roles. Check warmth
  and saturation as well as contrast. Preserve semantic feedback colours.
- Keep icons coherent in weight, optical size, and alignment. Preserve the chosen
  family's geometry; global cap/join overrides can distort small glyphs.
- Remove repeated introductions, nested containers, redundant help, and decorative
  badges when they obscure the task. Keep them when they serve the chosen identity.
- Use specific, outcome-focused copy and coherent sample data. Do not fabricate
  endorsements or metrics. Add imagery only when it supports the content; verify
  availability and permitted use before bundling assets.

Express recurring choices through the existing kit and tokens. Fix the owning
layer rather than styling one specimen around a shared defect. Keep product
composition in the application until reuse justifies a shared contract.

## Actions and recovery

- Acknowledge input immediately. Distinguish pending work from committed success;
  publish durable success only after the required save succeeds.
- Keep visible labels and local validation. On submit, focus the relevant error
  or a linked summary. Disable only genuinely unavailable actions with a reason.
- Preserve drafts after recoverable failures. Scope errors and retry to the
  affected task; keep useful content during failed refreshes. Use toasts for brief
  outcomes and persistent feedback for problems requiring continued attention.
- Prevent duplicate consequential submissions. Prefer undo when safe; explain
  costly or irreversible consequences before commitment.
- Use semantic controls, visible keyboard focus, accessible names, and meaningful
  reading order. Essential actions must work without hover or precise aiming.
- Distinguish selection from hover, press, and focus, including combined states.
  Communicate important status with more than colour.

## Navigation and asynchronous state

- Keep requested navigation, URL, and history aligned independently of data loading.
  Isolate responses and cached content by identity; rapid input uses the latest
  requested state. An obsolete response must not replace the current destination.
- Keep shared shells and ongoing state at a boundary that survives navigation.
  Use stable entity keys and existing cache contracts. Reset only when required
  by identity or product behavior; clear protected stale data when access changes.
- Separate initial loading, refresh, confirmed empty, and failure. Keep valid
  content usable during refresh; reserve media dimensions and loading space.
- Preserve input and make focus and scroll changes intentional. Use optimistic
  updates only when predictable and recoverable, with reconciliation and retry.
- Diagnose flicker as remounting, loading branches, entrance motion, layout movement,
  or expensive rendering. Profile before adding memoization; re-rendering alone
  does not imply DOM replacement.

## Overlays and motion

Prefer one popup task layer. Use inline choices, replacement steps, or a page
when a flow would stack focused tasks; preserve drafts and a clear way back.
When an existing modal includes a popup control, preserve its usable layering,
keyboard behavior, and focus ownership while refining the requested scope.

- Blocking dialogs own focus, expose dismissal, and restore focus appropriately.
  Escape dismisses the innermost eligible layer; passive feedback must not cover it.
- Default to immediate state changes. Motion should explain feedback or continuity,
  remain interruptible, and honour reduced motion. Use shared timings and simple
  platform transitions; never delay input or loading to disguise latency.
- Keep overlay content stable through exit. Reset selection, forms, and validation
  in the actual exit lifecycle, not a guessed timeout. Guard against stale cleanup
  clearing a quick reopen; handle absent motion without waiting for a missing event.
- Direct manipulation follows the pointer, preserves grab offset, captures it,
  and settles from release velocity. Reserve bounce for meaningful momentum.

## Review the rendered task

Inspect real controls and portal content on their actual surfaces, including
selected-plus-hover, keyboard focus, disabled, loading, and feedback states.
Check the entire focus indicator for clipping at overflow boundaries. Evaluate
resolved foreground/background pairs, including translucent ancestors.

Exercise realistic long and dense content, supported themes, narrow layouts,
text enlargement, and relevant locale/direction changes. Let layouts reflow in
task order without hiding necessary information. Test failure/retry, slow and
rapid navigation, overlay dismissal/reopening, focus, and scroll continuity.

Inspect captures after the final change. Use behavioral checks for claims that
images cannot establish, and report concrete corrections and coverage gaps.
