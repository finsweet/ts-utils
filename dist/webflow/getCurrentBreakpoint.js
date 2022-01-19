import { WEBFLOW_BREAKPOINTS } from './breakpoints';
export const getCurrentBreakpoint = () => {
    for (const [breakpoint, mediaQuery] of WEBFLOW_BREAKPOINTS) {
        if (window.matchMedia(mediaQuery).matches) {
            return breakpoint;
        }
    }
    return 'main';
};
