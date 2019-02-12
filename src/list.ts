import { Maybe } from './declarations';
import { isNotDefined, isDefined } from './core';
import { listToMap } from './transform';

// NOTE: doesn't assume mutation of individual item
export function isListEqual(array1: unknown[], array2: unknown[]) {
    return (
        array1.length === array2.length &&
        array1.every((d, i) => d === array2[i])
    );
};

// get random item from the list
// ex: getRandomFromList([1, 2, 3, 4]);
export function getRandomFromList(items: unknown[]) {
    return items[Math.floor(Math.random() * items.length)];
};

export function getElementAround<T>(list: T[], currentIndex: number): T | undefined {
    if (currentIndex + 1 < list.length) {
        return list[currentIndex + 1];
    } else if (currentIndex - 1 >= 0) {
        return list[currentIndex - 1];
    }
    return undefined;
};

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
    } else if (i < 0 && j < list.length) {
        // console.warn('none on left');
        return list[j];
    } else if (j >= list.length && i >= 0) {
        // console.warn('none on right');
        return list[i];
    }

    const iDist = currentIndex - i;
    const jDist = j - currentIndex;

    if (jDist > iDist) {
        return list[i];
    }
    return list[j];
};

interface KeySelector<T>{
    (element: T): string | number;
}

// NOTE: extensive test required
export function getDuplicates<T>(list: Maybe<T[]>, keySelector: KeySelector<T>): string[] {
    const counts = listToMap<T, number>(
        list,
        keySelector,
        (_, key, __, acc) => (
            isDefined(acc[key]) ? acc[key] + 1 : 1
        )
    );
    return Object.keys(counts).filter(key => counts[key] > 1);
}

export function findDifferenceInList<T>(listA: T[], listB: T[], keySelector: KeySelector<T>) {
    const modified: {old: T, new: T}[] = [];
    const added: T[] = [];
    const removed: T[] = [];
    const unmodified: T[] = [];

    const mapA = listToMap(listA, keySelector, e => e);
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

    const mapB = listToMap(listB, keySelector, e => e);
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
};
