import { simulateEvent } from '../helpers';
export const closeDropdown = (dropdownToggle, focusToggle = true) => {
    if (focusToggle)
        dropdownToggle.focus();
    simulateEvent(dropdownToggle, 'w-close');
};
