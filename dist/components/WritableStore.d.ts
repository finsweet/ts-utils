/**
 * Writable Store that runs callbacks every time the provided value is updated.
 */
export declare class WritableStore<T> {
    private value;
    private subscribeCallbacks;
    /**
     * @param value The initial value of the store.
     */
    constructor(value: T);
    /**
     * @returns The current value
     */
    get(): T;
    /**
     * Sets a new value
     * @param newValue
     */
    set(newValue: T): void;
    /**
     * Exposes the current value and accepts a new value as an update.
     * @param callback
     */
    update(callback: (value: T) => T): void;
    /**
     * Subscribes the callback to run every time the store value changes.
     * @param callback It receives the current value.
     * @returns An unsubscribe method.
     */
    subscribe(callback: (value: T) => void): () => void;
}
