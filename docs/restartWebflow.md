---
prev: 
  text: 'getSiteId()'
  link: '/getSiteId'
next:
  text: 'populateSelectOptions()'
  link: '/populateSelectOptions'
---


## `restartWebflow()`

Restarts the Webflow JS library.

| param                       | value                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------- |
| modules?: `WebflowModule[]` | If passed, only those modules will be restarted instead of the whole `Webflow` instance |

| Available modules |
| ----------------- |
| `ix2`             |
| `commerce`        |
| `lottie`          |
| `lightbox`        |
| `slider`          |
| `tabs`            |

## Example

```ts
import { cloneNode, restartWebflow } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const image = document.querySelector('img');
  if (!image) return;

  // duplicating and appending the image element with an interaction
  const newImage = cloneNode(image);
  document.body.append(newImage);

  // restarting Webflow interactions to ensure that the interaction on new image element works
  restartWebflow();
});
```
