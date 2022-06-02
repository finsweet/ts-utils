import { simulateEvent } from './simulateEvent';
/**
 * **DEPRECATED: Please use the new `setFormFieldValue` method instead.**
 *
 *
 * Selects a custom radio or checkbox element
 * @param element Element to select
 * @param select - Defaults to true. If set to false, the input element will be unselected.
 * @returns The value of the element: Boolean for checkboxes and string for radios
 */
export const selectInputElement = (element, select = true) => {
    if (select !== element.checked) {
        // Set the new checked value
        element.checked = select;
        // Emit DOM events
        simulateEvent(element, ['click', 'input', 'change']);
    }
    return element.type === 'checkbox' ? element.checked : element.value;
};
