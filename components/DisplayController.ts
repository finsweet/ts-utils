import type { InteractionParams } from './Interaction';
import Interaction from './Interaction';
import { fadeIn, fadeOut } from '../animations/fade';
import isVisible from '../helpers/isVisible';
import { queryElement } from '../helpers';
import { Debug } from '.';

// Types
export interface DisplayControllerParams {
  /**
   * The main element. Accepts both an HTMLElement or a string selector.
   */
  element: HTMLElement | string;

  /**
   * If the display must be controlled thorugh a Webflow interaction.
   */
  interaction?: InteractionParams;

  /**
   * The display property of the element when displayed.
   * Not applicable when interaction parameters ara passed to the instance, as it's assumed that the Webflow interaction will set the display property.
   * Defaults to `block`.
   */
  displayProperty?: typeof DisplayController['displayProperties'][number];

  /**
   * If set to true, the element will be straitgh showed / hidden without any transition.
   */
  noTransition?: boolean;

  /**
   * If set to true, the element will be set to `display: none`.
   */
  startsHidden?: boolean;
}

/**
 * Controls showing/hiding an element.
 * Works with Webflow interactions, built-in fade animations or no animations at all.
 */
export default class DisplayController {
  private readonly interaction;
  private readonly noTransition;
  private readonly displayProperty: Required<DisplayControllerParams>['displayProperty'];
  private visible;

  public readonly element: HTMLElement;
  public static readonly displayProperties = ['block', 'flex', 'grid', 'inline-block', 'inline'] as const;

  constructor({ element, interaction, displayProperty, noTransition, startsHidden }: DisplayControllerParams) {
    // Store properties
    this.element =
      typeof element === 'string'
        ? queryElement(element, HTMLElement) ||
          Debug.alert(`No element with the ${element} selector was found.`, 'error')
        : element;

    this.noTransition = noTransition;
    this.displayProperty = displayProperty || 'block';

    // Visibility check
    if (startsHidden) {
      this.element.style.display = 'none';
      this.visible = false;
    } else this.visible = isVisible(this.element);

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
