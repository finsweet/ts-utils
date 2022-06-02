/**
 * Finds if a string is suffixed by `-X` and returns the value of `X`.
 * @example `click-2` will return `2`.
 * @example `click` will return `undefined`.
 * @param string The string to extract.
 * @returns The number suffix, if found.
 */
export const extractNumberSuffix = (string) => {
    const splitValue = string.split('-');
    const suffix = parseInt(splitValue[splitValue.length - 1]);
    if (!isNaN(suffix))
        return suffix;
};
