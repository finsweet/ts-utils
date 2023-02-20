/**
 * Extracts the publish date of a Webflow site
 * @returns A Date object, if found.
 * @param page The page to get the publish date from. Defaults to the current page.
 */
export const getPublishDate = (page = document): Date | undefined => {
  const publishDatePrefix = 'Last Published:';

  for (const node of page.childNodes) {
    if (node.nodeType === Node.COMMENT_NODE && node.textContent?.includes(publishDatePrefix)) {
      const publishDateValue = node.textContent.trim().split(publishDatePrefix)[1];
      if (publishDateValue) return new Date(publishDateValue);
    }
  }
};
