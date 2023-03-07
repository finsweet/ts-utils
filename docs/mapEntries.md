---
prev: 
  text: 'FormField'
  link: '/formField'
next:
  text: 'PartialExcept'
  link: '/partialExcept'
---

## `MapEntries`

`MapEntries<MapToConvert>` converts a `Map<K, V>` type to its equivalent when performing `[...map.entries()]`.

## Example

```typescript
const map: MapType = new Map(['key', 'value']);
// Same type as MapEntries<MapType>
const entries = [...map.entries()];
typeof entries === MapEntries<MapType>;
```
