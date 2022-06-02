/**
 * Callback type for the Webflow.push() method.
 */
declare type Callback = () => unknown;
export declare type WebflowModule = 'ix2' | 'commerce' | 'lottie' | 'lightbox' | 'slider' | 'tabs';
interface WebflowCommerce {
    destroy: () => void;
    init: (params: {
        siteId: string;
        apiUrl: string;
    }) => void;
}
interface WebflowLightbox {
    preview: () => void;
    design: () => void;
    ready: () => void;
}
interface WebflowSlider {
    preview: () => void;
    design: () => void;
    ready: () => void;
    destroy: () => void;
    redraw: () => void;
}
declare type WebflowTabs = WebflowSlider;
interface WebflowIx2 {
    destroy: () => void;
    init: () => void;
    actions: {
        [key: string]: (...params: unknown[]) => unknown;
    };
    store: {
        dispatch: (param: unknown) => void;
        getState: () => {
            ixData: {
                actionLists: unknown;
                eventTypeMap: unknown;
                events: unknown;
                mediaQueries: unknown;
                mediaQueryKeys: unknown;
            };
            ixElements: {
                [key: string]: unknown;
            };
            ixInstances: {
                [key: string]: unknown;
            };
            ixRequest: {
                [key: string]: unknown;
            };
            ixSession: {
                eventState: {
                    [key: string]: unknown;
                };
                [key: string]: unknown;
            };
        };
    };
}
/**
 * Includes methods of the Webflow.js object
 */
export interface Webflow extends Pick<Callback[], 'push'> {
    destroy: () => void;
    ready: () => void;
    env: () => boolean;
    require: <Key extends WebflowModule>(key: Key) => (Key extends 'commerce' ? WebflowCommerce : Key extends 'lightbox' ? WebflowLightbox : Key extends 'slider' ? WebflowSlider : Key extends 'tabs' ? WebflowTabs : WebflowIx2) | undefined;
}
/**
 * Declare it globally
 */
declare global {
    interface Window {
        Webflow?: Webflow | Callback[];
    }
}
export {};
