/**
 * Finds the first child text node of an element
 * @param element The element to search into.
 */
export const findTextNode = (element) => {
    let textNode;
    for (const node of element.childNodes) {
        if (node instanceof HTMLElement && node.childNodes.length)
            textNode = findTextNode(node);
        else if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim())
            textNode = node;
        if (textNode)
            break;
    }
    return textNode;
};
