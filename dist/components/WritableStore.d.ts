export declare class WritableStore<T> {
    private value;
    private subscribeCallbacks;
    constructor(value: T);
    get(): T;
    set(newValue: T): void;
    update(callback: (value: T) => T): void;
    subscribe(callback: (value: T) => void): () => void;
}
