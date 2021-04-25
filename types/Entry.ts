/**
 * Defines a typed object entry
 */
type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];
export default Entry;
