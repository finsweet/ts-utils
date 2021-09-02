/**
 * Gets the keys of an object with inferred typing.
 * @param object
 * @returns
 */
// prettier-ignore
export const getObjectKeys = <T extends Record<string, unknown>>(object: T): (keyof T)[] => Object.keys(object) as (keyof T)[];
