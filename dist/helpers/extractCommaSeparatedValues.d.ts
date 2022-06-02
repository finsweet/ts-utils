/**
 * Convert a string of comma separated values to an array of values.
 *
 * @param string Comma separated string.
 * @param compareSource Acts as a type guard for making sure the extracted values match the compared source.
 * @param defaultValue Is set when there is no matching results after comparing with the source.
 * @param filterEmpty Defines if empty values should be filtered out of the returned array. Defaults to `true`.
 */
export declare function extractCommaSeparatedValues(string: string | null | undefined, compareSource?: undefined, defaultValue?: undefined, filterEmpty?: boolean): string[];
export declare function extractCommaSeparatedValues<SourceKey extends string, DefaultKey extends SourceKey>(string: string | null | undefined, compareSource: readonly SourceKey[], defaultValue?: DefaultKey | undefined, filterEmpty?: boolean): SourceKey[];
