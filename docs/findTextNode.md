---
prev: 
  text: 'extractNumberSuffix()'
  link: '/extractNumberSuffix'
next:
  text: 'getAllParents()'
  link: '/getAllParents'
---

## `findTextNode()`

This util finds the first child text node of an element

| param                  | value                      |
| ---------------------- | -------------------------- |
| element: `HTMLElement` | The element to search into |

| Return value: `ChildNode                    | undefined` |
| ------------------------------------------- | ---------- |
| The first child node text element, if found |

## Example

```ts
import { findTextNode } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const parentElement = document.querySelector('#fs-parent') as HTMLElement;

  // The node of the first child text element inside the parent
  const childTextNode = findTextNode(parentElement);
});
```