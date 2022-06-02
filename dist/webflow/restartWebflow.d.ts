import type { WebflowModule } from './Webflow';
/**
 * Restarts the Webflow JS library.
 *
 * @param modules An array of {@link WebflowModule} to restart. If passed, only those modules will be restarted instead of the whole `Webflow` instance.
 *
 * @returns An awaitable promise that is fulfilled when the library has been correctly reinitialized.
 */
export declare const restartWebflow: (modules?: WebflowModule[]) => Promise<unknown>;
