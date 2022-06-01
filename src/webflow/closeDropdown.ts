import { simulateEvent } from '../helpers';
import type { DropdownToggle } from './WebflowElements';

/**
 * Closes a dropdown.
 * @param dropdownToggle A {@link DropdownToggle} element.
 * @param focusToggle Defaults to `true`.
 */
export const closeDropdown = (dropdownToggle: DropdownToggle, focusToggle = true) => {
  if (focusToggle) dropdownToggle.focus();

  simulateEvent(dropdownToggle, 'w-close');
};
