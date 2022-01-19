import { queryElement, simulateEvent } from '../helpers';
import { wait } from '../helpers/wait';
import { Debug } from './Debug';
export class Interaction {
    element;
    active = false;
    running = false;
    runningPromise;
    duration;
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
    isActive = () => this.active;
    isRunning = () => this.running;
    untilFinished = () => this.runningPromise;
}
