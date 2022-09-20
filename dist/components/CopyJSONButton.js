import { findTextNode } from '..';
export class CopyJSONButton {
    element;
    hiddenTrigger;
    successCSSClass;
    textNode;
    copyData;
    successText = 'Copied!';
    errorText = 'Something went wrong';
    notificationDuration = 500;
    notificationActive = false;
    originalText;
    constructor({ element, copyData, successText, errorText, notificationDuration, successCSSClass, }) {
        this.element = element;
        this.copyData = copyData;
        if (successText)
            this.successText = successText;
        if (errorText)
            this.errorText = errorText;
        if (notificationDuration)
            this.notificationDuration = notificationDuration;
        if (successCSSClass)
            this.successCSSClass = successCSSClass;
        this.textNode = findTextNode(element) || element;
        this.originalText = this.textNode.textContent || '';
        this.hiddenTrigger = this.createHiddenTrigger();
        this.init();
    }
    /**
     * Inits the component.
     */
    init() {
        const { element, hiddenTrigger } = this;
        element.addEventListener('click', (e) => this.handleClick(e));
        hiddenTrigger.addEventListener('copy', (e) => this.handleCopy(e));
    }
    /**
     * Creates a hidden button that will serve as the copy trigger.
     * @returns The new button element.
     */
    createHiddenTrigger() {
        const { element } = this;
        const button = document.createElement('button');
        button.contentEditable = 'true';
        Object.assign(button.style, {
            position: 'absolute',
            clip: 'rect(1px, 1px, 1px, 1px)',
            clipPath: 'inset(0px 0px 99.9% 99.9%)',
            overflow: 'hidden',
            height: '1px',
            width: '1px',
            padding: '0',
            border: '0',
        });
        (element.parentElement || document.body).appendChild(button);
        return button;
    }
    /**
     * Handles click events: triggers a copy command on the element.
     */
    handleClick(e) {
        e.preventDefault();
        this.hiddenTrigger.focus();
        document.execCommand('copy');
    }
    /**
     * Handles the copy event, transfers the JSON data to the user's clipboard.
     * @param e
     */
    handleCopy(e) {
        try {
            // Copy starter form JSON to clipboard
            e.clipboardData?.setData('application/json', JSON.stringify(this.copyData).trim());
            e.preventDefault();
            // Trigger notification
            this.triggerNotification('success');
        }
        catch {
            this.triggerNotification('error');
        }
    }
    /**
     * Triggers a `success`/`error` notification on the button.
     * If the `successCSSClass` is specific, it adds/removes on the button.
     * @param state `success` or `error`
     */
    triggerNotification(state) {
        const { notificationActive, notificationDuration, originalText, element, successCSSClass, successText, errorText } = this;
        if (notificationActive)
            return;
        this.notificationActive = true;
        this.textNode.textContent = state === 'success' ? successText : errorText;
        if (successCSSClass)
            element.classList.add(successCSSClass);
        window.setTimeout(() => {
            this.textNode.textContent = originalText;
            if (successCSSClass)
                element.classList.remove(successCSSClass);
            this.notificationActive = false;
        }, notificationDuration);
    }
    /**
     * Updates the JSON data to be copied.
     * @param newCopyData
     */
    updateCopyData(newCopyData) {
        this.copyData = newCopyData;
    }
    /**
     * Updates the button's text content.
     * @param newText The new text to be displayed.
     */
    updateTextContent(newText) {
        this.textNode.textContent = newText;
        this.originalText = newText;
    }
}
