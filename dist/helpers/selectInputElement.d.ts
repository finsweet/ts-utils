/**
 * **DEPRECATED: Please use the new `setFormFieldValue` method instead.**
 *
 *
 * Selects a custom radio or checkbox element
 * @param element Element to select
 * @param select - Defaults to true. If set to false, the input element will be unselected.
 * @returns The value of the element: Boolean for checkboxes and string for radios
 */
export declare const selectInputElement: (element: HTMLInputElement, select?: boolean) => string | boolean;
