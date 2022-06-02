import type { Entry } from '../types/Entry';
/**
 * Gets type safe `Object.entries()`.
 * @param object
 */
export declare const getObjectEntries: <T extends Readonly<Record<string, unknown>>>(object: T) => Entry<T>[];
