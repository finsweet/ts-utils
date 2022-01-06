import type { Instance } from '../types/Instance';
export declare const queryElement: <T extends Element>(selector: string, instance: Instance<T>, scope?: ParentNode) => T | undefined;
