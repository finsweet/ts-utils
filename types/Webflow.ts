/**
 * Includes methods of the Webflow.js object
 */
interface Webflow {
  push: (callback: () => unknown) => void;
  destroy: () => void;
  ready: () => void;
  require: (key: 'ix2') => { destroy: () => void; init: () => void };
  env: () => boolean;
}

export default Webflow;
