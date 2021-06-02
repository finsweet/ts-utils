/**
 * Restart Webflow JS library
 */
const restartWebflow = (): void => {
  if (!window.Webflow) return;

  window.Webflow.destroy();
  window.Webflow.ready();
  window.Webflow.require('ix2')?.init();
};

export default restartWebflow;
