/**
 * The picked keys will become Partial and the rest of the interface will stay the same.
 */
type PickPartial<Object, Keys extends keyof Object> = Omit<Object, Keys> & Partial<Pick<Object, Keys>>;

export default PickPartial;
