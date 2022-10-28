export const isNode = (target: unknown): target is Node => target instanceof Node;

export const isElement = (target: unknown): target is Element => target instanceof Element;

export const isHTMLElement = (target: unknown): target is HTMLElement => target instanceof HTMLElement;

export const isHTMLInputElement = (target: unknown): target is HTMLInputElement => target instanceof HTMLInputElement;

export const isHTMLSelectElement = (target: unknown): target is HTMLSelectElement =>
  target instanceof HTMLSelectElement;

export const isHTMLTextAreaElement = (target: unknown): target is HTMLTextAreaElement =>
  target instanceof HTMLTextAreaElement;
