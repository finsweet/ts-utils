/**
 * Get the distance between an element and the top of the window
 * @param element
 * @returns The distance in pixels
 */
export const getDistanceFromTop = (element) => {
    const rect = element.getBoundingClientRect();
    // prettier-ignore
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    return rect.top + scrollTop;
};
