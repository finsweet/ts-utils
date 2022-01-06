import { WEBFLOW_BREAKPOINTS } from './breakpoints';

import type { WebflowBreakpoint } from './breakpoints';

/**
 * Checks the current breakpoint based on the window media.
 *
 * @returns A {@link WebflowBreakpoint} string.
 */
export const getCurrentBreakpoint = (): WebflowBreakpoint => {
  for (const [breakpoint, mediaQuery] of WEBFLOW_BREAKPOINTS) {
    if (window.matchMedia(mediaQuery).matches) {
      return breakpoint;
    }
  }

  return 'main';
};
