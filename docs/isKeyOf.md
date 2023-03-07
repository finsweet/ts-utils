---
prev: 
  text: 'Instances'
  link: '/instances'
next:
  text: 'isFormField()'
  link: '/isFormField'
---

## `isKeyOf()`

Check if a key is included in a readonly array

| param                  | value                     |
| ---------------------- | ------------------------- |
| key: `string`          | The main element          |
| source: `readonly T[]` | Readonly array of strings |

| Return value: `Boolean` |
| ----------------------- |

## Example

```ts
const keyToCheck = 'hello';

const arrayToCheck = ['hello', 'how', 'are', 'you'];

const isKeyPresent = isKeyOf(keyToCheck, arrayToCheck); // true
```
