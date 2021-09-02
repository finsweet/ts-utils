/**
 * The picked keys will become Required and the rest of the interface will become Partial.
 */
export type PartialExcept<Original, Keys extends keyof Original> = Partial<Omit<Original, Keys>> &
  Required<Pick<Original, Keys>>;
