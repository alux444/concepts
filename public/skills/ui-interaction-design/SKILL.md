---
name: ui-interaction-design
description: Design or review polished, accessible interfaces with intentional motion, feedback, hierarchy, overlays, typography, and responsive behaviour. Use for UI implementation, design-system work, interaction polish, or when an interface feels unresponsive or unclear.
---

# UI interaction design

Build interfaces that make people feel informed and in control. Visual design,
interaction, content, and accessibility are one system. Choose the treatment
that helps someone understand what happened, what matters next, and how to
recover.

## Start with the task

Before changing the UI, identify:

- who is acting and what outcome they need;
- the primary action and its immediate acknowledgement;
- information needed for the next decision;
- likely failures and a recovery path;
- loading, empty, error, success, unavailable, and long-content states.

Prefer familiar patterns unless a different interaction makes the task clearly
easier. Keep one visually dominant action per task context. A focused dialog is
its own task context and may have its own primary action.

## Actions, icons, and labels

- Use one primary call to action in a page area or task group. Supporting
  actions should use quieter treatment so the next step remains obvious.
- Put a leading icon on a label when it identifies the action. Put a trailing
  icon where it communicates direction or disclosure, such as a menu, a link to
  another view, or a forward step. Do not decorate the same label on both sides
  unless the icons perform distinct jobs.
- Keep an action available when validation can explain what needs to change.
  On form submit, show field-level guidance and move focus to the relevant
  problem rather than leaving an unexplained disabled button. Disable an action
  only when it is genuinely unavailable, and make the reason discoverable.
- Write short, outcome-focused labels in sentence case. Remove filler and
  unnecessary punctuation: use “Reset password” instead of “Send a password
  reset email” when the shorter label remains clear.

## Hierarchy and layout

- Use order, spacing, alignment, size, and weight before adding colour or
  decoration. If everything is loud, reduce competing emphasis.
- Keep related labels, help, controls, and outcomes close. Use a larger gap only
  when the subject or task changes.
- Let content set height. Test long names, translations, missing data, dense
  lists, narrow widths, and enlarged text.
- Use cards and borders to describe real groups and boundaries, not as default
  wrappers. Use shadows to describe elevation and layer priority.
- Maintain a readable measure for prose and enough width for comparison-heavy
  data. On small screens, stack controls in task order instead of merely
  shrinking desktop layouts.

## Interaction and feedback

Every interaction should answer: did the input register, what changed, and what
can happen next?

- Show immediate press, focus, loading, success, warning, and error feedback.
  Avoid arbitrary timers, delayed acknowledgement, and transitions that block
  input.
- Match feedback to scope: field errors beside fields, local confirmation beside
  the affected task, persistent messages for information needed later, and
  toasts only for brief non-blocking status.
- Preserve entered work through recoverable errors. Prefer undo for safe,
  reversible actions. Use confirmation only for consequential or irreversible
  actions.
- Make labels specific to their result. State the action and outcome rather than
  using generic labels such as “OK” or “Submit”.
- Design keyboard, pointer, touch, and assistive-technology paths together. A
  hover-only discovery path is never sufficient for an essential action.

## Forms and consequential actions

- Keep labels visible and place format guidance and validation beside the field
  it affects. Validate after meaningful input or submission, not on every
  keystroke unless the feedback is clearly helpful.
- Preserve entered values after a recoverable failure. For long forms, provide
  an error summary that links to each problem and move focus there after submit.
- Prevent duplicate consequential submissions with pending state and idempotent
  handling where possible. Distinguish a request still in progress from a
  completed request.
- Name destructive outcomes plainly, visually separate them from routine
  actions, and state the consequence before commitment. Prefer undo when it is
  safe; use confirmation for irreversible or costly changes.

## Loading and resilience

- Preserve layout with skeletons or reserved space during initial load. Avoid
  content jumps, repeated spinners, and blank screens when useful context can
  remain visible.
- Distinguish initial loading from refreshing existing data. Keep useful stale
  content available during a refresh and show its status without blocking the
  task unnecessarily.
- Show determinate progress for work with a measurable duration. For an unknown
  duration, explain what is happening and offer retry or recovery when it fails.

## Motion

Motion must communicate feedback, orientation, continuity, focus, or hierarchy.
Remove it when it does none of these.

- Make small feedback quicker than a menu, panel, or page transition. Use a
  consistent timing scale rather than ad-hoc durations.
- Prefer `transform` and `opacity` for frequent animation. Measure before
  relying on layout animation in a repeated interaction.
- Preserve spatial context: a popup should originate near its trigger, and a
  panel should leave by the same edge from which it entered.
- Do not block keyboard dismissal, focus changes, or direct input while a
  surface is animating. A transition should feel interruptible even when its
  implementation is simple.
- For direct manipulation such as drag, swipe, or a gesture-controlled sheet,
  track the pointer continuously, preserve the grab offset, capture the pointer,
  and settle from the release velocity. Do not fake a continuous gesture with an
  animation that starts only after release.
- Start ordinary UI motion calm. Reserve elastic or bouncing motion for an
  interaction that actually carried momentum.

## Depth and overlays

Layering expresses task priority.

- A blocking modal dims the inactive page, owns focus, and has a clear escape
  route. Escape closes the innermost eligible layer and restores focus to its
  trigger.
- Passive notifications must not cover a blocking decision. A menu, select, or
  popover belonging to an active modal may sit over that modal so its controls
  remain usable.
- Anchor non-blocking popups to their triggers. Use a dialog for a focused task,
  not a larger popover.
- Use translucency, blur, and shadow only when they clarify separation. Avoid
  stacking multiple translucent surfaces without checking text contrast and
  reduced-transparency behaviour.

## Typography and visual craft

- Build hierarchy from type size, weight, line height, and spacing together.
  Large display text generally needs tighter leading and tracking; body text
  needs comfortable leading and reliable contrast.
- Use a limited type scale, consistent icon sizing and stroke weight, and a
  deliberate radius family. Small misalignments, clipped icons, and inconsistent
  states reduce trust quickly.
- Use colour as a semantic signal, not the only signal. Pair important state
  with text, shape, position, or an icon.
- Support light and dark themes with surfaces, borders, and focus indicators
  that retain their roles.

## Data, responsive priority, and language

- For comparison-heavy data, align values by meaning, use tabular numerals for
  changing figures, and keep the active sort, filter, and result count visible.
  Design empty, no-result, partial-data, and restricted-access states as
  deliberately as the populated state.
- Decide deliberately how each narrow layout changes: stack task-related
  controls, horizontally scroll a table when comparison matters, or disclose
  secondary detail. Do not hide information required to complete the task.
- Accommodate longer translations, locale-aware dates and numbers, right-to-left
  layout, and text enlargement. Avoid fixed heights, directional language, and
  icons whose meaning depends on an unmirrored left/right position.

## Accessibility and review

- Use semantic controls, visible focus, accessible names and descriptions, and
  predictable document order. Preserve focus restoration when overlays close.
- Make the intended touch target comfortably usable without precise aiming.
  Keep the visual control compact only when its interactive area remains clear
  and accessible.
- Honour `prefers-reduced-motion`: replace travel, parallax, and elastic motion
  with short opacity, colour, or static state changes while retaining useful
  feedback. Make material surfaces more solid when transparency is reduced.
- Test the complete task at desktop and mobile sizes with keyboard-only input,
  realistic data, both themes, motion reduction, and failure/retry paths.
- Review normal speed and interrupted states. Fix delayed response, visual
  jumps, lost context, accidental priority conflicts, and feedback that competes
  with the task.
