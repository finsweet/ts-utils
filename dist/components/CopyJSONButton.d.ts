export declare class CopyJSONButton {
    private readonly element;
    private readonly hiddenTrigger;
    private readonly successCSSClass?;
    private readonly textNode;
    private copyData;
    private successText;
    private errorText;
    private notificationDuration;
    private notificationActive;
    private originalText;
    constructor({ element, copyData, successText, errorText, notificationDuration, successCSSClass, }: {
        element: HTMLElement;
        copyData: Record<string, unknown>;
        successText?: string;
        errorText?: string;
        notificationDuration?: number;
        successCSSClass?: string;
    });
    /**
     * Inits the component.
     */
    private init;
    /**
     * Creates a hidden button that will serve as the copy trigger.
     * @returns The new button element.
     */
    private createHiddenTrigger;
    /**
     * Handles click events: triggers a copy command on the element.
     */
    private handleClick;
    /**
     * Handles the copy event, transfers the JSON data to the user's clipboard.
     * @param e
     */
    private handleCopy;
    /**
     * Triggers a `success`/`error` notification on the button.
     * If the `successCSSClass` is specific, it adds/removes on the button.
     * @param state `success` or `error`
     */
    private triggerNotification;
    /**
     * Updates the JSON data to be copied.
     * @param newCopyData
     */
    updateCopyData(newCopyData: Record<string, unknown>): void;
    /**
     * Updates the button's text content.
     * @param newText The new text to be displayed.
     */
    updateTextContent(newText: string): void;
}
