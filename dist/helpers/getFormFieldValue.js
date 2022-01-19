export const getFormFieldValue = (input) => {
    let { value } = input;
    if (input.type === 'checkbox')
        value = input.checked.toString();
    if (input.type === 'radio') {
        const checkedOption = input.closest('form')?.querySelector(`input[name="${input.name}"]:checked`);
        value = checkedOption instanceof HTMLInputElement ? checkedOption.value : '';
    }
    return value.toString();
};
