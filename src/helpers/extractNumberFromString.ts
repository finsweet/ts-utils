/**
 * Converts a string to a number, removing any invalid symbols like `$` or `,`.
 * If the function is not able to extract a valid number from the string, it will return `null`.
 *
 * @param value A string number.
 * @returns The valid number value.
 */
export const extractNumberFromString = (value: string) => {
  const number = parseFloat(value.replace(/[^0-9.-]+/g, ''));

  return isNaN(number) ? null : number;
};
