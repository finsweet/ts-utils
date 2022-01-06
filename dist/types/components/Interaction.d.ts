export interface InteractionParams {
    element: HTMLElement | string;
    duration?: number | Partial<Interaction['duration']>;
}
export declare class Interaction {
    private readonly element;
    private active;
    private running;
    private runningPromise?;
    readonly duration: {
        first: number;
        second: number;
    };
    constructor({ element, duration }: InteractionParams);
    trigger(click?: 'first' | 'second'): Promise<boolean>;
    isActive: () => boolean;
    isRunning: () => boolean;
    untilFinished: () => Promise<unknown> | undefined;
}
