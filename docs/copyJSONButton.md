---
prev: 
  text: 'removeSelectOptions()'
  link: '/removeSelectOptions'
next:
  text: 'Interaction'
  link: '/interaction'
---


## `CopyJSONButton`

This util is used to copy the data of a Webflow component which can then be pasted into Webflow designer directly.

| param                               | value                                                |
| ----------------------------------- | ---------------------------------------------------- |
| element: `HTMLElement`              | The element to trigger the copy                      |
| copyData: `Record<string, unknown>` | The JSON data of the element that needs to be copied |
| successText?: `string`              | Text to showcase on successful copy                  |
| errorText?: `string`                | Text to shocase when an error occurs while copying   |
| successCSSClass?: `string`          | Class to be added on the element on successful copy. |

> How to get `copyData`?
>
> 1. Open your webflow designer
> 2. Paste this code in your dev tools console
>
> ```js
> document.addEventListener('copy', ({ clipboardData }) => {
>   const webflowData = clipboardData.getData('application/json');
>
>   const type = 'text/plain';
>   const blob = new Blob([webflowData], { type });
>   const data = [
>     new ClipboardItem({
>       [type]: blob,
>     }),
>   ];
>
>   navigator.clipboard.write(data);
>   console.log(webflowData);
> });
> ```
>
> 3. Now, select/click/focus on the Webflow component that you wish to copy the JSON data of.
> 4. Press `CTRL+C` or `CMD+C`
> 5. Check the console logs in the dev tools and copy the JSON data from there to further use it in your code as per your prefernece.


### Available methods:
## `updateCopyData()`:
  Updates the JSON data to be copied.

  | param                                  | value                                         |
  | -------------------------------------- | --------------------------------------------- |
  | newCopyData: `Record<string, unknown>` | The new JSON data of the element to be copied |

## `updateTextContent()`:
  Updates the button's text content.

  | param             | value                        |
  | ----------------- | ---------------------------- |
  | newText: `string` | The new text to be displayed |

## Example

```ts
import { CopyJSONButton } from '@finsweet/ts-utils';

// The JSON data of the element to be copied
import copyData from './webflow-component.json';

window.Webflow ||= [];
window.Webflow.push(() => {
  // The element to trigger the copy on click
  const element = document.querySelector<HTMLAnchorElement>('#fs-trigger');
  if (!element) return;

  // Initializing the method
  new CopyJSONButton({ element, copyData, successText: 'Copied! Paste in Webflow' });
});
```
