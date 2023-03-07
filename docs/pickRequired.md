---
prev: 
  text: 'PartialExcept'
  link: '/partialExcept'
next:
  text: 'RequiredExcept'
  link: '/requiredExcept'
---

## `PickRequired`

Using the `PickRequired<Original, Keys extends keyof Original>` the picked keys will become required and the rest of the interface will stay the same.

## Example

```ts
type Obj = {
  a: 1;
  b?: 2;
  c?: 3;
};

type NewObj = PickRequired<Obj, 'b'>;
// NewObj looks like:
// { a: 1, b: 2, c?: 3 }
```
