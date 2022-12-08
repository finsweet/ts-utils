import { getSiteId } from '.';

import type { WebflowModule } from './Webflow';

/**
 * Restarts the Webflow JS library.
 *
 * @param modules An array of {@link WebflowModule} to restart. If passed, only those modules will be restarted instead of the whole `Webflow` instance.
 *
 * @returns An awaitable promise that is fulfilled when the library has been correctly reinitialized.
 */
export const restartWebflow = async (modules?: WebflowModule[]): Promise<unknown> => {
  const { Webflow } = window;
  if (!Webflow || !('destroy' in Webflow) || !('ready' in Webflow) || !('require' in Webflow)) return;

  if (modules && !modules.length) return;

  // Global
  if (!modules) {
    Webflow.destroy();
    Webflow.ready();
  }

  // IX2
  if (!modules || modules.includes('ix2')) {
    const ix2 = Webflow.require('ix2');

    if (ix2) {
      const { store, actions } = ix2;
      const { eventState } = store.getState().ixSession;
      const stateEntries = Object.entries(eventState);

      if (!modules) ix2.destroy();

      ix2.init();

      await Promise.all(stateEntries.map((state) => store.dispatch(actions.eventStateChanged(...state))));
    }
  }

  // Commerce
  if (!modules || modules.includes('commerce')) {
    const commerce = Webflow.require('commerce');
    const siteId = getSiteId();

    if (commerce && siteId) {
      commerce.destroy();
      commerce.init({ siteId, apiUrl: 'https://render.webflow.com' });
    }
  }

  // Lightbox
  if (modules?.includes('lightbox')) Webflow.require('lightbox')?.ready();

  // Slider
  if (modules?.includes('slider')) {
    const slider = Webflow.require('slider');

    if (slider) {
      slider.redraw();
      slider.ready();
    }
  }

  // Tabs
  if (modules?.includes('tabs')) Webflow.require('tabs')?.redraw();

  return new Promise((resolve) => Webflow.push(() => resolve(undefined)));
};
