/**
 * Selects a custom radio or checkbox element
 * @param element Element to select
 * @param select - Defaults to true. If set to false, the input element will be unselected.
 * @returns The value of the element: Boolean for checkboxes and string for radios
 */
const selectInputElement = (element: HTMLInputElement, select = true): string | boolean => {
  if (select !== element.checked) {
    // Set the new checked value
    element.checked = select;
    element.dispatchEvent(new Event('click', { bubbles: true }));
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
  }

  return element.type === 'checkbox' ? element.checked : element.value;
};

export default selectInputElement;
