import type { Instance } from '../types/Instance';

/**
 * Query an element and make sure it's the correct type
 * @param selector Selector string
 * @param instance Instance target of the element type. Example: HTMLElement
 * @param scope The scope context where to query. Defaults to document
 * @returns The queried element or undefined
 */
export const queryElement = <T extends Element>(
  selector: string,
  instance: Instance<T>,
  scope: ParentNode = document
): T | undefined => {
  const element = scope.querySelector(selector);
  if (element instanceof instance) return element;
};
