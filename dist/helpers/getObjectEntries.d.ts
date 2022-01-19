import type { Entry } from '../types/Entry';
export declare const getObjectEntries: <T extends Readonly<Record<string, unknown>>>(object: T) => Entry<T>[];
