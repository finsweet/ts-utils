import { simulateEvent } from './simulateEvent';
export const selectInputElement = (element, select = true) => {
    if (select !== element.checked) {
        element.checked = select;
        simulateEvent(element, ['click', 'input', 'change']);
    }
    return element.type === 'checkbox' ? element.checked : element.value;
};
