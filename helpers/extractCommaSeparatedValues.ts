import isKeyOf from '../type-guards/isKeyOf';

/**
 * Convert a string of comma separated values to an array of values
 * @param string Comma separated string
 * @param compareSource Acts as a type guard for making sure the extracted values match the compared source
 * @param defaultValue Is set when there is no matching results after comparing with the source
 */
function extractCommaSeparatedValues(string: string | null | undefined): string[];
function extractCommaSeparatedValues<T extends string>(
  string: string | null | undefined,
  compareSource: readonly T[],
  defaultValue?: T
): T[];
function extractCommaSeparatedValues<T extends string>(
  string: string | null | undefined,
  compareSource?: readonly T[],
  defaultValue?: T
): string[] | T[] {
  const emptyValue = defaultValue ? [defaultValue] : [];
  if (!string) return emptyValue;
  const items = string.split(/[ ,]+/);

  if (compareSource) {
    const matches = items.filter((item) => isKeyOf(item, compareSource)) as T[];
    return matches.length ? matches : emptyValue;
  }

  return items;
}

export default extractCommaSeparatedValues;
