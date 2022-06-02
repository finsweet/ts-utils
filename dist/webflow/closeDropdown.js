import { simulateEvent } from '../helpers';
/**
 * Closes a dropdown.
 * @param dropdownToggle A {@link DropdownToggle} element.
 * @param focusToggle Defaults to `true`.
 */
export const closeDropdown = (dropdownToggle, focusToggle = true) => {
    if (focusToggle)
        dropdownToggle.focus();
    simulateEvent(dropdownToggle, 'w-close');
};
