/**
 * Restarts the Webflow JS library.
 * @returns An awaitable promise that is fulfilled when the library has been correctly reinitialized.
 */
export const restartWebflow = async (): Promise<unknown> => {
  const { Webflow } = window;
  if (!Webflow || !('destroy' in Webflow) || !('ready' in Webflow) || !('require' in Webflow)) return;

  Webflow.destroy();
  Webflow.ready();
  Webflow.require('ix2')?.init();

  return new Promise((resolve) => Webflow.push(() => resolve(undefined)));
};
