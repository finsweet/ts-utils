/**
 * Awaitable promise for waiting X time
 * @param time
 */
const wait = (time: number): Promise<unknown> => new Promise((resolve) => setTimeout(resolve, time));

export default wait;
