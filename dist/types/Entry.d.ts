export declare type Entry<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T];
