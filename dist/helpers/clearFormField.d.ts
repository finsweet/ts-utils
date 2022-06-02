import { simulateEvent } from './simulateEvent';
import type { FormField } from '../types';
/**
 * Clears the form field's value and emits an input and changed event.
 * If the field is a checkbox or a radio, it will unselect it.
 * @param field The `FormField` to clear.
 * @param omitEvents By default, events are dispatched from the `FormField`. In some cases, these events might collide with other logic of the system.
 * You can omit certain events from being dispatched by passing them in an array.
 */
export declare const clearFormField: (field: FormField, omitEvents?: Parameters<typeof simulateEvent>['1']) => void;
