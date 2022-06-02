/**
 * Fade in an element
 * @param element
 * @param display Display property, flex by default
 * @returns An awaitable promise
 */
export const fadeIn = (element, display = 'flex') => {
    return new Promise((resolve) => {
        element.style.opacity = '0';
        element.style.display = display;
        (function fade() {
            const currentOpacity = parseFloat(element.style.opacity);
            if (currentOpacity >= 1) {
                resolve();
                return;
            }
            const newOpacity = currentOpacity + 0.1;
            element.style.opacity = newOpacity.toString();
            requestAnimationFrame(fade);
        })();
    });
};
/**
 * Fade out an element
 * @param element
 * @returns An awaitable promise
 */
export const fadeOut = (element) => {
    return new Promise((resolve) => {
        element.style.opacity = '1';
        (function fade() {
            const currentOpacity = parseFloat(element.style.opacity);
            const newOpacity = currentOpacity - 0.1;
            element.style.opacity = newOpacity.toString();
            if (newOpacity <= 0) {
                element.style.display = 'none';
                resolve();
            }
            else
                requestAnimationFrame(fade);
        })();
    });
};
