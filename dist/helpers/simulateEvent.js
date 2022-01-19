export const simulateEvent = (target, events) => {
    if (!Array.isArray(events))
        events = [events];
    const eventsSuccess = events.map((event) => target.dispatchEvent(new Event(event, { bubbles: true })));
    return eventsSuccess.every((success) => success);
};
