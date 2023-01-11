<div  align="left">

<img src="https://res.cloudinary.com/dfxtzg164/image/upload/v1670266641/logo_full_black_u3khkr.svg">

</div>

# Typescript Utils

Typescript utils for custom Webflow projects. This project contains different categories of utils that can be used in any project.

All utils are fully tree shakeable and strongly typed.

[![npm](https://img.shields.io/npm/dt/@finsweet/ts-utils)](https://www.npmjs.com/package/@finsweet/ts-utils) [![npm version](https://badge.fury.io/js/@finsweet%2Fts-utils.svg)](https://badge.fury.io/js/@finsweet%2Fts-utils) [![NPM](https://img.shields.io/npm/l/@finsweet/ts-utils)](https://www.npmjs.com/package/@finsweet/ts-utils) [![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-green)](https://github.com/finsweet/ts-utils/pulls) [![dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)](https://github.com/finsweet/ts-utils/blob/master/package.json)

### Installation

#### Npm

```bash
npm install @finsweet/ts-utils
```

#### Yarn

```bash
yard add @finsweet/ts-utils
```

#### Pnpm

```bash
pnpm install @finsweet/ts-utils
```

### All available methods and features

#### Webflow

- [WEBFLOW_BREAKPOINTS](#WEBFLOW_BREAKPOINTS)
- [closeDropdown()](#closeDropdown)
- [Css](#Css)
- [getCollectionElements()](#getCollectionElements)
- [getCollectionListWrappers()](#getCollectionListWrappers)
- [getCurrentBreakpoint()](#getCurrentBreakpoint)
- [getPublishDate()](#getPublishDate)
- [getSiteId()](#getSiteId)
- [restartWebflow()](#restartWebflow)
- [populateSelectOptions()](#populateSelectOptions)
- [removeSelectOptions()](#removeSelectOptions)

#### Components

- [CopyJSONButton](#CopyJSONButton)
- [Interaction](#Interaction)
- [DisplayController](#DisplayController)

#### Type-gaurds

- [Instances](#Instances)
- [isKeyOf()](#isKeyOf)
- [isFormField()](#isFormField)
- [isNotEmpty()](#isNotEmpty)
- [Primitives](#Primitives)

#### Types

- [FormField](#FormField)
- [MapEntries](#MapEntries)
- [PartialExcept](#PartialExcept)
- [PickPartial](#PickPartial)
- [PickRequired](#PickRequired)
- [RequiredExcept](#RequiredExcept)
- [UnionToIntersection](#UnionToIntersection)

#### Helpers

- [addListener()](#addListener)
- [clearFormField()](#clearFormField)
- [cloneNode()](#cloneNode)
- [extractCommaSeparatedValues()](#extractCommaSeparatedValues)
- [extractNumberSuffix()](#extractNumberSuffix)
- [findTextNode()](#findTextNode)
- [getAllParents()](#getAllParents)
- [getDistanceFromTop()](#getDistanceFromTop)
- [getFormFieldValue()](#getFormFieldValue)
- [getHiddenParent()](#getHiddenParent)
- [getObjectEntries()](#getObjectEntries)
- [getObjectKeys()](#getObjectKeys)
- [isScrollable()](#isScrollable)
- [isVisible()](#isVisible)
- [noop()](#noop)
- [queryElement()](#queryElement)
- [removeChildElements()](#removeChildElements)
- [removeSpaces()](#removeSpaces)
- [removeTrailingSlash()](#removeTrailingSlash)
- [sameValues()](#sameValues)
- [setFormFieldValue()](#setFormFieldValue)
- [simulateEvent()](#simulateEvent)
- [throwError()](#throwError)
- [wait()](#wait)
- [extractNumberFromString()](#extractNumberFromString)

#### `Breakpoints`

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

#### `CloseDropdown()`

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

#### `Css`

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

#### `getCollectionElements()`

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

#### `getCollectionListWrappers()`

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

#### `getCurrentBreakpoint()`

Checks the current breakpoint based on the window media.

Please refer to [WEBFLOW_BREAKPOINTS](#WEBFLOW_BREAKPOINTS) for the defined breakpoints reference table.

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

#### `getPublishDate()`

Extracts the publish date of a Webflow site.

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

#### `getSiteId()`

Extracts the Webflow Site ID of the website

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

#### `restartWebflow()`

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

#### `populateSelectOptions()`

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

#### `removeSelectOptions()`

This util removes all the options from an HTMLSelectElement.

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

#### `CopyJSONButton`

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

##### Available methods:

- `updateCopyData()`:
  Updates the JSON data to be copied.

  | param                                  | value                                         |
  | -------------------------------------- | --------------------------------------------- |
  | newCopyData: `Record<string, unknown>` | The new JSON data of the element to be copied |

- `updateTextContent()`:
  Updates the button's text content.

  | param             | value                        |
  | ----------------- | ---------------------------- |
  | newText: `string` | The new text to be displayed |

Example:

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

#### `Interaction`

This util acts as a controller for elements that have a Webflow Ix2 click interaction binded to it.

| param                                                  | value                                                                                                   |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| element: `HTMLElement / string`                        | Webflow element/ selector that has the Mouse Click interaction                                          |
| duration?: `Number / Partial<Interaction['duration']>` | Optionally, the duration can be explicitly set so the trigger methods will return an awaitable Promise. |

##### Available methods:

- `isActive()`:
  Checks if the interaction is active.
  | Return value: `Boolean` |
  | ------ |

- `isRunning()`:
  Checks if the interaction is running.
  | Return value: `Boolean` |
  | ------ |

- `untilFinished()`:
  Returns a promise that fulfills when the current running interaction has finished
  | Return value: `An awaitable Promise` |
  | ------ |

Example:

```ts
import { Interaction } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  // Trigger element that has a Mouse Click interaction
  const triggerElement = document.querySelector('[fs-element="ix2-trigger"]') as HTMLElement;

  // Initializing Interaction
  const interaction = new Interaction({ element: triggerElement, duration: 300 });

  // This won't run because the first click hasn't been triggered yet.
  interaction.trigger('second');

  // Triggers the first click interaction, only when allowed. Returns a Promise that can be awaited.
  await interaction.trigger('first');

  // Returns if the first click has been fired.
  interaction.isActive();

  // Returns if the interaction is still running.
  interaction.isRunning();

  // Triggers the second click interaction, only when allowed. Returns a Promise that can be awaited.
  interaction.trigger('second');

  // Returns a Promise that resolves once the ongoing interaction (if triggered) finishes.
  await interaction.untilFinished();
});
```

#### `DisplayController`

This util helps to show/hide an element using built-in fade animations or no animations at all. It also works with Webflow interactions.

| param                                                                      | value                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| element: `HTMLElement / string`                                            | The main element                                                                                                                                                                                                            |
| interaction?: `InteractionParams`                                          | If the display must be controlled through a Webflow interaction                                                                                                                                                             |
| displayProperty?: `typeof DisplayController['displayProperties'][number];` | The display property of the element when displayed. Not applicable when interaction parameters ara passed to the instance, as it's assumed that the Webflow interaction will set the display property. Defaults to `block`. |
| noTransition?: `boolean`                                                   | If set to true, the element will be straight showed / hidden without any transition.                                                                                                                                        |
| startsHidden?: `boolean`                                                   | If set to true, the element will be set to `display: none`.                                                                                                                                                                 |

| Available displayProperty options: |
| ---------------------------------- |
| `block`                            |
| `flex`                             |
| `grid`                             |
| `inline-block`                     |
| `inline`                           |

##### Available methods:

- `isVisible()`:
  Checks if element is visible

  | Return value: `Boolean` |
  | ----------------------- |

- `show()`
  Displays the element

  | Return value: `An awaitable Promise` |
  | ------------------------------------ |

- `hide()`
  Hides the element

  | Return value: `An awaitable Promise` |
  | ------------------------------------ |

Example:

```ts
import { DisplayController } from '@finsweet/ts-utils';

const API_BASE = 'https://pokeapi.co/api/v2';
const API_URI = '/pokemon/ditto';
window.Webflow ||= [];
window.Webflow.push(async () => {
  // Quering the target element, which in this case is a loader
  const loadingElement = document.querySelector('#fs-loader') as HTMLElement;

  // Initialises DiplayController
  const loadingDisplayController = new DisplayController({
    element: loadingElement,
    displayProperty: 'block',
    noTransition: true,
    startsHidden: true,
  });

  // shows the loader while the API is fetching the data
  loadingDisplayController.show();

  // awaiting the API Promise
  const pokemons = await fetch(API_BASE + API_URI);

  // hides the loader once the API is done fetching the data
  loadingDisplayController.hide();
});
```

#### `Instances`

Type-gaurd methods for elements.

| method                    | param             | value                           |
| ------------------------- | ----------------- | ------------------------------- |
| `isFile()`                | target: `unknown` | target is a File                |
| `isNode()`                | target: `unknown` | target is a Node                |
| `isElement()`             | target: `unknown` | target is an Element            |
| `isHTMLElement()`         | target: `unknown` | target is a HTMLElement         |
| `isHTMLInputElement()`    | target: `unknown` | target is a HTMLInputElement    |
| `isHTMLSelectElement()`   | target: `unknown` | target is a HTMLSelectElement   |
| `isHTMLTextAreaElement()` | target: `unknown` | target is a HTMLTextAreaElement |
| `isHTMLVideoElement()`    | target: `unknown` | target is a HTMLVideoElement    |
| `isHTMLAnchorElement()`   | target: `unknown` | target is a HTMLAnchorElement   |
| `isHTMLImageElement()`    | target: `unknown` | target is a HTMLImageElement    |
| `isHTMLOptionElement()`   | target: `unknown` | target is a HTMLOptionElement   |
| `isHTMLButtonElement()`   | target: `unknown` | target is a HTMLButtonElement   |

| Return value: `Boolean` |
| ----------------------- |

#### `isKeyOf()`

Check if a key is included in a readonly array

| param                  | value                     |
| ---------------------- | ------------------------- |
| key: `string`          | The main element          |
| source: `readonly T[]` | Readonly array of strings |

| Return value: `Boolean` |
| ----------------------- |

Example

```ts
const keyToCheck = 'hello';

const arrayToCheck = ['hello', 'how', 'are', 'you'];

const isKeyPresent = isKeyOf(keyToCheck, arrayToCheck); // true
```

#### `isFormField()`

Checks if an element is a form field element

| param                                   | value   |
| --------------------------------------- | ------- |
| element: `Element / EventTarget / null` | element |

| Return value: `Boolean` |
| ----------------------- |

#### `isNotEmpty()`

This util makes sure there are no `null` or `undefined` in the passed value. Useful for type safety when filtering empty elements from an array.

| param                         | value          |
| ----------------------------- | -------------- |
| value: `T / null / undefined` | value to check |

| Return value: `Boolean` |
| ----------------------- |

Example:

```ts
const items = [1, null, 4, undefined, 8];

const filteredItemsError: number[] = items.filter((item) => value !== undefined && value !== null); // Type '(number | null | undefined)[]' is not assignable to type 'number[]'.

const filteredItemsSuccess: number[] = items.filter(isNotEmpty); // Success!
```

#### `Primitives`

Type-gaurd methods for primitives

| method          | param            | value                       |
| --------------- | ---------------- | --------------------------- |
| `isString()`    | value: `unknown` | type of value is a string   |
| `isNumber()`    | value: `unknown` | type of value is a number   |
| `isBigint()`    | value: `unknown` | type of value is a bigint   |
| `isBoolean()`   | value: `unknown` | type of value is a boolean  |
| `isSymbol()`    | value: `unknown` | type of value is a symbol   |
| `isUndefined()` | value: `unknown` | type of value is undefined  |
| `isNull()`      | value: `unknown` | type of value is null       |
| `isFunction()`  | value: `unknown` | type of value is a function |
| `isObject()`    | value: `unknown` | type of value is an object  |

| Return value: `Boolean` |
| ----------------------- |

#### `FormField`

`FormField` is the Form Field element on Webflow

#### `MapEntries`

`MapEntries<MapToConvert>` converts a `Map<K, V>` type to its equivalent when performing `[...map.entries()]`.

Example:

```typescript
const map: MapType = new Map(['key', 'value']);
// Same type as MapEntries<MapType>
const entries = [...map.entries()];
typeof entries === MapEntries<MapType>;
```

#### `PartialExcept`

Using the `PartialExcept<Original, Keys extends keyof Original>` helper the picked keys will become Required and the rest of the interface will become Partial.

Example:

```ts
type Obj = {
  a: 1;
  b: 2;
  c: 3;
};

type NewObj = PartialExcept<Obj, 'b'>;
// NewObj looks like:
// { a?: 1, b: 2, c?: 3 }
```

#### `PickPartial`

Using the `PickPartial<Original, Keys extends keyof Original>` the picked keys will become Partial and the rest of the interface will stay the same.

Example:

```ts
type Obj = {
  a: 1;
  b: 2;
  c: 3;
};

type NewObj = PickPartial<Obj, 'b'>;
// NewObj looks like:
// { a: 1, b?: 2, c: 3 }
```

#### `PickRequired`

Using the `PickRequired<Original, Keys extends keyof Original>` the picked keys will become required and the rest of the interface will stay the same.

Example:

```ts
type Obj = {
  a: 1;
  b?: 2;
  c?: 3;
};

type NewObj = PickRequired<Obj, 'b'>;
// NewObj looks like:
// { a: 1, b: 2, c?: 3 }
```

#### `RequiredExcept`

Using `RequiredExcept<Original, Keys extends keyof Original>` the picked keys will become Partial and the rest of the interface will become Required.

Example

```ts
type Obj = {
  a?: 1;
  b?: 2;
  c?: 3;
};

type NewObj = RequiredExcept<Obj, 'b'>;
// NewObj looks like:
// { a: 1, b?: 2, c: 3 }
```

#### `UnionToIntersection`

`UnionToIntersection<Union>` converts a union like `Interface1 | Interface2` to an intersection `Interface1 & Interface2`.

#### `addListener()`

This util adds an event listener to an element.

| param                                        | value                                                                                                     |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| target: `TargetInterface / null / undefined` | Target element                                                                                            |
| type: `Type`                                 | The name of the event                                                                                     |
| listener: `Listener`                         | The function to run when the event occurs                                                                 |
| options: `boolean / AddEventListenerOptions` | Available options (https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#options) |

| Return value: `function`                                  |
| --------------------------------------------------------- |
| A callback to remove the event listener from the element. |

Example:

```ts
import { addListener } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const targetElement = document.querySelector('#fs-target') as HTMLButtonElement;

  // The callback removes the element from the event listener
  const listenerFunction = addListener(targetElement, 'click', () => console.log('I was clicked!'));

  // Remove listener
  listenerFunction();
});
```

#### `clearFormField()`

This util clears the form field's value and emits an input and changed event. If the field is a checkbox or a radio, it will unselect it.

| param                                       | value                                                                                                                                                                                                            |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| field: `FormField`                          | The `FormField` to clear                                                                                                                                                                                         |
| omitEvents: `AllowedEvent / AllowedEvent[]` | By default, events are dispatched from the `FormField`. In some cases, these events might collide with other logic of the system. You can omit certain events from being dispatched by passing them in an array. |

| List of `AllowedEvent` |
| ---------------------- |
| `DOMContentLoaded`     |
| `fullscreenchange`     |
| `fullscreenerror`      |
| `pointerlockchange`    |
| `readystatechange`     |
| `visibilitychange`     |

Example:

```ts
import { clearFormField } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const formFieldEl = document.querySelector('#fs-field') as HTMLInputElement;

  // Clearing form field and omitting "visibilitychange" event to be dispatched upon clearing form field
  clearFormField(formFieldEl, 'visibilitychange');
});
```

#### `cloneNode()`

This util helps you deep clone a node that has the same type as the original one

| param                  | value             |
| ---------------------- | ----------------- |
| node: `T extends Node` | The node to clone |

| Return value: `T` |
| ----------------- |
| The cloned node.  |

Example

```ts
import { cloneNode } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  // querying a template element to clone
  const imageTemplate = document.querySelector('#fs-image') as HTMLImageElement;

  // using the cloneNode util to make a copy of the template element
  const newImage = cloneNode(imageTemplate);
});
```

#### `extractCommaSeparatedValues()`

This util converts a string of comma separated values to an array of values.

| param                       | value                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------- |
| string: `string`            | Comma separated string                                                                   |
| compareSource?: `undefined` | Acts as a type guard for making sure the extracted values match the compared source      |
| defaultValue?: `undefined`  | Is set when there is no matching results after comparing with the source                 |
| filterEmpty?: `undefined`   | Defines if empty values should be filtered out of the returned array. Defaults to `true` |

| Return value: `string[]`                                      |
| ------------------------------------------------------------- |
| An array of strings that were originally seperated by a comma |

Example:

```ts
  const targetString = 'valueone, valuetwo, valuethree';\

  const resultString = extractCommaSeparatedValues(targetString);
  // resultString is ["valueone", "valuetwo", "valuethree"]
```

#### `extractNumberSuffix()`

This util returns the number value that is suffixed in a string

| param            | value                 |
| ---------------- | --------------------- |
| string: `string` | The string to extract |

| Return value: `number / undefined`                      |
| ------------------------------------------------------- |
| The resulted number extracted from the string, if found |

Example:

```ts
const string = 'click-2';
const string2 = 'click';

extractNumberSuffix(string);
// 2

extractNumberSuffix(string2);
// undefined
```

#### `findTextNode()`

This util finds the first child text node of an element

| param                  | value                      |
| ---------------------- | -------------------------- |
| element: `HTMLElement` | The element to search into |

| Return value: `ChildNode                    | undefined` |
| ------------------------------------------- | ---------- |
| The first child node text element, if found |

Example:

```ts
import { findTextNode } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const parentElement = document.querySelector('#fs-parent') as HTMLElement;

  // The node of the first child text element inside the parent
  const childTextNode = findTextNode(parentElement);
});
```

#### `getAllParents()`

This util extracts a list of all parents of an element, excepting the `<body>` and `<html>` tags

| param              | value              |
| ------------------ | ------------------ |
| element: `Element` | The target element |

| Return value: `HTMLElement[]`               |
| ------------------------------------------- |
| The first child node text element, if found |

#### `getDistanceFromTop()`

This util gets the distance between an element and the top of the window

| param              | value              |
| ------------------ | ------------------ |
| element: `Element` | The target element |

| Return value: `number` |
| ---------------------- |
| The distance in pixels |

#### `getFormFieldValue()`

This util gets the value of a given input element

| param              | value         |
| ------------------ | ------------- |
| input: `FormField` | input element |

| Return value: `string` |
| ---------------------- |
| The input field value  |

#### `getHiddenParent()`

This util finds the first hidden parent element, or the element itself (if hidden).
If the element is already visible, the function returns `undefined`.

| param                  | value                 |
| ---------------------- | --------------------- |
| element: `HTMLElement` | The reference element |

| Return value: `HTMLElement       | undefined` |
| -------------------------------- | ---------- |
| Hidden parent element, if found. |

#### `getObjectEntries()`

A typesafe util for `Object.entries()`

| param            | value      |
| ---------------- | ---------- |
| object: `Object` | The object |

| Return value: `Entry<T>[]` |
| -------------------------- |

#### `getObjectKeys()`

A util to get the keys of an object with inferred typing.

| param            | value      |
| ---------------- | ---------- |
| object: `Object` | The object |

| Return value: `string` |
| ---------------------- |

#### `getObjectKeys()`

This util checks if an element is scrollable.

| param              | value              |
| ------------------ | ------------------ |
| element: `Element` | The target element |

| Return value: `Boolean` |
| ----------------------- |

#### `isVisible()`

This util checks if an element is visible.

| param                  | value              |
| ---------------------- | ------------------ |
| element: `HTMLElement` | The target element |

| Return value: `Boolean` |
| ----------------------- |

#### `noop()`

This util, well, does nothing. It is a no operation function. It literally, does nothing.

#### `queryElement()`

This util queries an element and make sure it's the correct type

| param                   | value                                                  |
| ----------------------- | ------------------------------------------------------ |
| selector: `string`      | Selector string                                        |
| instance: `Instance<T>` | Instance target of the element type i.e HTMLElement    |
| scope: `ParentNode`     | The scope context where to query. Defaults to document |
| element: `HTMLElement`  | The target element                                     |

#### `removeChildElements()`

This util removes all child elements from a parent element

| param               | value                                                       |
| ------------------- | ----------------------------------------------------------- |
| element: `Element`  | Parent element                                              |
| selector?: `string` | Optional: only remove the elements that match this selector |

#### `removeSpaces()`

This util removes all the spaces of a string.

| param            | value      |
| ---------------- | ---------- |
| string: `string` | The string |

| Return value: `string`                                              |
| ------------------------------------------------------------------- | ------- |
| The string without spaces. i.e "The quick brown foThequickbrownfox" | x" => " |

#### `removeTrailingSlash()`

Compares if two arrays have the same exact values.

| param           | value                |
| --------------- | -------------------- |
| value: `string` | The value to mutate. |

cc
| A new string without a trailing slash. |

```
 This:
 https://www.finsweet.com/attributes/attractions/capri-island/

 Becomes:
 https://www.finsweet.com/attributes/attractions/capri-island
```

#### `sameValues()`

This util compares if two arrays have the same exact values.

| param              | value         |
| ------------------ | ------------- |
| array1: `unkown[]` | First array.  |
| array2: `unkown[]` | Second array. |

| Return value: `Boolean` |
| ----------------------- |

#### `setFormFieldValue()`

With the help of this util you can set a value to a `FormField` element and emit `click`, `input` and `change` Events.

| param                     | value                                                       |
| ------------------------- | ----------------------------------------------------------- |
| element: `element`        | The value to mutate.                                        |
| value: `boolean / string` | `boolean` for Checkboxes and Radios, `string` for the rest. |

#### `simulateEvent()`

This util dispatches a custom event that bubbles from the target.

| param                 | value                                       |
| --------------------- | ------------------------------------------- | ------------------------------------------- |
| target: `EventTarget` | The element where the event will originate. |
| target: `AllowedEvent | Array<AllowedEvent>`                        | The element where the event will originate. |

| List of `AllowedEvent` |
| ---------------------- |
| `w-close`              |
| `DOMContentLoaded`     |
| `fullscreenchange`     |
| `fullscreenerror`      |
| `pointerlockchange`    |
| `readystatechange`     |
| `visibilitychange`     |

| Return value: `Boolean`                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- |
| True if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise. |

#### `throwError()`

This util displays an alert and throw an exception.

| param             | value         |
| ----------------- | ------------- |
| message: `string` | Error message |

| Return value: `T`                                                      |
| ---------------------------------------------------------------------- |
| The generic argument to assure type safety when querying DOM Elements. |

#### `wait()`

This util returns an awaitable promise for waiting X time.

| param          | value      |
| -------------- | ---------- |
| time: `number` | Time in ms |

| Return value: `Promise<unknown>`      |
| ------------------------------------- |
| Awaitable promise for waiting X time. |

#### `extractNumberFromString()`

This util converts a string to a number, removing any invalid symbols like `$` or `,`. If the function is not able to extract a valid number from the string, it will return `null`.

| param           | value            |
| --------------- | ---------------- |
| value: `string` | A string number. |

| Return value: `number \ null` |
| ----------------------------- |
| The valid number value.       |

### Contribute

PRs are welcomed to this project. If you wish to improve the Finsweet Typescript Utils library, add functionality or improve the docs please feel free to submit a PR.

### License

ISC © [Finsweet](https://github.com/finsweet)
