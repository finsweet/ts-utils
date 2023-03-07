---
prev: 
  text: 'noop()'
  link: '/noop'
next:
  text: 'removeChildElements()'
  link: '/removeChildElements'
---

## `queryElement()`

This util queries an element and make sure it's the correct type

| param                   | value                                                  |
| ----------------------- | ------------------------------------------------------ |
| selector: `string`      | Selector string                                        |
| instance: `Instance<T>` | Instance target of the element type i.e HTMLElement    |
| scope: `ParentNode`     | The scope context where to query. Defaults to document |
| element: `HTMLElement`  | The target element                                     |
