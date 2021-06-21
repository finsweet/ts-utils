/**
 * Removes all the spaces of a string.
 * @param string
 * @returns The string without spaces. Example: "The quick brown fox" => "Thequickbrownfox"
 */
const removeSpaces = (string: string): string => string.replace(/\s/g, '');

export default removeSpaces;
