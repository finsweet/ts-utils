/**
 * Dispatches a custom event that bubbles from the target.
 * @param target The element where the event will originate.
 * @param events The event name or an array of event names.
 * @returns True if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
 */
export const simulateEvent = (target, events) => {
    if (!Array.isArray(events))
        events = [events];
    const eventsSuccess = events.map((event) => target.dispatchEvent(new Event(event, { bubbles: true })));
    return eventsSuccess.every((success) => success);
};
