import { simulateEvent } from '.';
export const setFormFieldValue = (element, value) => {
    const { type } = element;
    if (typeof value === 'boolean') {
        if (!(element instanceof HTMLInputElement) ||
            (type !== 'radio' && type !== 'checkbox') ||
            (type === 'checkbox' && value === false) ||
            value === element.checked)
            return;
        element.checked = value;
    }
    else {
        if (type === 'radio' || type === 'checkbox' || element.value === value)
            return;
        element.value = value;
    }
    simulateEvent(element, ['click', 'input', 'change']);
};
