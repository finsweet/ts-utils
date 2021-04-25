/**
 * Clone a node that has the same type as the original one
 * @param node
 */
const cloneNode = <T extends Node>(node: T, deep = true): T => <T>node.cloneNode(deep);

export default cloneNode;
