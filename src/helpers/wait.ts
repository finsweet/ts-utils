/**
 * @returns Awaitable promise for waiting X time.
 * @param time
 */
export const wait = (time: number): Promise<unknown> => new Promise((resolve) => setTimeout(resolve, time));
