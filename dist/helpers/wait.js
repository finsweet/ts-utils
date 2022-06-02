/**
 * @returns Awaitable promise for waiting X time.
 * @param time
 */
export const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
