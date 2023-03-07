---
prev: 
  text: 'getPublishDate()'
  link: '/getPublishDate'
next:
  text: 'restartWebflow()'
  link: '/restartWebflow'
---


## `getSiteId()`

Extracts the Webflow Site ID of the website.

| param             | value                                                           |
| ----------------- | --------------------------------------------------------------- |
| page?: `Document` | The page to get the site ID from. Defaults to the current page. |

| Return value: `String` |
| ---------------------- |
| The id of the site     |

## Example

```ts
import { getSiteId } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const siteId = getSiteId();
  console.log(siteId);
});
```

## Output

```
5f10844b0e20ffdd9de0fbea
```
