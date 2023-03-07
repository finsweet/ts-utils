---
prev: 
  text: 'addListener()'
  link: '/addListener'
next:
  text: 'cloneNode()'
  link: '/cloneNode'
---

## `clearFormField()`

This util clears the form field's value and emits an input and changed event. If the field is a checkbox or a radio, it will unselect it.

| param                                       | value                                                                                                                                                                                                            |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| field: `FormField`                          | The `FormField` to clear                                                                                                                                                                                         |
| omitEvents: `AllowedEvent / AllowedEvent[]` | By default, events are dispatched from the `FormField`. In some cases, these events might collide with other logic of the system. You can omit certain events from being dispatched by passing them in an array. |

| List of `AllowedEvent` |
| ---------------------- |
| `DOMContentLoaded`     |
| `fullscreenchange`     |
| `fullscreenerror`      |
| `pointerlockchange`    |
| `readystatechange`     |
| `visibilitychange`     |

## Example

```ts
import { clearFormField } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const formFieldEl = document.querySelector('#fs-field') as HTMLInputElement;

  // Clearing form field and omitting "visibilitychange" event to be dispatched upon clearing form field
  clearFormField(formFieldEl, 'visibilitychange');
});
```