---
prev:
  text: 'Get started'
  link: '/'
next:
  text: 'Components'
  link: '/components'
---

# Webflow

## `WEBFLOW_BREAKPOINTS`

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

## `CloseDropdown()`

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

## `CSS`

This util contains constants for Webflow css classes linked to the native Webflow elements.

List of available css classes groups
| constant | reference |
| ------ | ------ |
| CURRENT_CSS_CLASS | Current element(s) |
| RICH_TEXT_BLOCK_CSS_CLASS | Richtext element(s) |
| HTML_EMBED_CSS_CLASS | Embed element(s) |
| SLIDER_CSS_CLASSES | Slider element(s) |
| TABS_CSS_CLASSES | Tabs element(s) |
| NAVBAR_CSS_CLASSES | Navbar element(s) |
| CMS_CSS_CLASSES | Cms element(s) |
| FORM_CSS_CLASSES | Form element(s) |
| DROPDOWN_CSS_CLASSES | Dropdown element(s) |
| COMMERCE_CSS_CLASSES | E-Commerce element(s) |
| LIGHTBOX_CSS_CLASSES | Lightbox element(s) |

Example:

```ts
import { SLIDER_CSS_CLASSES } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {

// Querying the slider nav element
const sliderNavEl = document.querySelector(`.${SLIDER_CSS_CLASSES.sliderNav}`);
}
```

## `getCollectionElements()`

This util helps with selecting different elements inside `Collection List Wrapper` or the `Collection List`

| param                         | value                                  |
| ----------------------------- | -------------------------------------- |
| reference: `string / Element` | The element or selector of the element |
| target: `string`              | The requested element/elements         |
| page: `Document`              | The page document                      |

Available targets:
| Targets |
| ------ |
| `wrapper` |
| `list` |
| `items` |
| `empty` |
| `pagination` |
| `next` |
| `previous` |
| `pageCount` |

| Return value: `CollectionListWrapperElement / CollectionListElement / PaginationButtonElement / PageCountElement /  CollectionItemElement[] / CollectionEmptyElement / null / undefined` |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The specified collection element/elements.                                                                                                                                               |

Example:

```ts
import { getCollectionElements } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  // source of the page that has the collection
  const pageSource = '/cms';

  // fetching the page and getting the text
  const pageData = await fetch(pageSource);
  const pageText = await pageData.text();

  // using dom parser to generate a document using page text
  const parser = new DOMParser();
  const doc = parser.parseFromString(pageText, 'text/html');

  // selector for our collection
  const selector = '#fs-col-wrapper';

  // fetching all the items in the collection wrapper using the getCollectionElements util
  const list = await getCollectionElements(selector, 'items', doc);

  console.log(list);
});
```

Output:

```
(4) [div.w-dyn-item, div.w-dyn-item, div.w-dyn-item, div.w-dyn-item]
```

## `getCollectionListWrappers()`

This util queries `Collection List Wrapper` elements and makes sure they are unique.

| param                 | value                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| selectors: `string[]` | The selectors used for the query. If an empty array is provided, all `Collection List Wrapper` elements will be returned |
| page: `Document`      | The document where to perform the query                                                                                  |

| Return value: `CollectionListWrapperElement[]`       |
| ---------------------------------------------------- |
| A unique list of `Collection List Wrapper` elements. |

Example:

```ts
import { getCollectionListWrappers } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  // source of the page that has the collection
  const pageSource = '/cms';

  // fetching the page and getting the text
  const pageData = await fetch(pageSource);
  const pageText = await pageData.text();

  // using dom parser to generate a document using page text
  const parser = new DOMParser();
  const doc = parser.parseFromString(pageText, 'text/html');

  // selectors for our collection wrappers
  const selectors = ['#fs-col-wrapper1', `#fs-col-wrapper2`, `#fs-col-wrapper3`];

  // fetching a unqiue list of collection wrappers
  const unqiueColWrappers = await getCollectionListWrappers(selectors, doc);

  console.log(unqiueColWrappers);
});
```

Output:

```
(3) [div#fs-col-wrapper1.w-dyn-list, div#fs-col-wrapper2.w-dyn-list, div#fs-col-wrapper3.w-dyn-list]
```

## `getCurrentBreakpoint()`

Checks the current breakpoint based on the window media.

Please refer to [WEBFLOW_BREAKPOINTS](#webflow-breakpoints) for the defined breakpoints reference table.

| Return value: `String`                    |
| ----------------------------------------- |
| Breakpoint key matching media query value |

Example:

```ts
import { getCurrentBreakpoint } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const currentBreakpoint = getCurrentBreakpoint();
  console.log(currentBreakpoint);
});
```

Output:

```
medium
```

## `getPublishDate()`

Extracts the publish date of a Webflow site.

| param             | value                                                                |
| ----------------- | -------------------------------------------------------------------- |
| page?: `Document` | The page to get the publish date from. Defaults to the current page. |

| Return value: `String` |
| ---------------------- |
| Date object            |

Example:

```ts
import { getPublishDate } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const lastPublishDate = getPublishDate();
  console.log(lastPublishDate);
});
```

Output:

```
Fri Dec 16 2022 11:48:06 GMT+0530 (India Standard Time)
```

## `getSiteId()`

Extracts the Webflow Site ID of the website.

| param             | value                                                           |
| ----------------- | --------------------------------------------------------------- |
| page?: `Document` | The page to get the site ID from. Defaults to the current page. |

| Return value: `String` |
| ---------------------- |
| The id of the site     |

Example:

```ts
import { getSiteId } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const siteId = getSiteId();
  console.log(siteId);
});
```

Output:

```
5f10844b0e20ffdd9de0fbea
```

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

Example:

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

## `populateSelectOptions()`

This util helps to populate the options for a select element.

| param                                               | value                                                                                                    |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| selectElement: `HTMLSelectElement`                  | The select element to populate.                                                                          |
| options: `string[] / (readonly [string, string])[]` | The options to populate. Accepts either a single Array of values, or an Array with [text, value] tuples. |

Example:

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

## `removeSelectOptions()`

This util removes also the options from an HTMLSelectElement.

| param                              | value                                                                                                       |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| selectElement: `HTMLSelectElement` | The select element.                                                                                         |
| preserveEmpty: `boolean`           | If set to true, any option without a value (like a placeholder option) will be preserved. Default is false. |

Example:

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
