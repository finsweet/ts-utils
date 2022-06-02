import type { InteractionParams } from './Interaction';
export interface DisplayControllerParams {
    /**
     * The main element. Accepts both an HTMLElement or a string selector.
     */
    element: HTMLElement | string;
    /**
     * If the display must be controlled thorugh a Webflow interaction.
     */
    interaction?: InteractionParams;
    /**
     * The display property of the element when displayed.
     * Not applicable when interaction parameters ara passed to the instance, as it's assumed that the Webflow interaction will set the display property.
     * Defaults to `block`.
     */
    displayProperty?: typeof DisplayController['displayProperties'][number];
    /**
     * If set to true, the element will be straitgh showed / hidden without any transition.
     */
    noTransition?: boolean;
    /**
     * If set to true, the element will be set to `display: none`.
     */
    startsHidden?: boolean;
}
/**
 * Controls showing/hiding an element.
 * Works with Webflow interactions, built-in fade animations or no animations at all.
 */
export declare class DisplayController {
    private readonly interaction;
    private readonly noTransition;
    private readonly displayProperty;
    private visible;
    readonly element: HTMLElement;
    static readonly displayProperties: readonly ["block", "flex", "grid", "inline-block", "inline"];
    constructor({ element, interaction, displayProperty, noTransition, startsHidden }: DisplayControllerParams);
    /**
     * @returns If the element is visible
     */
    isVisible: () => boolean;
    /**
     * Displays the element
     * @returns An awaitable promise
     */
    show(): Promise<void>;
    /**
     * Hides the element
     * @returns An awaitable promise
     */
    hide(): Promise<void>;
}
