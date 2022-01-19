import { FORM_CSS_CLASSES } from '../webflow/css';
import { simulateEvent } from './simulateEvent';
const { radioInput: radioInputCSSClass, checkboxOrRadioFocus: focusCSSClass, checkboxOrRadioChecked: checkedCSSClass, } = FORM_CSS_CLASSES;
export const clearFormField = (field, omitEvents = []) => {
    const { type } = field;
    if (field instanceof HTMLInputElement && ['checkbox', 'radio'].includes(type)) {
        if (!field.checked)
            return;
        field.checked = false;
        simulateEvent(field, ['click', 'input', 'change'].filter((event) => !omitEvents.includes(event)));
        if (type === 'checkbox')
            return;
        const { parentElement } = field;
        if (!parentElement)
            return;
        const radioInput = parentElement.querySelector(`.${radioInputCSSClass}`);
        if (!radioInput)
            return;
        radioInput.classList.remove(focusCSSClass, checkedCSSClass);
        return;
    }
    field.value = '';
    simulateEvent(field, ['input', 'change'].filter((eventKey) => !omitEvents.includes(eventKey)));
};
