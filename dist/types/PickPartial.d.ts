/**
 * The picked keys will become Partial and the rest of the interface will stay the same.
 */
export declare type PickPartial<Original, Keys extends keyof Original> = Omit<Original, Keys> & Partial<Pick<Original, Keys>>;
