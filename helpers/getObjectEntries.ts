import type Entry from '../types/Entry';

/**
 * Get type safe Object.entries()
 * @param object
 */
// prettier-ignore
const getObjectEntries = <T extends Readonly<Record<string, unknown>>>(object: T): Entry<T>[] => Object.entries(object) as Entry<T>[];

export default getObjectEntries;
