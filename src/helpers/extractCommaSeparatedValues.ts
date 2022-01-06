import { isKeyOf } from '../type-guards/isKeyOf';

/**
 * Convert a string of comma separated values to an array of values.
 *
 * @param string Comma separated string.
 * @param compareSource Acts as a type guard for making sure the extracted values match the compared source.
 * @param defaultValue Is set when there is no matching results after comparing with the source.
 * @param filterEmpty Defines if empty values should be filtered out of the returned array. Defaults to `true`.
 */
export function extractCommaSeparatedValues(
  string: string | null | undefined,
  compareSource?: undefined,
  defaultValue?: undefined,
  filterEmpty?: boolean
): string[];
export function extractCommaSeparatedValues<SourceKey extends string, DefaultKey extends SourceKey>(
  string: string | null | undefined,
  compareSource: readonly SourceKey[],
  defaultValue?: DefaultKey | undefined,
  filterEmpty?: boolean
): SourceKey[];
export function extractCommaSeparatedValues<SourceKey extends string, DefaultKey extends SourceKey>(
  string: string | null | undefined,
  compareSource?: readonly SourceKey[] | undefined,
  defaultValue?: DefaultKey | undefined,
  filterEmpty = true
): string[] | SourceKey[] {
  const emptyValue = defaultValue ? [defaultValue] : [];
  if (!string) return emptyValue;

  const items = string.split(',').reduce<string[]>((accumulatedValue, currentValue) => {
    const value = currentValue.trim();

    if (!filterEmpty || value) accumulatedValue.push(value);

    return accumulatedValue;
  }, []);

  if (compareSource) {
    const matches = items.filter((item) => isKeyOf(item, compareSource)) as SourceKey[];
    return matches.length ? matches : emptyValue;
  }

  return items;
}
