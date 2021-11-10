/**
 * Callback type for the Webflow.push() method.
 */
type Callback = () => unknown;

export type WebflowModule = 'ix2' | 'commerce' | 'lottie' | 'lightbox';

/**
 * Includes methods of the Webflow.js object
 */
export interface Webflow extends Pick<Callback[], 'push'> {
  destroy: () => void;
  ready: () => void;
  env: () => boolean;
  require: <Key extends WebflowModule>(
    key: Key
  ) =>
    | {
        destroy: () => void;
        init: Key extends 'commerce' ? (params: { siteId: string; apiUrl: string }) => void : () => void;
      }
    | undefined;
}

/**
 * Declare it globally
 */
declare global {
  interface Window {
    Webflow?: Webflow | Callback[];
  }
}
