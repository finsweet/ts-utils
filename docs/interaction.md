---
prev: 
  text: 'Interaction'
  link: '/interaction'
next:
  text: 'DisplayController'
  link: '/displayController'
---


## `Interaction`

This util acts as a controller for elements that have a Webflow Ix2 click interaction binded to it.

| param                                                  | value                                                                                                   |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| element: `HTMLElement / string`                        | Webflow element/ selector that has the Mouse Click interaction                                          |
| duration?: `Number / Partial<Interaction['duration']>` | Optionally, the duration can be explicitly set so the trigger methods will return an awaitable Promise. |

## Available methods:

## `isActive()`:
  Checks if the interaction is active.
  | Return value: `Boolean` |
  | ------ |

## `isRunning()`:
  Checks if the interaction is running.
  | Return value: `Boolean` |
  | ------ |

## `untilFinished()`:
  Returns a promise that fulfills when the current running interaction has finished
  | Return value: `An awaitable Promise` |
  | ------ |

## Example

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