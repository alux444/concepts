# Common scenario coverage

Use this as a selection guide, not a requirement to invent every state for every
screen. Derive actual variants from product behavior, data contracts, and design
requirements. Record applicability in the matrix.

| Dimension | Relevant common cases |
| --- | --- |
| Content volume | Empty, single item, typical, many items, long scrolling list, pagination or virtualized list boundaries |
| Content shape | Long names, multiline descriptions, missing optional fields, missing/broken media, realistic extreme numbers, zero, decimals |
| Async state | Initial loading, loaded, initial error, stale-data refresh error, retry in progress, retry success |
| Form flow | Blank, prefilled, validation errors, disabled actions, submitting, failure preserving values, saved result |
| Selection | None, one, multiple when supported, selected plus focus, filter with results, filter with no results |
| Overlay/navigation | Dialog/sheet/drawer open, cancel, confirm, menu, active tab, nested screen, back navigation, sticky/fixed controls while scrolling |
| Overlay lifecycle | Opening, submit/validation, closing with content retained, rapid dismiss/reopen with a new selection, supported dismissal paths, restored focus and page scroll |
| Authorization | Signed out, each materially different role, access denied, expired session when supported |
| Recovery | Offline, local save, pending sync, failed sync, successful sync, reload or relaunch restoration when supported |
| Navigation continuity | Slow transition, repeat/back navigation, rapid navigation with late responses, persistent shared UI, retained drafts/selection, intentional focus and scroll |
| Result variants | Each supported result type, combinations, no result, all items receiving the same treatment, mixed treatments |
| Adaptive layout | Usual and narrow supported viewport/window, relevant breakpoint, device/orientation changes, dense layout at representative sizes |
| Platform integration | Safe areas and system insets, app/window chrome, on-screen keyboard, supported split-screen or window resizing, relevant permission prompts |
| Accessibility/display | Focus states, keyboard traversal, reduced motion, supported text/display scaling, themes/locales/directions, touch targets, contrast |

Prioritize states that change layout or actions. For example, a results screen with
two independent improvements needs neither, each alone, both, and a dense all-items
case. A dashboard needs empty and populated states, long labels, realistic large
values, and relevant loading/error variants. An editor needs validation and failed
save preservation as well as its default layout.

Useful matrix columns:

`ID | Screen | Role | Scenario | Fixture/setup | Display configuration | Assertion | Capture | Status/gap`

Keep the Assertion column focused on the minimum evidence that the scenario is
ready and its core flow works: essential content or controls are visible, and the
main action produces the expected result. For example, verify that a populated list
appears and opening an item shows its detail screen; do not assert every row's text
or styling. Add precise checks only when they define the scenario, such as input
remaining after a failed save. Use screenshot review for visual detail.

Display configuration can identify a browser viewport, desktop window, or mobile
device and orientation. Record relevant OS/runtime, pixel density, text size, theme,
and locale alongside it so captures can be reproduced and compared appropriately.
Choose supported configurations that expose meaningful differences, not every
possible device and setting combination.

Keep the matrix and test case names aligned. Inventory screens separately when that
makes omitted screens easier to see. Distinguish planned, implemented, captured,
reviewed, and comparison-passed work rather than treating them as interchangeable.
For manual review, record setup and inspection steps without implying automated
checks exist. Record unsupported and blocked cases with reasons.
