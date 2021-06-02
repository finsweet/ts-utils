/**
 * Dispatches a custom event that bubbles from the target.
 * @param target The element where the event will originate.
 * @param event The event name
 * @returns True if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
 */
// prettier-ignore
const simulateEvent = (target: EventTarget, event: keyof DocumentEventMap): boolean => target.dispatchEvent(new Event(event, { bubbles: true }));

export default simulateEvent;
