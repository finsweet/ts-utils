---
prev: 
  text: 'Breakpoints'
  link: '/breakpoints'
next:
  text: 'CSS'
  link: '/css'
---

## `closeDropdown()`

`closeDropdown()` closes a dropdown element

| param                            | value            |
| -------------------------------- | ---------------- |
| dropdownToggle: `HTMLDivElement` | Dropdown element |
| focusToggle?: `Boolean`          | Focus dropdown   |

Example:

```ts
import { closeDropdown } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
// Query the dropdown element
const dropdownEl = document.querySelector('#fs-dropdown') as HTMLDivElement;

// Query the element that should trigger the dropdown close function
const closeDropdownEl = document.querySelector('#fs-close-dropdown') as HTMLButtonElement;

// Bind an event listener to the close dropdown element to execute the function
closeDropdownEl.addEventListener('click', () => closeDropdown(dropdownEl));
}
```