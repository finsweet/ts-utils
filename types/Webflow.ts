/**
 * Callback type for the Webflow.push() method.
 */
type Callback = () => unknown;

/**
 * Includes methods of the Webflow.js object
 */
export interface Webflow extends Pick<Callback[], 'push'> {
  destroy: () => void;
  ready: () => void;
  env: () => boolean;
  require: <Key extends 'ix2' | 'commerce'>(
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
