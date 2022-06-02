/**
 * Compares if two arrays have the same exact values.
 * @param array1
 * @param array2
 */
// prettier-ignore
export const sameValues = (array1, array2) => array1.every((key) => array2.includes(key)) && array2.every((key) => array1.includes(key));
