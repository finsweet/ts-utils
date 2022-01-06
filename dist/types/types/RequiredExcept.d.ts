export declare type RequiredExcept<Original, Keys extends keyof Original> = Required<Omit<Original, Keys>> & Partial<Pick<Original, Keys>>;
