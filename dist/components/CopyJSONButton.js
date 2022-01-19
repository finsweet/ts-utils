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
    init() {
        const { element, hiddenTrigger } = this;
        element.addEventListener('click', () => this.handleClick());
        hiddenTrigger.addEventListener('copy', (e) => this.handleCopy(e));
    }
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
    handleClick() {
        this.hiddenTrigger.focus();
        document.execCommand('copy');
    }
    handleCopy(e) {
        try {
            e.clipboardData?.setData('application/json', JSON.stringify(this.copyData).trim());
            e.preventDefault();
            this.triggerNotification('success');
        }
        catch {
            this.triggerNotification('error');
        }
    }
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
    updateCopyData(newCopyData) {
        this.copyData = newCopyData;
    }
    updateTextContent(newText) {
        this.textNode.textContent = newText;
        this.originalText = newText;
    }
}
