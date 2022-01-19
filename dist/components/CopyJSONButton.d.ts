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
    private init;
    private createHiddenTrigger;
    private handleClick;
    private handleCopy;
    private triggerNotification;
    updateCopyData(newCopyData: Record<string, unknown>): void;
    updateTextContent(newText: string): void;
}
