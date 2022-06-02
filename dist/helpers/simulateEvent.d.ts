declare type AllowedEvent = keyof DocumentEventMap | 'w-close';
/**
 * Dispatches a custom event that bubbles from the target.
 * @param target The element where the event will originate.
 * @param events The event name or an array of event names.
 * @returns True if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
 */
export declare const simulateEvent: (target: EventTarget, events: AllowedEvent | Array<AllowedEvent>) => boolean;
export {};
