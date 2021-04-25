import Webflow from '../types/Webflow';

declare global {
  interface Window {
    Webflow: Webflow;
  }
}

/**
 * Restart Webflow JS library
 */
const restartWebflow = (): void => {
  window.Webflow.destroy();
  window.Webflow.ready();
  window.Webflow.require('ix2')?.init();
};

export default restartWebflow;
