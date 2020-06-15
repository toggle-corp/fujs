import { Maybe } from './declarations';
import { isNotDefined, isDefined } from './core';
import { listToMap } from './transform';

/**
 * Identify if two list are the same
 *
 * @param list1
 * @param list2
 *
 * @remarks
 * The function assumes that the elements aren't mutated
 */
export function isListEqual(list1: unknown[], list2: unknown[]) {
    return (
        list1.length === list2.length
        && list1.every((d, i) => d === list2[i])
    );
}

/**
 * Get a random item from the list
 *
 * @param items
 */
export function getRandomFromList<T>(items: T[]) {
    return items[Math.floor(Math.random() * items.length)];
}

/**
 * Get an element around certain index in a list
 *
 * @param list
 * @param index
 */
export function getElementAround<T>(list: T[], index: number): T | undefined {
    if (index + 1 < list.length) {
        return list[index + 1];
    }
    if (index - 1 >= 0) {
        return list[index - 1];
    }
    return undefined;
}

/**
 * Get a defined element around certain index in a list
 *
 * @param list
 * @param index
 */
export function getDefinedElementAround<T>(list: Maybe<T>[], currentIndex: number) {
    let i;
    let j;
    for (i = currentIndex - 1; i >= 0; i -= 1) {
        if (list[i] !== undefined) {
            break;
        }
    }
    for (j = currentIndex + 1; j < list.length; j += 1) {
        if (list[j] !== undefined) {
            break;
        }
    }

    if (i < 0 && j >= list.length) {
        // console.warn('none');
        return undefined;
    }
    if (i < 0 && j < list.length) {
        // console.warn('none on left');
        return list[j];
    }
    if (j >= list.length && i >= 0) {
        // console.warn('none on right');
        return list[i];
    }

    const iDist = currentIndex - i;
    const jDist = j - currentIndex;

    if (jDist > iDist) {
        return list[i];
    }
    return list[j];
}

interface KeySelector<T>{
    (element: T): string | number;
}

/**
 * Get a duplicate count for each element in a list
 *
 * @param list
 * @param keySelector get key from an element
 *
 * @returns map of element key and duplicate count
 *
 * @remarks
 * The map only includes element for which there is a duplicate
 */
export function getDuplicates<T>(list: Maybe<T[]>, keySelector: KeySelector<T>): string[] {
    const counts = listToMap<T, number>(
        list,
        keySelector,
        (_, key, __, acc) => (
            isDefined(acc[key]) ? acc[key] + 1 : 1
        ),
    );
    return Object.keys(counts).filter((key) => counts[key] > 1);
}

/**
 * Find difference between two list
 *
 * @param listA
 * @param listB
 * @param keySelector get key from an element
 *
 * @returns list of added, modified, removed and unmodified elements
 */
export function findDifferenceInList<T>(listA: T[], listB: T[], keySelector: KeySelector<T>) {
    const modified: {old: T; new: T}[] = [];
    const added: T[] = [];
    const removed: T[] = [];
    const unmodified: T[] = [];

    const mapA = listToMap(listA, keySelector, (e) => e);
    listB.forEach((elem) => {
        const key = keySelector(elem);
        if (isNotDefined(mapA[key])) {
            added.push(elem);
        } else if (mapA[key] !== elem) {
            modified.push({ old: mapA[key], new: elem });
        } else {
            unmodified.push(elem);
        }
    });

    const mapB = listToMap(listB, keySelector, (e) => e);
    listA.forEach((elem) => {
        const key = keySelector(elem);
        if (isNotDefined(mapB[key])) {
            removed.push(elem);
        }
    });

    return {
        added,
        modified,
        removed,
        unmodified,
    };
}

/**
 * Find unique items from a list
 *
 * @param list
 * @param getItemHash method to get id to check uniqueness
 *
 * @remarks
 * If getItemHash is not supplied, comparision is done by casting items in list
 * to string
 */
export function unique<T>(list: undefined, getItemHash?: ((item: T) => string | number)): undefined;
export function unique<T>(list: null, getItemHash?: ((item: T) => string | number)): undefined;
export function unique<T>(list: T[], getItemHash?: ((item: T) => string | number)): T[];
export function unique<T>(list: Maybe<T[]>, getItemHash?: ((item: T) => string | number)) {
    if (isNotDefined(list)) {
        return undefined;
    }

    interface Memory {
        [key: string]: boolean;
        [key: number]: boolean;
    }

    const memory: Memory = {};

    const arrWithUnique: T[] = [];
    list.forEach((item) => {
        const hash = getItemHash
            ? getItemHash(item)
            : JSON.stringify(item);

        if (!memory[hash]) {
            memory[hash] = true;
            arrWithUnique.push(item);
        }
    });
    // NOTE: just return original array if all elements were unique
    if (list.length === arrWithUnique.length) {
        return list;
    }
    return arrWithUnique;
}
