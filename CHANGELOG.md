# @finsweet/ts-utils

## 0.35.0

### Minor Changes

- 9465c47: - `addListener()`: Allow for null | undefined targets. If that's the case, no events will be added and the return callback will be a simple `noop`.
  - Created new `noop()` helper, it literally does nothing.

## 0.34.1

### Patch Changes

- 6cb3089: Improved type definitions for `addListener()` helper.

## 0.34.0

### Minor Changes

- c7a9310: Added new `addListener()` helper.
