import { queryElement, simulateEvent } from '../helpers';
import { wait } from '../helpers/wait';
import { Debug } from './Debug';
export class Interaction {
    element;
    active = false;
    running = false;
    runningPromise;
    duration;
    /**
     * Acts as the controller for a Webflow Interaction.
     * It accepts an element that will be clicked when required (firing a Mouse Click interaction).
     * @param element Element that has the Mouse Click interaction.
     * @param duration Optionally, the duration can be explicitly set so the trigger methods will return an awaitable Promise.
     */
    constructor({ element, duration }) {
        this.element =
            typeof element === 'string'
                ? queryElement(element, HTMLElement) ||
                    Debug.alert(`No interaction with the ${element} selector was found.`, 'error')
                : element;
        this.duration = {
            first: typeof duration === 'number' ? duration : duration?.first ?? 0,
            second: typeof duration === 'number' ? duration : duration?.second ?? 0,
        };
    }
    /**
     * Trigger the interaction
     * @param click Perform first or second click
     * @returns True if the interaction was fired
     */
    async trigger(click) {
        if ((click === 'first' && this.active) || (click === 'second' && !this.active))
            return false;
        if (!click)
            click = this.active ? 'second' : 'first';
        simulateEvent(this.element, 'click');
        this.running = true;
        this.runningPromise = wait(this.duration[click]);
        await this.runningPromise;
        this.running = false;
        this.active = click === 'first';
        return true;
    }
    /**
     * @returns If the interaction is active
     */
    isActive = () => this.active;
    /**
     * @returns If the interaction is running
     */
    isRunning = () => this.running;
    /**
     * @returns A promise that fulfills when the current running interaction has finished
     */
    untilFinished = () => this.runningPromise;
}
