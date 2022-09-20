import { findTextNode } from '..';

export class CopyJSONButton {
  private readonly element: HTMLElement;
  private readonly hiddenTrigger: HTMLButtonElement;
  private readonly successCSSClass?: string;
  private readonly textNode: ChildNode;

  private copyData: Record<string, unknown>;
  private successText = 'Copied!';
  private errorText = 'Something went wrong';
  private notificationDuration = 500;
  private notificationActive = false;
  private originalText: string;

  constructor({
    element,
    copyData,
    successText,
    errorText,
    notificationDuration,
    successCSSClass,
  }: {
    element: HTMLElement;
    copyData: Record<string, unknown>;
    successText?: string;
    errorText?: string;
    notificationDuration?: number;
    successCSSClass?: string;
  }) {
    this.element = element;
    this.copyData = copyData;
    if (successText) this.successText = successText;
    if (errorText) this.errorText = errorText;
    if (notificationDuration) this.notificationDuration = notificationDuration;
    if (successCSSClass) this.successCSSClass = successCSSClass;

    this.textNode = findTextNode(element) || element;
    this.originalText = this.textNode.textContent || '';
    this.hiddenTrigger = this.createHiddenTrigger();

    this.init();
  }

  /**
   * Inits the component.
   */
  private init() {
    const { element, hiddenTrigger } = this;

    element.addEventListener('click', (e) => this.handleClick(e));

    hiddenTrigger.addEventListener('copy', (e) => this.handleCopy(e));
  }

  /**
   * Creates a hidden button that will serve as the copy trigger.
   * @returns The new button element.
   */
  private createHiddenTrigger() {
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
  private handleClick(e: MouseEvent) {
    e.preventDefault();

    this.hiddenTrigger.focus();
    document.execCommand('copy');
  }

  /**
   * Handles the copy event, transfers the JSON data to the user's clipboard.
   * @param e
   */
  private handleCopy(e: ClipboardEvent) {
    try {
      // Copy starter form JSON to clipboard
      e.clipboardData?.setData('application/json', JSON.stringify(this.copyData).trim());

      e.preventDefault();

      // Trigger notification
      this.triggerNotification('success');
    } catch {
      this.triggerNotification('error');
    }
  }

  /**
   * Triggers a `success`/`error` notification on the button.
   * If the `successCSSClass` is specific, it adds/removes on the button.
   * @param state `success` or `error`
   */
  private triggerNotification(state: 'success' | 'error') {
    const { notificationActive, notificationDuration, originalText, element, successCSSClass, successText, errorText } =
      this;

    if (notificationActive) return;

    this.notificationActive = true;

    this.textNode.textContent = state === 'success' ? successText : errorText;

    if (successCSSClass) element.classList.add(successCSSClass);

    window.setTimeout(() => {
      this.textNode.textContent = originalText;
      if (successCSSClass) element.classList.remove(successCSSClass);

      this.notificationActive = false;
    }, notificationDuration);
  }

  /**
   * Updates the JSON data to be copied.
   * @param newCopyData
   */
  public updateCopyData(newCopyData: Record<string, unknown>): void {
    this.copyData = newCopyData;
  }

  /**
   * Updates the button's text content.
   * @param newText The new text to be displayed.
   */
  public updateTextContent(newText: string): void {
    this.textNode.textContent = newText;
    this.originalText = newText;
  }
}
