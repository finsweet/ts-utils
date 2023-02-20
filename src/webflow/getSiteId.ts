/**
 * @returns The Webflow Site ID of the website.
 * @param page The page to get the site ID from. Defaults to the current page.
 */
export const getSiteId = (page = document): string | null => page.documentElement.getAttribute('data-wf-site');
