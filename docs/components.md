---
prev: 
  text: 'Webflow'
  link: '/webflow'
next:
  text: 'Type Guards'
  link: '/type-guards'
---



# Components 

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

## `Interaction`

This util acts as a controller for elements that have a Webflow Ix2 click interaction binded to it.

| param                                                  | value                                                                                                   |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| element: `HTMLElement / string`                        | Webflow element/ selector that has the Mouse Click interaction                                          |
| duration?: `Number / Partial<Interaction['duration']>` | Optionally, the duration can be explicitly set so the trigger methods will return an awaitable Promise. |

### Available methods:

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


## `DisplayController`

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

### Available methods:

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
