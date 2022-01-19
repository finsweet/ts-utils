import { getSiteId } from '.';
export const restartWebflow = async (modules) => {
    const { Webflow } = window;
    if (!Webflow || !('destroy' in Webflow) || !('ready' in Webflow) || !('require' in Webflow))
        return;
    if (modules && !modules.length)
        return;
    if (!modules) {
        Webflow.destroy();
        Webflow.ready();
    }
    if (!modules || modules.includes('ix2')) {
        const ix2 = Webflow.require('ix2');
        if (ix2) {
            const { store, actions } = ix2;
            const { eventState } = store.getState().ixSession;
            const stateEntries = Object.entries(eventState);
            if (!modules)
                ix2.destroy();
            ix2.init();
            await Promise.all(stateEntries.map((state) => store.dispatch(actions.eventStateChanged(...state))));
        }
    }
    if (!modules || modules.includes('commerce')) {
        const commerce = Webflow.require('commerce');
        const siteId = getSiteId();
        if (commerce && siteId) {
            commerce.destroy();
            commerce.init({ siteId, apiUrl: 'https://render.webflow.com' });
        }
    }
    if (modules?.includes('lightbox'))
        Webflow.require('lightbox')?.ready();
    if (modules?.includes('slider'))
        Webflow.require('slider')?.redraw();
    if (modules?.includes('tabs'))
        Webflow.require('tabs')?.redraw();
    return new Promise((resolve) => Webflow.push(() => resolve(undefined)));
};
