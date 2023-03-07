---
prev: 
  text: 'populateSelectOptions()'
  link: '/populateSelectOptions'
next:
  text: 'CopyJSONButton'
  link: '/copyJSONButton'
---


## `removeSelectOptions()`

This util removes all the options from an HTMLSelectElement.

| param                              | value                                                                                                       |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| selectElement: `HTMLSelectElement` | The select element.                                                                                         |
| preserveEmpty: `boolean`           | If set to true, any option without a value (like a placeholder option) will be preserved. Default is false. |

## Example

```ts
import { removeSelectOptions } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  // quering select element
  const selectEl = document.querySelector('#fs-select') as HTMLSelectElement;

  // using the removeSelectOptions util to remove options from the select element
  removeSelectOptions(selectEl);
});
```