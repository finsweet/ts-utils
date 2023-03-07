---
prev: 
  text: 'restartWebflow()'
  link: '/restartWebflow'
next:
  text: 'removeSelectOptions()'
  link: '/removeSelectOptions'
---


## `populateSelectOptions()`

This util helps to populate the options for a select element.

| param                                               | value                                                                                                    |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| selectElement: `HTMLSelectElement`                  | The select element to populate.                                                                          |
| options: `string[] / (readonly [string, string])[]` | The options to populate. Accepts either a single Array of values, or an Array with [text, value] tuples. |

## Example

```ts
import { populateSelectOptions } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  // quering select element
  const selectEl = document.querySelector('#fs-select') as HTMLSelectElement;
  const selectElWithValue = document.querySelector('#fs-select-value') as HTMLSelectElement;
  // declaring select options
  const selectOptions = ['prime', 'pro', 'max'];

  // If we wish to set particular values for the options, then we can declare the options in the following manner
  const selectOptionsWithValue = [
    ['prime', '100'],
    ['pro', '50'],
    ['max', '25'],
  ];
  // using the util to populate the select options
  populateSelectOptions(selectEl, selectOptions);

  // select options with particular values
  populateSelectOptions(selectEl, selectOptionsWithValue);
});
```
