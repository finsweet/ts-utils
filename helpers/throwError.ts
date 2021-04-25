/**
 * Display an alert and throw an exception
 * @param message
 * @returns The generic argument to assure type safety when querying DOM Elements.
 */
const throwError = <T>(message: string): T => {
  throw new Error(message);
};

export default throwError;
