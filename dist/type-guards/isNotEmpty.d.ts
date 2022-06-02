/**
 * Makes sure a value is not `null` or `undefined`.
 * Useful for type safety when filtering empty elements from an array. Check out the example for more in-depth explanation.
 * @param value The value to type-check.
 * @example ```typescript
 * const items = [1, null, 4, undefined, 8];
 *
 * const filteredItemsError: number[] = items.filter((item) => value !== undefined && value !== null); // Type '(number | null | undefined)[]' is not assignable to type 'number[]'.
 *
 * const filteredItemsSuccess: number[] = items.filter(isNotEmpty); // Success!
 * ```
 */
export declare const isNotEmpty: <T>(value: T | null | undefined) => value is T;
