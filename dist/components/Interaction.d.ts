export interface InteractionParams {
    /**
     * The element that has a Webflow Ix2 Click interaction binded to it.
     */
    element: HTMLElement | string;
    /**
     * The duration of the interaction.
     * If a single number is passed, it will be used for both first and second interactions.
     * If an object is passed, you can specify the duration for each interaction.
     */
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
    /**
     * Acts as the controller for a Webflow Interaction.
     * It accepts an element that will be clicked when required (firing a Mouse Click interaction).
     * @param element Element that has the Mouse Click interaction.
     * @param duration Optionally, the duration can be explicitly set so the trigger methods will return an awaitable Promise.
     */
    constructor({ element, duration }: InteractionParams);
    /**
     * Trigger the interaction
     * @param click Perform first or second click
     * @returns True if the interaction was fired
     */
    trigger(click?: 'first' | 'second'): Promise<boolean>;
    /**
     * @returns If the interaction is active
     */
    isActive: () => boolean;
    /**
     * @returns If the interaction is running
     */
    isRunning: () => boolean;
    /**
     * @returns A promise that fulfills when the current running interaction has finished
     */
    untilFinished: () => Promise<unknown> | undefined;
}
