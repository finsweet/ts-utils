---
prev: 
  text: 'cloneNode()'
  link: '/cloneNode'
next:
  text: 'extractNumberSuffix()'
  link: '/extractNumberSuffix'
---

## `extractCommaSeparatedValues()`

This util converts a string of comma separated values to an array of values.

| param                       | value                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------- |
| string: `string`            | Comma separated string                                                                   |
| compareSource?: `undefined` | Acts as a type guard for making sure the extracted values match the compared source      |
| defaultValue?: `undefined`  | Is set when there is no matching results after comparing with the source                 |
| filterEmpty?: `undefined`   | Defines if empty values should be filtered out of the returned array. Defaults to `true` |

| Return value: `string[]`                                      |
| ------------------------------------------------------------- |
| An array of strings that were originally seperated by a comma |

## Example

```ts
  const targetString = 'valueone, valuetwo, valuethree';\

  const resultString = extractCommaSeparatedValues(targetString);
  // resultString is ["valueone", "valuetwo", "valuethree"]
```