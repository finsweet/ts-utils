/**
 * Extracts the publish date of a Webflow site
 * @returns A Date object, if found
 */
const getPublishDate = (): Date | undefined => {
  const publishDatePrefix = 'Last Published:';

  for (const node of document.childNodes) {
    if (node.nodeType === Node.COMMENT_NODE && node.textContent?.includes(publishDatePrefix)) {
      const publishDateValue = node.textContent.trim().split(publishDatePrefix)[1];
      if (publishDateValue) return new Date(publishDateValue);
    }
  }
};

export default getPublishDate;
