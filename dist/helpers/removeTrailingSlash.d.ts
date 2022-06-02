/**
 * Removes the trailing slash from a URL string.
 *
 * @example
 * ```
 * This:
 * https://www.finsweet.com/attributes/attractions/capri-island/
 *
 * Becomes:
 * https://www.finsweet.com/attributes/attractions/capri-island
 * ```
 *
 * @param value The value to mutate.
 * @returns A new string without a trailing slash.
 */
export declare const removeTrailingSlash: (value: string) => string;
