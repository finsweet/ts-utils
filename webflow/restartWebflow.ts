/**
 * Restart Webflow JS library
 */
const restartWebflow = (): void => {
  const { Webflow } = window;
  if (!Webflow || !('destroy' in Webflow) || !('ready' in Webflow) || !('require' in Webflow)) return;

  Webflow.destroy();
  Webflow.ready();
  Webflow.require('ix2')?.init();
};

export default restartWebflow;
