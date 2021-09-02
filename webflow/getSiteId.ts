/**
 * @returns The Webflow Site ID of the website
 */
export const getSiteId = (): string | null => document.documentElement.getAttribute('data-wf-site');
