/**
 * The default Webflow Breakpoint names.
 */
export type WebflowBreakpoint = 'main' | 'medium' | 'small' | 'tiny';

type WebflowBreakpoints = Map<WebflowBreakpoint, string>;

/**
 * Defines the default media queries for Webflow's breakpoints.
 */
export const WEBFLOW_BREAKPOINTS: WebflowBreakpoints = new Map([
  ['tiny', '(max-width: 479px)'],
  ['small', '(max-width: 767px)'],
  ['medium', '(max-width: 991px)'],
  ['main', '(min-width: 992px)'],
]);
