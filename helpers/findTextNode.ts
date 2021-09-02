/**
 * Find the first child text node of an element
 * @param element
 */
export const findTextNode = (element: HTMLElement): ChildNode | undefined => {
  let textNode: ChildNode | undefined;

  for (const node of element.childNodes) {
    if (node instanceof HTMLElement && node.childNodes.length) textNode = findTextNode(node);
    else if (node.nodeType === Node.TEXT_NODE) textNode = node;
    if (textNode) break;
  }

  return textNode;
};
