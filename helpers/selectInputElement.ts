/**
 * Selects a custom radio or checkbox element
 * @param element Element to select
 * @param select - Defaults to true. If set to false, the input element will be unselected.
 * @returns The value of the element
 */
const selectInputElement = (element: HTMLInputElement, select = true): string => {
  if (element.type === 'checkbox' && select !== element.checked) element.click();

  if (element.type === 'radio') {
    // Add the checked class to the custom radio
    const customInput = element.parentElement?.querySelector<HTMLDivElement>(
      '.w-form-formradioinput--inputType-custom'
    );
    if (customInput) customInput.classList[select ? 'add' : 'remove']('w--redirected-checked');

    // Set the radio as checked
    element.checked = select;
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
  }

  return element.value;
};

export default selectInputElement;
