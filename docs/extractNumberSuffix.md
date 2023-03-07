---
prev: 
  text: 'extractCommaSeparatedValues()'
  link: '/extractCommaSeparatedValues'
next:
  text: 'findTextNode()'
  link: '/findTextNode'
---

## `extractNumberSuffix()`

This util returns the number value that is suffixed in a string

| param            | value                 |
| ---------------- | --------------------- |
| string: `string` | The string to extract |

| Return value: `number / undefined`                      |
| ------------------------------------------------------- |
| The resulted number extracted from the string, if found |

## Example

```ts
const string = 'click-2';
const string2 = 'click';

extractNumberSuffix(string);
// 2

extractNumberSuffix(string2);
// undefined
```