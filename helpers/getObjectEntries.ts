import type { Entry } from '../types/Entry';

/**
 * Gets type safe `Object.entries()`.
 * @param object
 */
// prettier-ignore
export const getObjectEntries = <T extends Readonly<Record<string, unknown>>>(object: T): Entry<T>[] => Object.entries(object) as Entry<T>[];
