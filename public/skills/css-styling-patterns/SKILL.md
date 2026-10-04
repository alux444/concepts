---
name: css-styling-patterns
description: Implement frontend styling through existing components, semantic tokens, responsive composition, and accessible state treatments. Use for component CSS, theme integration, and visual polish.
---

# CSS styling patterns

## Find the owning layer

Read the project's component API, token contracts, and theme setup before styling.
Use the highest-level component that fits the task; tune an existing variant
before recreating a control or overriding its internal selectors.

- Primitive tokens define palette, spacing, typography, geometry, and motion.
- Semantic tokens assign roles across supported themes.
- Component tokens express recurring needs not covered by semantic roles.
- Component styles own visual treatment and interactive states.
- Application CSS owns composition: layout, responsive arrangement, and placement.

Fix recurring mismatches at their owner. Keep local exceptions narrow; extend a
component contract when consumers need a durable styling hook. Keep generated
CSS generated. Do not add a package or fork behavior solely for a new appearance.

## Compose resilient layouts

- Use existing layout primitives or grid/flex with token-based gaps. Preserve
  meaningful reading and keyboard order as controls wrap or stack.
- Let content determine height. Use stretching for equal-height groups, `min-width: 0`
  for shrinkable flex/grid children, and deliberate wrapping for long content.
- Use bounded fluid sizing such as `clamp()` when appropriate; retain text scaling
  and readable measures. Prefer logical properties for directional layouts.
- Reserve media dimensions or aspect ratios. Check font fallback and loaded-font
  wrapping; do not hide overflow to conceal clipped text, icons, or focus rings.
- For comparison-heavy tables, preserve usable horizontal scrolling when needed.
  Verify the scroll position actually changes, not just that content overflows.

## Style the full state contract

Use semantic variables for foregrounds, surfaces, borders, selection, focus,
feedback, and motion. Scope selectors to the component; avoid global SVG or
control overrides and ad hoc visual values in product screens.

Check default, hover, pressed, selected, selected-plus-hover, focus-visible,
disabled, loading, invalid, and semantic feedback where supported. A subdued
surface remains readable and interactive; it does not mean disabled.

Keep keyboard focus distinct from selection and visible on every edge. Separate
visual glyph size from hit-target size. Prefer native control behavior when
custom styling can preserve it. Theme portals and third-party wrappers at their
actual render boundary; verify theme inheritance rather than assuming it.

## Add effects deliberately

Use borders, tints, and shadows to communicate grouping or elevation. Layered
shadows can soften depth; gradient borders can use layered `padding-box` and
`border-box` backgrounds. Apply effects only when they fit the established identity.
Gradient text needs a readable fallback and review in supported display modes.

Transition explicit properties rather than `all`. Prefer transform and opacity
for frequent motion; use shared timing tokens and reduced-motion alternatives.
Do not scale or lift every control, loop decorative animations, or hide essential
actions behind hover. Keep loading indicators and state changes layout-stable.

## Verify integration

Inspect real components together, including small controls, portals, and feedback.
Check supported themes, narrow widths, longer text, focus, and reduced motion.
Review resolved contrast and icon stroke extents at rendered size.

For a reusable kit, verify the exported consumer receives the same CSS, fonts,
wrappers, and public components as the preview. Run relevant project checks and
report reused contracts, justified extensions, and states actually reviewed.
