
  

<div  align="left">

  

<img src="https://res.cloudinary.com/dfxtzg164/image/upload/v1670266641/logo_full_black_u3khkr.svg">

  

</div>

  

  

# Typescript Utils

  

  

Typescript utils for custom Webflow projects. This project contains different categories of utils that can be used in any project.

  

  

All utils are fully tree shakeable and strongly typed.

  

  

[![npm](https://img.shields.io/npm/dt/@finsweet/ts-utils)](https://www.npmjs.com/package/@finsweet/ts-utils) [![npm version](https://badge.fury.io/js/@finsweet%2Fts-utils.svg)](https://badge.fury.io/js/@finsweet%2Fts-utils) [![NPM](https://img.shields.io/npm/l/@finsweet/ts-utils)](https://www.npmjs.com/package/@finsweet/ts-utils) [![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-green)](https://github.com/finsweet/ts-utils/pulls) [![dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)](https://github.com/finsweet/ts-utils/blob/master/package.json)

  

### All available methods and features

 #### Webflow

- [WEBFLOW_BREAKPOINTS](#WEBFLOW_BREAKPOINTS)
- [closeDropdown()](#closeDropdown())
- [Css](#Css)
- [getCollectionElements()](#getCollectionElements())
- [getCollectionListWrappers()](#getCollectionListWrappers())
- [getCurrentBreakpoint()](#getCurrentBreakpoint())
- [getPublishDate()](#getPublishDate())
- [getSiteId()](#getSiteId())
- [restartWebflow()](#restartWebflow())
  
  

#### `Breakpoints`
`WEBFLOW_BREAKPOINTS` is a Map that defines the default media queries for Webflow's breakpoints.

List of default media queries that are already defined: 

| key (string) | value (string) |
| ------ | ------ |
| tiny | (max-width: 479px) |
| small | (max-width: 767px) |
| medium | (max-width: 991px) |
| main | (min-width: 992px) |

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

#### `CloseDropdown()`
`closeDropdown()` closes a dropdown element

| param | value |
| ------ | ------ |
| dropdownToggle: HTMLDivElement | Dropdown element |
| focusToggle?: Boolean | Focus dropdown |

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

#### `Css`
This util contains constants for Webflow css classes linked to the native Webflow elements.

List of available css classes groups
| constant | reference |
| ------ | ------ |
| CURRENT_CSS_CLASS | Current  element(s) |
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

#### `getCollectionElements()`
This util helps with selecting different elements inside `Collection List Wrapper` or the `Collection List`

| param | value |
| ------ | ------ |
| reference: string or Element | The element or selector of the element |
| target: string | The requested element/elements |
| page: Document | The page document |

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

#### `CollectionListWrappers()`
This util queries `Collection List Wrapper` elements and makes sure they are unique.

| param | value |
| ------ | ------ |
| selectors: Array of strings | The selectors used for the query. If an empty array is provided, all `Collection List Wrapper` elements will be returned |
| page: Document | The document where to perform the query |

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
#### `getCurrentBreakpoint()`
Checks the current breakpoint based on the window media.

Please refer to [WEBFLOW_BREAKPOINTS](#WEBFLOW_BREAKPOINTS) for the defined breakpoints reference table.

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

#### `getPublishDate()`
Extracts the publish date of a Webflow site.

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

#### `getSiteId()`
Extracts the Webflow Site ID of the website

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

#### `restartWebflow()`
Restarts the Webflow JS library.

| param | value |
| ------ | ------ |
| modules?: Array of available module strings | If passed, only those modules will be restarted instead of the whole `Webflow` instance |

| `Available modules` |
| ------ | 
| `ix2` |
| `commerce` |
| `lottie` |
| `lightbox` |
| `slider` |
| `tabs` |

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


### Contribute
PRs are welcomed to this project. If you wish to improve the Finsweet Typescript Utils library, add functionality or improve the docs please feel free to submit a PR.

### License
MIT © [Finsweet](https://github.com/finsweet)
