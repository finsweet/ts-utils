export declare type PickPartial<Original, Keys extends keyof Original> = Omit<Original, Keys> & Partial<Pick<Original, Keys>>;
