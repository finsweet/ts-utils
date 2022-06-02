/**
 * Check if a key is included in a readonly array
 * @param key
 * @param source readonly array of strings
 * @returns True/false
 */
export const isKeyOf = (key, source) => !!key && source.includes(key);
