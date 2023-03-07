---
prev: 
  text: 'Get Started'
  link: '/get-started'
next:
  text: 'closeDropdown()'
  link: '/closeDropdown'
---

## Breakpoints

`WEBFLOW_BREAKPOINTS` is a Map that defines the default media queries for Webflow's breakpoints.

List of default media queries that are already defined:

| key (`string`) | value (`string`)   |
| -------------- | ------------------ |
| tiny           | (max-width: 479px) |
| small          | (max-width: 767px) |
| medium         | (max-width: 991px) |
| main           | (min-width: 992px) |

Example:

```ts
import { WEBFLOW_BREAKPOINTS } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
const breakpointMedium = WEBFLOW_BREAKPOINTS.get('medium');
  if (breakpointMedium) {
    // Create a media condition that targets viewports at least 991px wide
    const mediaQuery = window.matchMedia(breakpointMedium);
    // Check if the media query is true
    if (mediaQuery.matches) {
      // do something!
    }
  }
  }
```