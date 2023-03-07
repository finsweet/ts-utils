---
prev: 
  text: 'PartialExcept'
  link: '/partialExcept'
next:
  text: 'PickRequired'
  link: '/pickRequired'
---

## `PickPartial`

Using the `PickPartial<Original, Keys extends keyof Original>` the picked keys will become Partial and the rest of the interface will stay the same.

## Example

```ts
type Obj = {
  a: 1;
  b: 2;
  c: 3;
};

type NewObj = PickPartial<Obj, 'b'>;
// NewObj looks like:
// { a: 1, b?: 2, c: 3 }
```