import type { FormField } from '..';
/**
 * Sets a value to a FormField element and emits `click`, `input` and `change` Events.
 *
 * @param element The FormField to update.
 * @param value `boolean` for Checkboxes and Radios, `string` for the rest.
 */
export declare const setFormFieldValue: (element: FormField, value: string | boolean) => void;
