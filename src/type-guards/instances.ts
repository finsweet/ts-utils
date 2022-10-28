export const isFile = (target: unknown): target is File => target instanceof File;

export const isNode = (target: unknown): target is Node => target instanceof Node;

export const isElement = (target: unknown): target is Element => target instanceof Element;

export const isHTMLElement = (target: unknown): target is HTMLElement => target instanceof HTMLElement;

export const isHTMLInputElement = (target: unknown): target is HTMLInputElement => target instanceof HTMLInputElement;

export const isHTMLSelectElement = (target: unknown): target is HTMLSelectElement =>
  target instanceof HTMLSelectElement;

export const isHTMLTextAreaElement = (target: unknown): target is HTMLTextAreaElement =>
  target instanceof HTMLTextAreaElement;

export const isHTMLVideoElement = (target: unknown): target is HTMLVideoElement => target instanceof HTMLVideoElement;

export const isHTMLAnchorElement = (target: unknown): target is HTMLAnchorElement =>
  target instanceof HTMLAnchorElement;

export const isHTMLImageElement = (target: unknown): target is HTMLImageElement => target instanceof HTMLImageElement;

export const isHTMLOptionElement = (target: unknown): target is HTMLOptionElement =>
  target instanceof HTMLOptionElement;

export const isHTMLButtonElement = (target: unknown): target is HTMLButtonElement =>
  target instanceof HTMLButtonElement;
