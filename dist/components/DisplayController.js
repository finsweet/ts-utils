import { Interaction } from './Interaction';
import { fadeIn, fadeOut } from '../animations/fade';
import { isVisible } from '../helpers/isVisible';
import { queryElement } from '../helpers';
import { Debug } from '.';
export class DisplayController {
    interaction;
    noTransition;
    displayProperty;
    visible;
    element;
    static displayProperties = ['block', 'flex', 'grid', 'inline-block', 'inline'];
    constructor({ element, interaction, displayProperty, noTransition, startsHidden }) {
        this.element =
            typeof element === 'string'
                ? queryElement(element, HTMLElement) ||
                    Debug.alert(`No element with the ${element} selector was found.`, 'error')
                : element;
        this.noTransition = noTransition;
        this.displayProperty = displayProperty || 'block';
        if (startsHidden) {
            this.element.style.display = 'none';
            this.visible = false;
        }
        else
            this.visible = isVisible(this.element);
        if (interaction) {
            const { element, duration } = interaction;
            this.interaction = new Interaction({ element, duration });
        }
    }
    isVisible = () => this.visible;
    async show() {
        if (this.visible)
            return;
        if (this.interaction)
            await this.interaction.trigger('first');
        else if (this.noTransition)
            this.element.style.display = this.displayProperty;
        else
            await fadeIn(this.element, this.displayProperty);
        this.visible = true;
    }
    async hide() {
        if (!this.visible)
            return;
        if (this.interaction)
            await this.interaction.trigger('second');
        else if (this.noTransition)
            this.element.style.display = 'none';
        else
            await fadeOut(this.element);
        this.visible = false;
    }
}
