# @finsweet/ts-utils

## 0.37.3

### Patch Changes

- 59ac38c: docs: Added new README.md with detailed explanation of all utils

## 0.37.2

### Patch Changes

- d4b3fae: `restartWebflow`: Fixed slider modules restart to ensure they are always redrawed.

## 0.37.1

### Patch Changes

- 3a9fb7e: Added more instances type-guards

## 0.37.0

### Minor Changes

- a57b300: Created new typeguards/instances utils

## 0.36.0

### Minor Changes

- 0024923: Added primitive type guards

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
