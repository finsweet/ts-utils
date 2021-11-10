import { getSiteId } from '.';

/**
 * Restarts the Webflow JS library.
 * @returns An awaitable promise that is fulfilled when the library has been correctly reinitialized.
 */
export const restartWebflow = async (): Promise<unknown> => {
  const { Webflow } = window;
  if (!Webflow || !('destroy' in Webflow) || !('ready' in Webflow) || !('require' in Webflow)) return;

  // Global
  Webflow.destroy();
  Webflow.ready();

  // IX2
  const ix2 = Webflow.require('ix2');

  if (ix2) {
    ix2.destroy();
    ix2.init();
  }

  // Commerce
  const commerce = Webflow.require('commerce');
  const siteId = getSiteId();

  if (commerce && siteId) {
    commerce.destroy();
    commerce.init({ siteId, apiUrl: 'https://render.webflow.com' });
  }

  return new Promise((resolve) => Webflow.push(() => resolve(undefined)));
};
