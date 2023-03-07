---
prev: 
  text: 'Map Entries'
  link: '/mapEntries'
next:
  text: 'Pick Partial'
  link: '/pickPartial'
---

## `PartialExcept`

Using the `PartialExcept<Original, Keys extends keyof Original>` helper the picked keys will become Required and the rest of the interface will become Partial.

## Example

```ts
type Obj = {
  a: 1;
  b: 2;
  c: 3;
};

type NewObj = PartialExcept<Obj, 'b'>;
// NewObj looks like:
// { a?: 1, b: 2, c?: 3 }
```
