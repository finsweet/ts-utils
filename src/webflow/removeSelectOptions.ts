/**
 * Removes all the options from an HTMLSelectElement.
 * @param selectElement
 * @param preserveEmpty If set to true, any option without a value (like a placeholder option) will be preserved.
 */
export const removeSelectOptions = ({ options }: HTMLSelectElement, preserveEmpty = false) => {
  for (const option of [...options]) {
    if (preserveEmpty && !option.value) {
      continue;
    }
    option.remove();
  }
};
