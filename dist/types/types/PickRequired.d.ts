export declare type PickRequired<Original, Keys extends keyof Original> = Omit<Original, Keys> & Required<Pick<Original, Keys>>;
