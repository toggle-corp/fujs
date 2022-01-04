import {
    isFalsy,
    isTruthy,
    intersection,
    difference,
    union,
    resolve,
} from './core';

test('isFalsy', () => {
    expect(isFalsy(NaN)).toBe(true);
    expect(isFalsy(undefined)).toBe(true);
    expect(isFalsy(null)).toBe(true);
    expect(isFalsy(false)).toBe(true);
    expect(isFalsy('')).toBe(false);
    expect(isFalsy([])).toBe(false);
    expect(isFalsy(0)).toBe(false);
});

test('isTruthy', () => {
    expect(isTruthy(NaN)).toBe(false);
    expect(isTruthy(undefined)).toBe(false);
    expect(isTruthy(null)).toBe(false);
    expect(isTruthy(false)).toBe(false);
    expect(isTruthy('')).toBe(true);
    expect(isTruthy([])).toBe(true);
    expect(isTruthy(0)).toBe(true);
});

test('should union the sets', () => {
    const empty = new Set();
    const seta = new Set([1, 2, 3, 4]);
    const setb = new Set([3, 4, 5, 2]);
    const unioned = new Set([1, 2, 3, 4, 5]);
    const setc = new Set(['a', 'b', 'c']);

    // Commutativity
    expect(union(seta, setb)).toEqual(union(setb, seta));

    expect(union(seta, setb)).toEqual(unioned);

    expect(union(empty, empty)).toEqual(empty);
    expect(union(setc, empty)).toEqual(setc);
    expect(union(setc, empty)).toEqual(setc);
    expect(union(seta, setb)).toEqual(unioned);
});

test('should intersect the sets', () => {
    const empty = new Set();
    const seta = new Set([1, 2, 3, 4]);
    const setb = new Set([3, 4, 5, 2]);
    const intersected = new Set([2, 3, 4]);

    expect(intersection(empty, empty)).toEqual(empty);
    expect(intersection(seta, empty)).toEqual(empty);
    expect(intersection(seta, setb)).toEqual(intersected);
});

test('should difference the sets', () => {
    const empty = new Set();
    const seta = new Set([1, 2, 3, 4]);
    const setb = new Set([3, 4, 5, 2]);
    const differenced = new Set([1]);

    expect(difference(empty, empty)).toEqual(empty);
    expect(difference(seta, empty)).toEqual(seta);
    expect(difference(seta, setb)).toEqual(differenced);
});

test('resolve', () => {
    expect(resolve((a: number, b: number) => a + b, 1, 2)).toBe(3);
    expect(resolve(1)).toBe(1);
    expect(resolve(false)).toBe(false);
    expect(resolve(undefined)).toBe(undefined);
    expect(resolve(0)).toBe(0);
    expect(resolve('hari')).toBe('hari');
});
