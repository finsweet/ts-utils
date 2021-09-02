/**
 * The picked keys will become required and the rest of the interface will stay the same.
 */
export type PickRequired<Original, Keys extends keyof Original> = Omit<Original, Keys> & Required<Pick<Original, Keys>>;
