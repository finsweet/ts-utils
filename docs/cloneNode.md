---
prev: 
  text: 'clearFormField()'
  link: '/clearFormField'
next:
  text: 'extractCommaSeparatedValues()'
  link: '/extractCommaSeparatedValues'
---

## `cloneNode()`

This util helps you deep clone a node that has the same type as the original one

| param                  | value             |
| ---------------------- | ----------------- |
| node: `T extends Node` | The node to clone |

| Return value: `T` |
| ----------------- |
| The cloned node.  |

## Example

```ts
import { cloneNode } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  // querying a template element to clone
  const imageTemplate = document.querySelector('#fs-image') as HTMLImageElement;

  // using the cloneNode util to make a copy of the template element
  const newImage = cloneNode(imageTemplate);
});
```