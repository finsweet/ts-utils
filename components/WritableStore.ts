/**
 * Writable Store that runs callbacks every time the provided value is updated.
 */
export default class WritableStore<T> {
  private subscribeCallbacks: ((value: T) => void)[] = [];

  /**
   * @param value The initial value of the store.
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(private value: T) {}

  /**
   * @returns The current value
   */
  public get(): T {
    return this.value;
  }

  /**
   * Sets a new value
   * @param newValue
   */
  public set(newValue: T): void {
    this.value = newValue;
    this.subscribeCallbacks.forEach((callback) => callback(newValue));
  }

  /**
   * Exposes the current value and accepts a new value as an update.
   * @param callback
   */
  public update(callback: (value: T) => T): void {
    this.set(callback(this.value));
  }

  /**
   * Subscribes the callback to run every time the store value changes.
   * @param callback It receives the current value.
   * @returns An unsubscribe method.
   */
  public subscribe(callback: (value: T) => void): () => void {
    this.subscribeCallbacks.push(callback);
    callback(this.value);

    return () => {
      this.subscribeCallbacks = this.subscribeCallbacks.filter((subscribeCallback) => callback !== subscribeCallback);
    };
  }
}
