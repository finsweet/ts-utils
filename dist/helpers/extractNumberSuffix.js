export const extractNumberSuffix = (string) => {
    const splitValue = string.split('-');
    const suffix = parseInt(splitValue[splitValue.length - 1]);
    if (!isNaN(suffix))
        return suffix;
};
