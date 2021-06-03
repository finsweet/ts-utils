/**
 * Callback type for the Webflow.push() method.
 */
type Callback = () => unknown;

/**
 * Includes methods of the Webflow.js object
 */
interface Webflow extends Pick<Callback[], 'push'> {
  destroy: () => void;
  ready: () => void;
  require: (key: 'ix2') => { destroy: () => void; init: () => void } | undefined;
  env: () => boolean;
}

export default Webflow;

/**
 * Declare it globally
 */
declare global {
  interface Window {
    Webflow?: Webflow | Callback[];
  }
}
