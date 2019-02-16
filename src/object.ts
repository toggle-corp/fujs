import { isNotDefined } from './core';
import { isList, isObject } from './type';

export const pick = <T extends object>(obj: T, keys: (keyof T)[]) => keys.reduce(
    (acc, key) => ({ ...acc, [key]: obj[key] }),
    {},
);

export function removeKey<T extends object>(obj: T, key: keyof T) {
    if (isNotDefined(obj) || !(key in obj)) {
        return obj;
    }

    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
};

export function getFirstKeyByValue<T>(obj: T, value: unknown): string | undefined {
    return Object.keys(obj).find(key => obj[key] === value);
};

export function doesObjectHaveNoData(obj: unknown): boolean {
    // NOTE: null and NaN are truthy values here
    if (obj === undefined) {
        return true;
    }

    if (isList(obj)) {
        if (obj.length <= 0) {
            return true;
        }
        return obj.every(doesObjectHaveNoData);
    }

    if (isObject(obj)) {
        if (Object.keys(obj).length <= 0) {
            return true;
        }
        return Object.keys(obj).every(
            key => doesObjectHaveNoData(obj[key])
        );
    }

    return false;
};
