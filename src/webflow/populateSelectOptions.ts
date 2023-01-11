/**
 * Populates the options for a select element.
 * @param selectElement The select element to populate.
 * @param options The options to populate. Accepts either a single Array of values, or an Array with [text, value] tuples.
 */
export const populateSelectOptions = (
  selectElement: HTMLSelectElement,
  options: string[] | (readonly [string, string])[]
) => {
  for (const option of options) {
    const [text, value] = typeof option === 'string' ? [option, option] : option;
    const optionElement = new Option(text, value);

    selectElement.options.add(optionElement);
  }
};
