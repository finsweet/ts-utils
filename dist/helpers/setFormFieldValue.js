import { simulateEvent } from '.';
export const setFormFieldValue = (element, value) => {
    const { type } = element;
    const isRadio = type === 'radio';
    const isCheckbox = type === 'checkbox';
    if (isRadio || isCheckbox) {
        if (!(element instanceof HTMLInputElement) ||
            typeof value !== 'boolean' ||
            value === element.checked ||
            (isRadio && value === false)) {
            return;
        }
        element.checked = value;
    }
    else if (element.value !== value) {
        element.value = value.toString();
    }
    simulateEvent(element, ['click', 'input', 'change']);
};
