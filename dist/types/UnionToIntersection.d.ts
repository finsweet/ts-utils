export declare type UnionToIntersection<Union> = (Union extends unknown ? (k: Union) => void : never) extends (k: infer Intersection) => void ? Intersection : never;
