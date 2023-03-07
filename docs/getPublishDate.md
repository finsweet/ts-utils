---
prev: 
  text: 'getCurrentBreakpoint()'
  link: '/getCurrentBreakpoint'
next:
  text: 'getSiteId()'
  link: '/getSiteId'
---



## `getPublishDate()`

Extracts the publish date of a Webflow site.

| param             | value                                                                |
| ----------------- | -------------------------------------------------------------------- |
| page?: `Document` | The page to get the publish date from. Defaults to the current page. |

| Return value: `String` |
| ---------------------- |
| Date object            |

## Example

```ts
import { getPublishDate } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const lastPublishDate = getPublishDate();
  console.log(lastPublishDate);
});
```

## Output

```
Fri Dec 16 2022 11:48:06 GMT+0530 (India Standard Time)
```