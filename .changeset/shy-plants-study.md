---
'@finsweet/ts-utils': minor
---

- `addListener()`: Allow for null | undefined targets. If that's the case, no events will be added and the return callback will be a simple `noop`.
- Created new `noop()` helper, it literally does nothing.
