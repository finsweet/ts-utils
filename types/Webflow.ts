/**
 * Callback type for the Webflow.push() method.
 */
type Callback = () => unknown;

export type WebflowModule = 'ix2' | 'commerce' | 'lottie' | 'lightbox';

interface WebflowCommerce {
  destroy: () => void;
  init: (params: { siteId: string; apiUrl: string }) => void;
}

interface WebflowIx2 {
  destroy: () => void;
  init: () => void;
  actions: {
    [key: string]: (...params: unknown[]) => unknown;
  };
  store: {
    dispatch: (param: unknown) => void;
    getState: () => {
      ixData: {
        actionLists: unknown;
        eventTypeMap: unknown;
        events: unknown;
        mediaQueries: unknown;
        mediaQueryKeys: unknown;
      };
      ixElements: {
        [key: string]: unknown;
      };
      ixInstances: {
        [key: string]: unknown;
      };
      ixRequest: {
        [key: string]: unknown;
      };
      ixSession: {
        eventState: {
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  };
}

/**
 * Includes methods of the Webflow.js object
 */
export interface Webflow extends Pick<Callback[], 'push'> {
  destroy: () => void;
  ready: () => void;
  env: () => boolean;
  require: <Key extends WebflowModule>(key: Key) => (Key extends 'commerce' ? WebflowCommerce : WebflowIx2) | undefined;
}

/**
 * Declare it globally
 */
declare global {
  interface Window {
    Webflow?: Webflow | Callback[];
  }
}
