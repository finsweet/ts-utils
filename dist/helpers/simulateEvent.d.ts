declare type AllowedEvent = keyof DocumentEventMap | 'w-close';
export declare const simulateEvent: (target: EventTarget, events: AllowedEvent | Array<AllowedEvent>) => boolean;
export {};
