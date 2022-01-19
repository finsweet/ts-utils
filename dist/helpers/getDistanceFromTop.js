export const getDistanceFromTop = (element) => {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    return rect.top + scrollTop;
};
