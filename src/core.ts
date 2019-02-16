import { Maybe, Parameters } from './declarations';

export function noOp() {};

export function union<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    return new Set([ ...setA, ...setB ]);
}

export function intersection<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    return new Set([...setA].filter(x => setB.has(x)));
}

export function isNaN(val: unknown) {
    if (typeof val === 'number') {
        return Number.isNaN(val);
    }
    return false;
}

export function isNotDefined(val: unknown): val is undefined | null {
    return val === undefined || val === null || isNaN(val);
}

export function isDefined<T>(val: Maybe<T>): val is T {
    return !isNotDefined(val);
}

export function isFalsy(val: unknown, override: unknown[] = []): val is undefined | null {
    return isNotDefined(val) || val === false || override.includes(val)
}

export function isTruthy<T>(val: Maybe<T>, override: unknown[] = []): val is T {
    return !isFalsy(val) || override.includes(val);
};

export function isFalsyString(val: unknown): val is undefined | null {
    return isFalsy(val, ['']);
}
export function isTruthyString(val: Maybe<string | false>): val is string {
    return !isFalsyString(val);
}

export function resolve<T>(variable: T, ...args: Parameters<T>) {
    if (typeof variable === 'function') {
        return variable(...args);
    }
    return variable;
}
