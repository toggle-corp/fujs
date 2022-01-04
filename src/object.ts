import { isNotDefined } from './core';
import { isList, isObject } from './type';

/**
 * Pick only certain keys from an object
 * @param obj
 * @param keys
 */
export const pick = <T extends object>(obj: T, keys: (keyof T)[]) => keys.reduce(
    (acc, key) => ({ ...acc, [key]: obj[key] }),
    {},
);

/**
 * Remove a certain key from an object
 * @param obj
 * @param key
 */
export function removeKey<T extends object>(obj: T, key: keyof T) {
    if (isNotDefined(obj) || !(key in obj)) {
        return obj;
    }

    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}

/**
 * Get key of the first element in an object
 * @param obj
 * @param value
 */
export function getFirstKeyByValue<T>(obj: T, value: unknown): string | undefined {
    return Object.keys(obj).find((key) => obj[key as keyof T] === value);
}

/**
 * Identify if object has no data
 * @param obj
 * @param invalids list of values that aren't considered as data
 */
export function doesObjectHaveNoData(obj: unknown, invalids: unknown[] = []): boolean {
    // NOTE: null and NaN are truthy values here
    if (obj === undefined) {
        return true;
    }

    if (isList(obj)) {
        if (obj.length <= 0) {
            return true;
        }
        return obj.every((e) => doesObjectHaveNoData(e, invalids));
    }

    if (isObject(obj)) {
        if (Object.keys(obj).length <= 0) {
            return true;
        }
        return Object.keys(obj).every(
            (key) => doesObjectHaveNoData(obj[key as keyof object], invalids),
        );
    }

    return invalids.includes(obj);
}
