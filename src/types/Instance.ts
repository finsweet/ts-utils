/**
 * Declares the instance of an object
 */
export type Instance<T> = { new (): T; prototype: T };
