/**
 * Writable Store that runs callbacks every time the provided value is updated.
 */
export class WritableStore {
    value;
    subscribeCallbacks = [];
    /**
     * @param value The initial value of the store.
     */
    // eslint-disable-next-line no-useless-constructor
    constructor(value) {
        this.value = value;
    }
    /**
     * @returns The current value
     */
    get() {
        return this.value;
    }
    /**
     * Sets a new value
     * @param newValue
     */
    set(newValue) {
        this.value = newValue;
        this.subscribeCallbacks.forEach((callback) => callback(newValue));
    }
    /**
     * Exposes the current value and accepts a new value as an update.
     * @param callback
     */
    update(callback) {
        this.set(callback(this.value));
    }
    /**
     * Subscribes the callback to run every time the store value changes.
     * @param callback It receives the current value.
     * @returns An unsubscribe method.
     */
    subscribe(callback) {
        this.subscribeCallbacks.push(callback);
        callback(this.value);
        return () => {
            this.subscribeCallbacks = this.subscribeCallbacks.filter((subscribeCallback) => callback !== subscribeCallback);
        };
    }
}
