---
prev: 
  text: 'setFormFieldValue()'
  link: '/setFormFieldValue'
next:
  text: 'throwError()'
  link: '/throwError'
---

## `simulateEvent()`

This util dispatches a custom event that bubbles from the target.


| param                     | value |
| ------------------------- | ------ |
| target: `EventTarget` | The element where the event will originate. |
| target: `AllowedEvent` or `Array<AllowedEvent>` | The element where the event will originate. |


| List of `AllowedEvent` |
| ---------------------- |
| `w-close`              |
| `DOMContentLoaded`     |
| `fullscreenchange`     |
| `fullscreenerror`      |
| `pointerlockchange`    |
| `readystatechange`     |
| `visibilitychange`     |

| Return value: `Boolean`                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- |
| True if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise. |