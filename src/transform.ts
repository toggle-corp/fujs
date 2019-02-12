import { isNotDefined } from './core';
import { Obj, Maybe } from './declarations';

interface Modifier<T, Q>{
    (element: T, key: string | number, index: number, acc: Obj<Q>): Q;
}
interface ListModifier<T, Q>{
    (element: T, key: string | number, index: number, acc: Q[]): Q;
}
interface KeySelector<T>{
    (element: T): string | number;
}

interface NewKeySelector<T>{
    (key: string, element: T): string | number;
}

export function listToMap<T>(list: Maybe<T[]>, keySelector: KeySelector<T>): Obj<T>;
export function listToMap<T, Q>(list: Maybe<T[]>, keySelector: KeySelector<T>, modifier: Modifier<T, Q>): Obj<Q>;
export function listToMap<T, Q>(list: Maybe<T[]>, keySelector: KeySelector<T>, modifier?: Modifier<T, Q>) {
    if (isNotDefined(list)) {
        return {};
    }
    return list.reduce(
        (acc, elem, i) => {
            const key = keySelector(elem);
            acc[key] = modifier
                ? modifier(elem, key, i, acc)
                : elem;
            return acc;
        },
        {},
    );
}

export function mapToList<T>(obj: Maybe<Obj<T>>): T[];
export function mapToList<T, Q>(obj: Maybe<Obj<T>>, modifier: ListModifier<T, Q>): Q[];
export function mapToList<T, Q>(obj: Maybe<Obj<T>>, modifier?: ListModifier<T, Q>) {
    if (isNotDefined(obj)) {
        return {};
    }
    return Object.keys(obj).reduce(
        (acc, key, i) => {
            const elem = obj[key];
            acc.push(modifier ? modifier(elem, key, i, acc as Q[]) : elem);
            return acc;
        },
        [] as (Q|T)[],
    );
};

export function mapToMap<T>(obj: Obj<T>, keySelector?: NewKeySelector<T>): Obj<T>;
export function mapToMap<T, Q>(obj: Obj<T>, keySelector: NewKeySelector<T> | undefined, modifier: Modifier<T, Q>): Obj<Q>;
export function mapToMap<T, Q>(obj: Obj<T>, keySelector?: NewKeySelector<T>, modifier?: Modifier<T, Q>) {
    return Object.keys(obj).reduce(
        (acc, k, i) => {
            const elem = obj[k];
            const key = keySelector ? keySelector(k, elem) : k;
            acc[key] = modifier ? modifier(elem, key, i, acc) : elem;
            return acc;
        },
        {},
    )
};

export function listToGroupList<T>(list: Maybe<T[]>, keySelector: KeySelector<T>): Obj<T>;
export function listToGroupList<T, Q>(list: Maybe<T[]>, keySelector: KeySelector<T>, modifier: Modifier<T, Q>): Obj<Q>;
export function listToGroupList<T, Q>(list: Maybe<T[]>, keySelector: KeySelector<T>, modifier?: Modifier<T, Q>) {
    if (isNotDefined(list)) {
        return {};
    }
    return list.reduce(
        (acc, elem, i) => {
            const key = keySelector(elem);
            const value = modifier
                ? modifier(elem, key, i, acc)
                : elem;
            if (acc[key]) {
                acc[key].push(value);
            } else {
                acc[key] = [value];
            }
            return acc;
        },
        {},
    );
}
