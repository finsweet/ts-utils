---
prev: 
  text: 'PickRequired'
  link: '/pickRequired'
next:
  text: 'UnionToIntersection'
  link: '/unionToIntersection'
---

## `RequiredExcept`

Using `RequiredExcept<Original, Keys extends keyof Original>` the picked keys will become Partial and the rest of the interface will become Required.

## Example

```ts
type Obj = {
  a?: 1;
  b?: 2;
  c?: 3;
};

type NewObj = RequiredExcept<Obj, 'b'>;
// NewObj looks like:
// { a: 1, b?: 2, c: 3 }
```
