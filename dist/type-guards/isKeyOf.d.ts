/**
 * Check if a key is included in a readonly array
 * @param key
 * @param source readonly array of strings
 * @returns True/false
 */
export declare const isKeyOf: <T extends string>(key: string | null | undefined, source: readonly T[]) => key is T;
