---
prev: 
  text: 'getCollectionListWrappers()'
  link: '/getCollectionListWrappers'
next:
  text: 'getPublishDate()'
  link: '/getPublishDate'
---



## `getCurrentBreakpoint()`

Checks the current breakpoint based on the window media.

Please refer to [WEBFLOW_BREAKPOINTS](#WEBFLOW_BREAKPOINTS) for the defined breakpoints reference table.

| Return value: `String`                    |
| ----------------------------------------- |
| Breakpoint key matching media query value |

## Example

```ts
import { getCurrentBreakpoint } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const currentBreakpoint = getCurrentBreakpoint();
  console.log(currentBreakpoint);
});
```

## Output

```
medium
```