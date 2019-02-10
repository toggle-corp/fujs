import { isNotDefined } from './core';

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

// previouly getKeyByValue
export function getFirstKeyByValue<T>(obj: T, value: unknown): string | undefined {
    return Object.keys(obj).find(key => obj[key] === value);
};

