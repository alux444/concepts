---
name: ui-interaction-design
description: Design or review accessible interfaces with intentional feedback, motion, navigation continuity, stable loading layouts, and clear visual hierarchy. Use for UI implementation, design-system work, interaction polish, or investigating flicker, lost state, and layout shifts.
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

Reuse the project's UI kit, semantic tokens, and established spacing, icon sizes,
hover treatment, and feedback conventions. Add a new pattern only when the existing
ones cannot express the task clearly. Avoid helper text that repeats a clear label.

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
- Distinguish persistent selection from hover and press states. Review combinations
  such as selected-plus-hover and selected-plus-focus; keep semantic colours and
  status indicators readable on each surface. Keep selectable rows generous without
  nesting interactive controls inside other controls.
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

## Navigation and state continuity

- Separate the requested destination from its asynchronous data. Keep navigation
  state, URLs, and history synchronized where applicable. Clear selections tied to
  the old destination, isolate responses by identity, and base rapid input on the
  latest requested state. A data failure need not undo the user's navigation.
- Separate shared UI lifetime from screen lifetime. Keep headers, navigation, and
  ongoing status in a stable parent while the task's changing region is replaced.
  Moving from a list to an item editor should not restart a shared session timer.
- Use stable entity keys for lists. Avoid keying shared shells by pathname, changing
  component types in the same slot, or moving persistent UI between conditional
  branches. Reset a subtree only when the product requires it, such as switching
  to a different session or account.
- Own shared data and recovery state at the boundary that must survive navigation.
  Reuse the existing cache and consistent query keys instead of independently
  restoring the same session in each screen. Keep frequent updates, such as clock
  ticks, local to their display where possible.
- Preserve drafts, selection, and focus during local updates. Make scroll and focus
  changes intentional: a new screen may need heading focus and a scroll reset;
  refreshing data should not unexpectedly move the user. Handle rapid navigation
  and late responses without showing an obsolete screen.
- Diagnose flicker before optimizing. In React, a re-render does not inherently
  replace DOM: distinguish remounts, loading branches, entrance animations, layout
  movement, and expensive rendering. Reduce overly broad subscriptions and use
  profiling to justify memoization rather than adding it everywhere. Apply the
  equivalent lifecycle reasoning in other UI frameworks.

## Responsiveness and loading

- Acknowledge input immediately and keep navigation, selection, and editing usable
  while requests run wherever those actions remain valid. Render information known
  locally without waiting for server data; load only the missing parts asynchronously.
- Reuse valid cached data and prefetch a bounded set of likely next destinations
  where useful. Never present one entity's cached content as another's. Distinguish
  unknown or pending results from confirmed empty results.
- Use optimistic mutations only when the outcome is predictable and safely
  recoverable. Preserve drafts, reconcile with the response, and provide rollback
  or retry on failure.
- Preserve layout with skeletons or reserved space during initial load. Avoid
  content jumps, repeated spinners, and blank screens when useful context can
  remain visible.
- Distinguish initial loading from refreshing existing data. Keep useful stale
  content available during a refresh and show its status without blocking the
  task unnecessarily. Retain it only while valid; clear it when identity or access
  changes require it. Scope pending indicators and errors to the affected region.
- Reserve media dimensions or aspect ratios and match skeletons to the final
  layout. Keep action and status areas stable as labels change, using sizing that
  still accommodates narrow widths and enlarged text without clipping.
- Show determinate progress only when actual progress is known. Otherwise use an
  appropriate spinner or skeleton, explain the pending work where useful, and
  offer retry or recovery when it fails.

## Proportionate error feedback

- Keep usable content and controls visible after recoverable failures. For missing
  supplemental data or failed background refreshes, prefer compact local status
  and retry over large alerts that displace the user's work.
- Use brief toasts for explicit action outcomes when appropriate to the product's
  conventions. Avoid repeated notifications from polling, automatic retries, or
  rendering. Keep unresolved problems and recovery actions discoverable after a
  toast disappears, and preserve the user's input.
- Keep field validation beside its input. Reserve blocking error states for cases
  with no useful content, unavailable resources, or access/authentication failures.
  Remove protected stale content when access is revoked.
- Match recovery to the cause: retry transient failures, offer sign-in for expired
  authentication, and provide a way away from missing resources. Announce errors
  accessibly and retain safe support identifiers without exposing raw backend errors.

## Motion

Default to immediate, stable state changes. Add motion when requested or when it
clarifies feedback, orientation, continuity, focus, or hierarchy. Never use animation,
minimum loading times, or disabled navigation to disguise latency.

- Make small feedback quicker than a menu, panel, or page transition. Use a
  consistent timing scale through shared tokens rather than ad-hoc durations.
  Prefer simple platform transitions, such as CSS on the web; add an animation
  dependency only for a concrete unmet need. Clean up animation resources when
  their owning component or screen is removed.
- Avoid replaying page-wide entrance fades during routine navigation or stacking
  shell and content fades. Do not add delays or animation to disguise a remount.
  Resolve known destinations directly where practical instead of flashing an
  intermediate redirect screen.
- Prefer `transform` and `opacity` for frequent animation. Measure before
  relying on layout animation in a repeated interaction.
- Preserve spatial context: a popup should originate near its trigger, and a
  panel should leave by the same edge from which it entered.
- Do not block keyboard dismissal, focus changes, or direct input while a
  surface is animating. A transition should feel interruptible even when its
  implementation is simple.
- Keep overlay content and layout stable until its exit completes. Separate
  visibility from selected content; defer dismissal-related selection clearing,
  form resets, and validation cleanup to the actual exit lifecycle callback,
  not a guessed timeout. Guard cleanup against a quick reopen so an old exit
  cannot clear the new selection. Handle reduced or absent motion without waiting
  for an animation event that may never fire.
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
- Test the complete task at supported device or window sizes with relevant input
  methods, realistic data, supported themes, motion reduction, and failure/retry
  paths. Include slow requests, repeated navigation, and back navigation when
  transitions change; check shared UI, input, scroll, and focus continuity.
- Review normal speed and interrupted states. Fix delayed response, visual
  jumps, lost context, accidental priority conflicts, and feedback that competes
  with the task.
- Audit overlay stability through opening, submission, validation, closing, and
  rapid dismissal/reopening. Exercise supported footer actions, close controls,
  Escape, and backdrop dismissal at relevant densities and narrow widths. Check
  normal and reduced motion, focus restoration, and underlying page scroll.
  When diagnosing a collapse, inspect visible content and untransformed layout
  dimensions during exit so intentional scale or opacity does not conceal it.
- Keep regression checks focused on the user-visible contract: retained input,
  correct navigation, or shared UI remaining available. Assert mounted-element
  identity only when its lifetime is itself the requirement. Avoid exact render
  counts, animation frames, timing, or pixel-geometry assertions.
- Pair flow checks with screenshots of meaningful visible states. Static captures
  cannot prove the absence of transient flicker; exercise transitions with normal
  motion as well as reduced motion when relevant.
