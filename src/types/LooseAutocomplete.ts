/**
 * A type that allows for variable autocompletion with loose validation.
 * @example
 * ```typescript
 * const f = (a: LooseAutocomplete<'a' | 'b'>) => a;
 * f(''); // VSCode autocomplete shows 'a' and 'b' as options, but doesn't fail when a different option is provided.
 * f('a'); // Valid
 * f('b'); // Valid
 * f('c'); // Valid
 * ```
 */
export type LooseAutocomplete<T extends string | number | symbol> = T | Omit<string | number | symbol, T>;
