import { isInteger } from './type';

test('isInteger', () => {
    expect(isInteger(12)).toBe(true);
    expect(isInteger(-12)).toBe(true);
    expect(isInteger(0)).toBe(true);
    expect(isInteger(0.00)).toBe(true);
    expect(isInteger(-1.12)).toBe(false);
    expect(isInteger(12.012)).toBe(false);
    expect(isInteger('12')).toBe(false);
    expect(isInteger('23.12')).toBe(false);
    expect(isInteger({})).toBe(false);
    expect(isInteger(undefined)).toBe(false);
    expect(isInteger(null)).toBe(false);
    expect(isInteger(NaN)).toBe(false);
    expect(isInteger([])).toBe(false);
});
