export const isVisible = (element) => !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
