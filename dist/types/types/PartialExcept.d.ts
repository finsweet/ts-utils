export declare type PartialExcept<Original, Keys extends keyof Original> = Partial<Omit<Original, Keys>> & Required<Pick<Original, Keys>>;
