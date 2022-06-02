/**
 * The picked keys will become Partial and the rest of the interface will become Required.
 */
export declare type RequiredExcept<Original, Keys extends keyof Original> = Required<Omit<Original, Keys>> & Partial<Pick<Original, Keys>>;
