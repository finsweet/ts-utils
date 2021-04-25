/**
 * Declares the instance of an object
 */
type Instance<T> = { new (): T; prototype: T };

export default Instance;
