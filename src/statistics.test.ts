import { getNumbers, bound, normalize } from './statistics';

test('get list of numbers', () => {
    expect(getNumbers(0, 4)).toEqual([0, 1, 2, 3]);
    expect(getNumbers(-2, 4)).toEqual([-2, -1, 0, 1, 2, 3]);
    expect(getNumbers(0, 1)).toEqual([0]);
    expect(getNumbers(0, 0)).toEqual([]);
    expect(getNumbers(0, -1)).toEqual([]);
});

test('bound', () => {
    expect(bound(12, 8, 1)).toBe(8);
    expect(bound(12, 1, 1)).toBe(1);
    expect(bound(12, 20, 0)).toBe(12);
    expect(bound(-12, 10, -10)).toBe(-10);
});

test('normalize', () => {
    expect(normalize(0.5, 1, 0)).toBeCloseTo(0.5);
    expect(normalize(-1, -2, 0)).toBeCloseTo(0.5);
    expect(normalize(12, 20, 10)).toBeCloseTo(0.2);
});

