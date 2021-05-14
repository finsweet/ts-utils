import Interaction, { InteractionParams } from './Interaction';
import { fadeIn, fadeOut } from '../animations/fade';
import isVisible from '../helpers/isVisible';
import { queryElement } from '../helpers';
import { Debug } from '.';

// Types
export interface DisplayControllerParams {
  element: HTMLElement | string;
  interaction?: InteractionParams;
  displayProperty?: 'block' | 'flex' | 'grid' | 'inline-block' | 'inline' | 'none';
  noTransition?: boolean;
}

export default class DisplayController {
  private readonly interaction;
  private readonly noTransition;
  private readonly displayProperty: Required<DisplayControllerParams>['displayProperty'];
  private visible;

  public readonly element: HTMLElement;

  constructor({ element, interaction, noTransition }: Omit<DisplayControllerParams, 'displayProperty'>);
  constructor({ element, displayProperty, noTransition }: Omit<DisplayControllerParams, 'interaction'>);
  constructor({ element, interaction, displayProperty, noTransition }: DisplayControllerParams) {
    this.element =
      typeof element === 'string'
        ? queryElement(element, HTMLElement) ||
          Debug.alert(`No element with the ${element} selector was found.`, 'error')
        : element;

    this.noTransition = noTransition;
    this.displayProperty = displayProperty || 'block';
    this.visible = isVisible(this.element);

    if (interaction) {
      const { element, duration } = interaction;
      this.interaction = new Interaction({ element, duration });
    }
  }

  /**
   * @returns If the element is visible
   */
  public isVisible = (): boolean => this.visible;

  /**
   * Displays the element
   * @returns An awaitable promise
   */
  public async show(): Promise<void> {
    if (this.visible) return;

    if (this.interaction) await this.interaction.trigger('first');
    else if (this.noTransition) this.element.style.display = this.displayProperty;
    else await fadeIn(this.element, this.displayProperty);

    this.visible = true;
  }

  /**
   * Hides the element
   * @returns An awaitable promise
   */
  public async hide(): Promise<void> {
    if (!this.visible) return;

    if (this.interaction) await this.interaction.trigger('second');
    else if (this.noTransition) this.element.style.display = 'none';
    else await fadeOut(this.element);

    this.visible = false;
  }
}
