---
prev: 
  text: 'Components'
  link: '/components'
next:
  text: 'Types'
  link: '/types'
---

# Type Guards

## `Instances`

Type-gaurd methods for elements.

| method                    | param             | value                           |
| ------------------------- | ----------------- | ------------------------------- |
| `isFile()`                | target: `unknown` | target is a File                |
| `isNode()`                | target: `unknown` | target is a Node                |
| `isElement()`             | target: `unknown` | target is an Element            |
| `isHTMLElement()`         | target: `unknown` | target is a HTMLElement         |
| `isHTMLInputElement()`    | target: `unknown` | target is a HTMLInputElement    |
| `isHTMLSelectElement()`   | target: `unknown` | target is a HTMLSelectElement   |
| `isHTMLTextAreaElement()` | target: `unknown` | target is a HTMLTextAreaElement |
| `isHTMLVideoElement()`    | target: `unknown` | target is a HTMLVideoElement    |
| `isHTMLAnchorElement()`   | target: `unknown` | target is a HTMLAnchorElement   |
| `isHTMLImageElement()`    | target: `unknown` | target is a HTMLImageElement    |
| `isHTMLOptionElement()`   | target: `unknown` | target is a HTMLOptionElement   |
| `isHTMLButtonElement()`   | target: `unknown` | target is a HTMLButtonElement   |

| Return value: `Boolean` |
| ----------------------- |

## `isKeyOf()`

Check if a key is included in a readonly array

| param                  | value                     |
| ---------------------- | ------------------------- |
| key: `string`          | The main element          |
| source: `readonly T[]` | Readonly array of strings |

| Return value: `Boolean` |
| ----------------------- |

Example

```ts
const keyToCheck = 'hello';

const arrayToCheck = ['hello', 'how', 'are', 'you'];

const isKeyPresent = isKeyOf(keyToCheck, arrayToCheck); // true
```

## `isFormField()`

Checks if an element is a form field element

| param                                   | value   |
| --------------------------------------- | ------- |
| element: `Element / EventTarget / null` | element |

| Return value: `Boolean` |
| ----------------------- |

## `isNotEmpty()`

This util makes sure there are no `null` or `undefined` in the passed value. Useful for type safety when filtering empty elements from an array.

| param                         | value          |
| ----------------------------- | -------------- |
| value: `T / null / undefined` | value to check |

| Return value: `Boolean` |
| ----------------------- |

Example:

```ts
const items = [1, null, 4, undefined, 8];

const filteredItemsError: number[] = items.filter((item) => value !== undefined && value !== null); // Type '(number | null | undefined)[]' is not assignable to type 'number[]'.

const filteredItemsSuccess: number[] = items.filter(isNotEmpty); // Success!
```

## `Primitives`

Type-gaurd methods for primitives

| method          | param            | value                       |
| --------------- | ---------------- | --------------------------- |
| `isString()`    | value: `unknown` | type of value is a string   |
| `isNumber()`    | value: `unknown` | type of value is a number   |
| `isBigint()`    | value: `unknown` | type of value is a bigint   |
| `isBoolean()`   | value: `unknown` | type of value is a boolean  |
| `isSymbol()`    | value: `unknown` | type of value is a symbol   |
| `isUndefined()` | value: `unknown` | type of value is undefined  |
| `isNull()`      | value: `unknown` | type of value is null       |
| `isFunction()`  | value: `unknown` | type of value is a function |
| `isObject()`    | value: `unknown` | type of value is an object  |

| Return value: `Boolean` |
| ----------------------- |
