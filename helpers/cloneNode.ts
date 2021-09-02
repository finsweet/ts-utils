/**
 * Clone a node that has the same type as the original one
 * @param node
 */
export const cloneNode = <T extends Node>(node: T, deep = true): T => <T>node.cloneNode(deep);
