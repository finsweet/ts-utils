import { isKeyOf } from '../type-guards/isKeyOf';
export function extractCommaSeparatedValues(string, compareSource, defaultValue, filterEmpty = true) {
    const emptyValue = defaultValue ? [defaultValue] : [];
    if (!string)
        return emptyValue;
    const items = string.split(',').reduce((accumulatedValue, currentValue) => {
        const value = currentValue.trim();
        if (!filterEmpty || value)
            accumulatedValue.push(value);
        return accumulatedValue;
    }, []);
    if (compareSource) {
        const matches = items.filter((item) => isKeyOf(item, compareSource));
        return matches.length ? matches : emptyValue;
    }
    return items;
}
