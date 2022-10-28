import { isHTMLElement } from '../type-guards';

/**
 * Finds the first child text node of an element
 * @param element The element to search into.
 */
export const findTextNode = (element: HTMLElement): ChildNode | undefined => {
  let textNode: ChildNode | undefined;

  for (const node of element.childNodes) {
    if (isHTMLElement(node) && node.childNodes.length) textNode = findTextNode(node);
    else if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) textNode = node;

    if (textNode) break;
  }

  return textNode;
};
