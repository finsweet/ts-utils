---
prev: 
  text: 'Interaction'
  link: '/interaction'
next:
  text: 'Instances'
  link: '/instances'
---


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

## Example

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
