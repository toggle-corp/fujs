import {
    isFalsy,
    intersection,
    union,
    doesObjectHaveNoData,
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

test('check if object has no data', () => {
    expect(doesObjectHaveNoData(undefined)).toBe(true);
    expect(doesObjectHaveNoData({})).toBe(true);
    expect(doesObjectHaveNoData([])).toBe(true);
    expect(doesObjectHaveNoData([undefined, undefined])).toBe(true);
    expect(doesObjectHaveNoData([{}, {}])).toBe(true);
    expect(doesObjectHaveNoData({ hari: undefined })).toBe(true);
    expect(doesObjectHaveNoData({ hari: { shyam: undefined } })).toBe(true);
    expect(doesObjectHaveNoData({ hari: { shyam: undefined, hari: [] } })).toBe(true);
    expect(doesObjectHaveNoData({ hari: { shyam: undefined, hari: [{}, {}] } })).toBe(true);

    expect(doesObjectHaveNoData(NaN)).toBe(false);
    expect(doesObjectHaveNoData(null)).toBe(false);
    expect(doesObjectHaveNoData(1)).toBe(false);
    expect(doesObjectHaveNoData('')).toBe(false);
    expect(doesObjectHaveNoData('hari')).toBe(false);
    expect(doesObjectHaveNoData(false)).toBe(false);
    expect(doesObjectHaveNoData(true)).toBe(false);

    expect(doesObjectHaveNoData([true, undefined])).toBe(false);
    expect(doesObjectHaveNoData([{}, {}, false])).toBe(false);
    expect(doesObjectHaveNoData({ hari: '', shyam: undefined })).toBe(false);
    expect(doesObjectHaveNoData({ hari: { shyam: 1 } })).toBe(false);
    expect(doesObjectHaveNoData({ hari: { shyam: undefined, hari: [1, 2] } })).toBe(false);
    expect(doesObjectHaveNoData({ hari: { shyam: undefined, hari: [{}, { value: 0 }] } })).toBe(false);
});

