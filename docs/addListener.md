---
prev: 
  text: 'UnionToIntersection'
  link: '/unionToIntersection'
next:
  text: 'clearFormField()'
  link: '/clearFormField'
---

## `addListener()`

This util adds an event listener to an element.

| param                                        | value                                                                                                     |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| target: `TargetInterface / null / undefined` | Target element                                                                                            |
| type: `Type`                                 | The name of the event                                                                                     |
| listener: `Listener`                         | The function to run when the event occurs                                                                 |
| options: `boolean / AddEventListenerOptions` | Available options (https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#options) |

| Return value: `function`                                  |
| --------------------------------------------------------- |
| A callback to remove the event listener from the element. |

## Example

```ts
import { addListener } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const targetElement = document.querySelector('#fs-target') as HTMLButtonElement;

  // The callback removes the element from the event listener
  const listenerFunction = addListener(targetElement, 'click', () => console.log('I was clicked!'));

  // Remove listener
  listenerFunction();
});
```
