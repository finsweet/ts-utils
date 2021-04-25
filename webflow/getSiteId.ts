/**
 * @returns The Webflow Site ID of the website
 */
const getSiteId = (): string | null => document.documentElement.getAttribute('data-wf-site');

export default getSiteId;
