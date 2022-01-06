/**
 * Converts a union like `Interface1 | Interface2` to an intersection `Interface1 & Interface2`.
 */
export type UnionToIntersection<Union> = (Union extends unknown ? (k: Union) => void : never) extends (
  k: infer Intersection
) => void
  ? Intersection
  : never;
