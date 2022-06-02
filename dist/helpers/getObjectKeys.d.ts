/**
 * Gets the keys of an object with inferred typing.
 * @param object
 * @returns
 */
export declare const getObjectKeys: <T extends Record<string, unknown>>(object: T) => (keyof T)[];
