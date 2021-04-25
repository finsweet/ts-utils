export interface WritableStore<T> {
  get: () => T;
  set: (newValue: T) => void;
  update: (callback: (value: T) => T) => void;
  subscribe: (callback: (value: T) => void) => () => void;
}

/**
 * Writable store
 * @param value
 * @returns
 */
const writableStore = <T>(value: T): WritableStore<T> => {
  let subscribeFunctions: ((value: T) => void)[] = [];

  const get = (): T => value;

  const set = (newValue: T) => {
    value = newValue;
    subscribeFunctions.forEach((func) => func(newValue));
  };

  const update = (callback: (value: T) => T) => {
    set(callback(value));
  };

  const subscribe = (callback: (value: T) => void) => {
    subscribeFunctions.push(callback);
    callback(value);

    return () => {
      subscribeFunctions = subscribeFunctions.filter((func) => callback !== func);
    };
  };

  return { get, set, update, subscribe };
};

export default writableStore;
