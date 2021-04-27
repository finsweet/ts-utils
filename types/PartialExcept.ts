/**
 * The picked keys will become Required and the rest of the interface will become Partial.
 */
type PartialExcept<Object, Keys extends keyof Object> = Partial<Omit<Object, Keys>> & Required<Pick<Object, Keys>>;

export default PartialExcept;
