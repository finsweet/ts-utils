---
prev: 
  text: 'Types'
  link: '/types'
next:
  text: 'Contribute'
  link: '/contribute'
---

# Helpers


## `addListener()`

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

## `clearFormField()`

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

## `cloneNode()`

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

## `extractCommaSeparatedValues()`

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

## `extractNumberSuffix()`

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

## `findTextNode()`

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

## `getAllParents()`

This util extracts a list of all parents of an element, excepting the `<body>` and `<html>` tags

| param              | value              |
| ------------------ | ------------------ |
| element: `Element` | The target element |

| Return value: `HTMLElement[]`               |
| ------------------------------------------- |
| The first child node text element, if found |

## `getDistanceFromTop()`

This util gets the distance between an element and the top of the window

| param              | value              |
| ------------------ | ------------------ |
| element: `Element` | The target element |

| Return value: `number` |
| ---------------------- |
| The distance in pixels |

## `getFormFieldValue()`

This util gets the value of a given input element

| param              | value         |
| ------------------ | ------------- |
| input: `FormField` | input element |

| Return value: `string` |
| ---------------------- |
| The input field value  |

## `getHiddenParent()`

This util finds the first hidden parent element, or the element itself (if hidden).
If the element is already visible, the function returns `undefined`.

| param                  | value                 |
| ---------------------- | --------------------- |
| element: `HTMLElement` | The reference element |

| Return value: `HTMLElement       | undefined` |
| -------------------------------- | ---------- |
| Hidden parent element, if found. |

## `getObjectEntries()`

A typesafe util for `Object.entries()`

| param            | value      |
| ---------------- | ---------- |
| object: `Object` | The object |

| Return value: `Entry<T>[]` |
| -------------------------- |

## `getObjectKeys()`

A util to get the keys of an object with inferred typing.

| param            | value      |
| ---------------- | ---------- |
| object: `Object` | The object |

| Return value: `string` |
| ---------------------- |

## `isScrollable()`

This util checks if an element is scrollable.

| param              | value              |
| ------------------ | ------------------ |
| element: `Element` | The target element |

| Return value: `Boolean` |
| ----------------------- |

## `isVisible()`

This util checks if an element is visible.

| param                  | value              |
| ---------------------- | ------------------ |
| element: `HTMLElement` | The target element |

| Return value: `Boolean` |
| ----------------------- |

## `noop()`

This util, well, does nothing. It is a no operation function. It literally, does nothing.

## `queryElement()`

This util queries an element and make sure it's the correct type

| param                   | value                                                  |
| ----------------------- | ------------------------------------------------------ |
| selector: `string`      | Selector string                                        |
| instance: `Instance<T>` | Instance target of the element type i.e HTMLElement    |
| scope: `ParentNode`     | The scope context where to query. Defaults to document |
| element: `HTMLElement`  | The target element                                     |

## `removeChildElements()`

This util removes all child elements from a parent element

| param               | value                                                       |
| ------------------- | ----------------------------------------------------------- |
| element: `Element`  | Parent element                                              |
| selector?: `string` | Optional: only remove the elements that match this selector |

## `removeSpaces()`

This util removes all the spaces of a string.

| param            | value      |
| ---------------- | ---------- |
| string: `string` | The string |


| Return value: `string`            |      |
| ---------------- | ---------- |
| The string without spaces. i.e "The quick brown foThequickbrownfox" | x" => " |

## `removeTrailingSlash()`

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

## `sameValues()`

This util compares if two arrays have the same exact values.

| param              | value         |
| ------------------ | ------------- |
| array1: `unkown[]` | First array.  |
| array2: `unkown[]` | Second array. |

| Return value: `Boolean` |
| ----------------------- |

## `setFormFieldValue()`

With the help of this util you can set a value to a `FormField` element and emit `click`, `input` and `change` Events.

| param                     | value                                                       |
| ------------------------- | ----------------------------------------------------------- |
| element: `element`        | The value to mutate.                                        |
| value: `boolean / string` | `boolean` for Checkboxes and Radios, `string` for the rest. |

## `simulateEvent()`

This util dispatches a custom event that bubbles from the target.


| param                     | value |
| ------------------------- | ------ |
| target: `EventTarget` | The element where the event will originate. |
| target: `AllowedEvent` or `Array<AllowedEvent>` | The element where the event will originate. |


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

## `throwError()`

This util displays an alert and throw an exception.

| param             | value         |
| ----------------- | ------------- |
| message: `string` | Error message |

| Return value: `T`                                                      |
| ---------------------------------------------------------------------- |
| The generic argument to assure type safety when querying DOM Elements. |

## `wait()`

This util returns an awaitable promise for waiting X time.

| param          | value      |
| -------------- | ---------- |
| time: `number` | Time in ms |

| Return value: `Promise<unknown>`      |
| ------------------------------------- |
| Awaitable promise for waiting X time. |

## `extractNumberFromString()`

This util converts a string to a number, removing any invalid symbols like `$` or `,`. If the function is not able to extract a valid number from the string, it will return `null`.

| param           | value            |
| --------------- | ---------------- |
| value: `string` | A string number. |

| Return value: `number \ null` |
| ----------------------------- |
| The valid number value.       |
