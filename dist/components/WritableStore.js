export class WritableStore {
    value;
    subscribeCallbacks = [];
    constructor(value) {
        this.value = value;
    }
    get() {
        return this.value;
    }
    set(newValue) {
        this.value = newValue;
        this.subscribeCallbacks.forEach((callback) => callback(newValue));
    }
    update(callback) {
        this.set(callback(this.value));
    }
    subscribe(callback) {
        this.subscribeCallbacks.push(callback);
        callback(this.value);
        return () => {
            this.subscribeCallbacks = this.subscribeCallbacks.filter((subscribeCallback) => callback !== subscribeCallback);
        };
    }
}
