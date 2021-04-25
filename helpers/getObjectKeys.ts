/**
 * Get the keys of an object with inferred typing
 * @param object
 * @returns
 */
const getObjectKeys = <T extends Record<string, unknown>>(object: T): (keyof T)[] => Object.keys(object) as (keyof T)[];

export default getObjectKeys;
