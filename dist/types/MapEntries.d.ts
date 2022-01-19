export declare type MapEntries<MapToConvert> = MapToConvert extends Map<infer Key, infer Value> ? [Key, Value][] : never;
