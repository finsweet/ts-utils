---
prev:
  text: 'Type Guards'
  link: '/type-guards'
next:
  text: 'Helpers'
  link: '/helpers'
---

# Types

## `FormField`

`FormField` is the Form Field element on Webflow

## `LooseAutocomplete`

A type that allows for variable autocompletion with loose validation.

Example:

```typescript
const f = (a: LooseAutocomplete<'a' | 'b'>) => a;
f(''); // VSCode autocomplete shows 'a' and 'b' as options, but doesn't fail when a different option is provided.
f('a'); // Valid
f('b'); // Valid
f('c'); // Valid
```

## `MapEntries`

`MapEntries<MapToConvert>` converts a `Map<K, V>` type to its equivalent when performing `[...map.entries()]`.

Example:

```typescript
const map: MapType = new Map(['key', 'value']);
// Same type as MapEntries<MapType>
const entries = [...map.entries()];
typeof entries === MapEntries<MapType>;
```

## `PartialExcept`

Using the `PartialExcept<Original, Keys extends keyof Original>` helper the picked keys will become Required and the rest of the interface will become Partial.

Example:

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

## `PickPartial`

Using the `PickPartial<Original, Keys extends keyof Original>` the picked keys will become Partial and the rest of the interface will stay the same.

Example:

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

## `PickRequired`

Using the `PickRequired<Original, Keys extends keyof Original>` the picked keys will become required and the rest of the interface will stay the same.

Example:

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

## `RequiredExcept`

Using `RequiredExcept<Original, Keys extends keyof Original>` the picked keys will become Partial and the rest of the interface will become Required.

Example

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

## `UnionToIntersection`

`UnionToIntersection<Union>` converts a union like `Interface1 | Interface2` to an intersection `Interface1 & Interface2`.
