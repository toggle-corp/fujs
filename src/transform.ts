import { isNotDefined } from './core';
import { Obj, Maybe } from './declarations';

export type OptionKey = string | number;

interface Modifier<T, Q, K extends OptionKey>{
    (element: T, key: K, index: number, acc: Partial<Record<K, Q>>): Q;
}
interface ListModifier<T, Q, K extends OptionKey>{
    (element: T, key: K, index: number, acc: Q[]): Q;
}
interface GroupListModifier<T, Q, K extends OptionKey>{
    (element: T, key: K, index: number, acc: Partial<Record<K, Q[]>>): Q;
}
export interface KeySelector<T, K extends OptionKey>{
    (element: T, index: number): K;
}

interface NewKeySelector<T, K extends OptionKey>{
    (key: string, element: T): K;
}

/**
 * Transform list to object
 * @param list
 * @param keySelector get key from item in list
 * @param modifier get new value from item in list
 */
export function listToMap<T, K extends OptionKey>(
    list: T[],
    keySelector: KeySelector<T, K>,
): Record<K, T>;
export function listToMap<T, K extends OptionKey>(
    list: Maybe<T[]>,
    keySelector: KeySelector<T, K>,
): Record<K, T> | undefined;
export function listToMap<T, Q, K extends OptionKey>(
    list: T[],
    keySelector: KeySelector<T, K>,
    modifier: Modifier<T, Q, K>
): Record<K, Q>;
export function listToMap<T, Q, K extends OptionKey>(
    list: Maybe<T[]>,
    keySelector: KeySelector<T, K>,
    modifier: Modifier<T, Q, K>
): Record<K, Q> | undefined;

export function listToMap<T, Q, K extends OptionKey>(
    list: Maybe<T[]>,
    keySelector: KeySelector<T, K>,
    modifier?: Modifier<T, Q, K>,
) {
    if (isNotDefined(list)) {
        return undefined;
    }
    const value = list.reduce(
        (acc, elem, i) => {
            const key = keySelector(elem, i);
            acc[key] = modifier
                ? modifier(elem, key, i, acc as Partial<Record<K, Q>>)
                : elem;
            return acc;
        },
        {} as Partial<Record<K, T | Q>>,
    );
    return value;
}

/**
 * Transform object to list
 * @param obj
 * @param modifier get new value from item in object
 */
export function mapToList<T>(
    obj: Obj<T>
): T[];
export function mapToList<T>(
    obj: Maybe<Obj<T>>
): T[] | undefined;
export function mapToList<T, Q>(
    obj: Obj<T>,
    modifier: ListModifier<T, Q, string>,
): Q[];
export function mapToList<T, Q>(
    obj: Maybe<Obj<T>>,
    modifier: ListModifier<T, Q, string>,
): Q[] | undefined;
export function mapToList<T, Q>(
    obj: Maybe<Obj<T>>,
    modifier?: ListModifier<T, Q, string>,
) {
    if (isNotDefined(obj)) {
        return undefined;
    }
    return Object.keys(obj).reduce(
        (acc, key, i) => {
            const elem = obj[key];
            acc.push(modifier ? modifier(elem, key, i, acc as Q[]) : elem);
            return acc;
        },
        [] as (Q|T)[],
    );
}

/**
 * Transform object to object
 * @param obj
 * @param keySelector get new key for item in object
 * @param modifier get new value for item in object
 */
export function mapToMap<T, K extends OptionKey>(
    obj: Obj<T>,
    keySelector?: NewKeySelector<T, K>,
): Record<K, T>;
export function mapToMap<T, K extends OptionKey>(
    obj: Maybe<Obj<T>>,
    keySelector?: NewKeySelector<T, K>,
): Record<K, T> | undefined;
export function mapToMap<T, Q, K extends OptionKey>(
    obj: Obj<T>,
    keySelector: NewKeySelector<T, K> | undefined,
    modifier: Modifier<T, Q, string>,
): Record<K, Q>;
export function mapToMap<T, Q, K extends OptionKey>(
    obj: Maybe<Obj<T>>,
    keySelector: NewKeySelector<T, K> | undefined,
    modifier: Modifier<T, Q, string>,
): Record<K, Q> | undefined;
export function mapToMap<T, Q, K extends OptionKey>(
    obj: Maybe<Obj<T>>,
    keySelector?: NewKeySelector<T, K>,
    modifier?: Modifier<T, Q, string>,
) {
    if (isNotDefined(obj)) {
        return undefined;
    }
    const value = Object.keys(obj).reduce(
        (acc, k, i) => {
            const elem = obj[k];
            const key = keySelector ? keySelector(k, elem) : (k as K);
            acc[key] = modifier
                ? modifier(elem, k, i, acc as Partial<Record<K, Q>>)
                : elem;
            return acc;
        },
        {} as Partial<Record<K, T | Q>>,
    );
    return value;
}

/**
 * Group list into object of list.
 * Items in list are grouped by key returned by keySelector
 * @param list
 * @param keySelector get key for item in list
 * @param modifier get new value for item in list
 */
export function listToGroupList<T, K extends OptionKey>(
    list: T[],
    keySelector: KeySelector<T, K>,
): Obj<T[]>;
export function listToGroupList<T, K extends OptionKey>(
    list: Maybe<T[]>,
    keySelector: KeySelector<T, K>,
): Obj<T[]> | undefined;
export function listToGroupList<T, Q, K extends OptionKey>(
    list: T[],
    keySelector: KeySelector<T, K>,
    modifier: GroupListModifier<T, Q, K>,
): Obj<Q[]>;
export function listToGroupList<T, Q, K extends OptionKey>(
    list: Maybe<T[]>,
    keySelector: KeySelector<T, K>,
    modifier: GroupListModifier<T, Q, K>,
): Obj<Q[]> | undefined;
export function listToGroupList<T, Q, K extends OptionKey>(
    list: Maybe<T[]>,
    keySelector: KeySelector<T, K>,
    modifier?: GroupListModifier<T, Q, K>,
) {
    if (isNotDefined(list)) {
        return undefined;
    }
    const val = list.reduce(
        (acc, elem, i) => {
            const key = keySelector(elem, i);
            const value = modifier
                ? modifier(elem, key, i, acc as Partial<Record<K, Q[]>>)
                : elem;

            const group = acc[key];
            if (group) {
                group.push(value);
            } else {
                acc[key] = [value];
            }
            return acc;
        },
        {} as Partial<Record<K, (T|Q)[]>>,
    );
    return val;
}
