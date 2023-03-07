---
prev: 
  text: 'isFormField()'
  link: '/isFormField'
next:
  text: 'Primitives'
  link: '/primitives'
---

## `isNotEmpty()`

This util makes sure there are no `null` or `undefined` in the passed value. Useful for type safety when filtering empty elements from an array.

| param                         | value          |
| ----------------------------- | -------------- |
| value: `T / null / undefined` | value to check |

| Return value: `Boolean` |
| ----------------------- |

## Example

```ts
const items = [1, null, 4, undefined, 8];

const filteredItemsError: number[] = items.filter((item) => value !== undefined && value !== null); // Type '(number | null | undefined)[]' is not assignable to type 'number[]'.

const filteredItemsSuccess: number[] = items.filter(isNotEmpty); // Success!
```