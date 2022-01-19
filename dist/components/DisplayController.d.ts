import type { InteractionParams } from './Interaction';
export interface DisplayControllerParams {
    element: HTMLElement | string;
    interaction?: InteractionParams;
    displayProperty?: typeof DisplayController['displayProperties'][number];
    noTransition?: boolean;
    startsHidden?: boolean;
}
export declare class DisplayController {
    private readonly interaction;
    private readonly noTransition;
    private readonly displayProperty;
    private visible;
    readonly element: HTMLElement;
    static readonly displayProperties: readonly ["block", "flex", "grid", "inline-block", "inline"];
    constructor({ element, interaction, displayProperty, noTransition, startsHidden }: DisplayControllerParams);
    isVisible: () => boolean;
    show(): Promise<void>;
    hide(): Promise<void>;
}
