// import { Maybe, Parameters, ReturnType } from './declarations';
import { Maybe } from './declarations';

/**
 * Does nothing
 */
export function noOp() {}

/**
 * Get union of two sets.
 * @param setA
 * @param setB
 * @returns union of two sets
 */
export function union<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    return new Set([...setA, ...setB]);
}

/**
 * Get intersection of two sets.
 * @param setA
 * @param setB
 * @returns intersection of two sets
 */
export function intersection<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    return new Set([...setA].filter((x) => setB.has(x)));
}

/**
 * Get difference of two sets.
 * @param setA
 * @param setB
 * @returns difference between two sets
 */
export function difference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    return new Set([...setA].filter((x) => !setB.has(x)));
}

/**
 * Identifies if value is NaN.
 * @param val
 */
export function isNaN(val: unknown) {
    if (typeof val === 'number') {
        return Number.isNaN(val);
    }
    return false;
}

/**
 * Identifies if value is not defined.
 * undefined, null and NaN are not considered as defined.
 * @param val
 */
export function isNotDefined(val: unknown): val is undefined | null {
    return val === undefined || val === null || isNaN(val);
}

/**
 * Identifies if value is defined.
 * @param val
 */
export function isDefined<T>(val: Maybe<T>): val is T {
    return !isNotDefined(val);
}

/**
 * Identifies if value is falsy.
 * undefined, null, NaN and false are considered as false value.
 * @param val
 * @param override list of additional values that are considered false values
 */
export function isFalsy(val: unknown, override: unknown[] = []): val is undefined | null {
    return isNotDefined(val) || val === false || override.includes(val);
}

/**
 * Identifies if value is truthy.
 * @param val
 * @param override list of additional values that are considered true values
 */
export function isTruthy<T>(val: Maybe<T>, override: unknown[] = []): val is T {
    return !isFalsy(val) || override.includes(val);
}

/**
 * Identifies if value is falsy string.
 * undefined, null, NaN, false, '' are considered as false value.
 * @param val
 */
export function isFalsyString(val: unknown): val is undefined | null {
    return isFalsy(val, ['']);
}

/**
 * Identifies if value is truthy string.
 * @param val
 */
export function isTruthyString(val: Maybe<string | false>): val is string {
    return !isFalsyString(val);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn<A extends any[], R> = (...args: A) => R;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isFn<A extends any[], R, X>(value: Fn<A, R> | X): value is Fn<A, R> {
    return typeof value === 'function';
}

/**
 * Resolves if first argument is function with other arguments as argument to
 * user supplied function.
 * @param variable either a function to resolive or any value
 * @param args arguments for user supplied function
 * @returns value resolved from user supplied function
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, max-len
export function resolve<A extends any[], R>(variable: Fn<A, R>, ...args: Parameters<Fn<A, R>>): ReturnType<Fn<A, R>>;
export function resolve<T>(variable: T): T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any, max-len
export function resolve<A extends any[], R, T>(variable: Fn<A, R> | T, ...args: Parameters<Fn<A, R>>) {
    if (isFn(variable)) {
        const value = variable(...args);
        return value;
    }
    return variable;
}
