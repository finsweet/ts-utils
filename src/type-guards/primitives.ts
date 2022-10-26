/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
export const isString = (value: unknown): value is string => typeof value === 'string';

export const isNumber = (value: unknown): value is number => typeof value === 'number';

export const isBigint = (value: unknown): value is bigint => typeof value === 'bigint';

export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';

export const isSymbol = (value: unknown): value is symbol => typeof value === 'symbol';

export const isUndefined = (value: unknown): value is undefined => value === undefined;

export const isNull = (value: unknown): value is null => value === null;

export const isFunction = (value: unknown): value is Function => typeof value === 'function';

export const isObject = (value: unknown): value is Record<any, any> => value !== null && typeof value === 'object';
