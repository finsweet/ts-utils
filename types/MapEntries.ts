/**
 * Converts a `Map<K, V>` type to its equivalent when performing `[...map.entries()]`.
 * @example ```typescript
 * const map: MapType = new Map(['key', 'value']);
 * const entries = [...map.entries()]; // Same type as MapEntries<MapType>
 *
 * typeof entries === MapEntries<MapType>
 * ```
 */
export type MapEntries<MapToConvert> = MapToConvert extends Map<infer Key, infer Value> ? [Key, Value][] : never;
