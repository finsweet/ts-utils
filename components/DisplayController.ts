import Interaction, { InteractionParams } from './Interaction';
import { fadeIn, fadeOut } from '../animations/fade';
import isVisible from '../helpers/isVisible';

// Types
export interface DisplayControllerParams {
  element: HTMLElement;
  interaction?: InteractionParams;
  displayProperty?: 'block' | 'flex' | 'grid' | 'inline-block' | 'inline' | 'none';
  noTransition?: boolean;
}

export default class DisplayController {
  private readonly displayProperty;
  private readonly interaction;
  private readonly element;
  private readonly noTransition;
  private visible;

  constructor({ element, interaction, noTransition }: Omit<DisplayControllerParams, 'displayProperty'>);
  constructor({ element, displayProperty, noTransition }: Omit<DisplayControllerParams, 'interaction'>);
  constructor({ element, interaction, displayProperty, noTransition }: DisplayControllerParams) {
    this.element = element;
    this.noTransition = noTransition;
    this.visible = isVisible(element);
    this.displayProperty = displayProperty || 'block';

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
  public async display(): Promise<void> {
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
