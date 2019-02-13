import {
    compareBoolean,
    compareString,
    compareNumber,
    compareStringAsNumber,
    compareLength,
    compareStringByWordCount,
    compareDate,
} from './comparision';

test('compare boolean', () => {
    expect(compareBoolean(true, true)).toBe(0);
    expect(compareBoolean(false, false)).toBe(0);
    expect(compareBoolean(true, false)).toBe(1);
    expect(compareBoolean(false, true)).toBe(-1);
    expect(compareBoolean(false, undefined)).toBe(-1);
    expect(compareBoolean(true, undefined)).toBe(-1);
    expect(compareBoolean(undefined, undefined)).toBe(0);

    expect(compareBoolean(true, true, -1)).toBe(0);
    expect(compareBoolean(false, false, -1)).toBe(0);
    expect(compareBoolean(true, false, -1)).toBe(-1);
    expect(compareBoolean(false, true, -1)).toBe(1);
    expect(compareBoolean(false, undefined, -1)).toBe(1);
    expect(compareBoolean(true, undefined, -1)).toBe(1);
    expect(compareBoolean(undefined, undefined, -1)).toBe(0);
});

test('compare string', () => {
    expect(compareString('zoo', 'zoo')).toBe(0);
    expect(compareString('apple', 'zoo')).toBe(-1);
    expect(compareString('zoo', 'apple')).toBe(1);
    expect(compareString('zoo', undefined)).toBe(-1);
    expect(compareString(undefined, undefined)).toBe(0);
});

test('compare number', () => {
    expect(compareNumber(10, 10)).toBe(0);
    expect(compareNumber(0, 10)).toBeLessThan(0);
    expect(compareNumber(10, -1)).toBeGreaterThan(0);
    expect(compareNumber(10, undefined)).toBe(-1);
    expect(compareNumber(0, undefined)).toBe(-1);
    expect(compareNumber(undefined, undefined)).toBe(0);
});

test('compare string as number', () => {
    expect(compareStringAsNumber('10', '10')).toBe(0);
    expect(compareStringAsNumber('0', '10')).toBeLessThan(0);
    expect(compareStringAsNumber('10', '-1')).toBeGreaterThan(0);
    expect(compareStringAsNumber('10', undefined)).toBe(-1);
    expect(compareStringAsNumber('0', undefined)).toBe(-1);
    expect(compareStringAsNumber(undefined, undefined)).toBe(0);
});

test('compare length', () => {
    expect(compareLength('eight', 'eight')).toBe(0);
    expect(compareLength('one', 'eight')).toBeLessThan(0);
    expect(compareLength('eight', 'one')).toBeGreaterThan(0);
    expect(compareLength('one', undefined)).toBe(-1);
    expect(compareLength('', undefined)).toBe(-1);
    expect(compareLength(undefined, undefined)).toBe(0);
});

test('compare string by word count', () => {
    expect(compareStringByWordCount('', '')).toBe(0);
    expect(compareStringByWordCount('one eight', 'one eight')).toBe(0);
    expect(compareStringByWordCount('one', 'one eight')).toBeLessThan(0);
    expect(compareStringByWordCount('one eight', 'one')).toBeGreaterThan(0);
    expect(compareStringByWordCount('one', undefined)).toBe(-1);
    expect(compareStringByWordCount('', undefined)).toBe(-1);
    expect(compareStringByWordCount(undefined, undefined)).toBe(0);
});

test('compare string as number', () => {
    expect(compareStringAsNumber('10', '10')).toBe(0);
    expect(compareStringAsNumber('0', '10')).toBeLessThan(0);
    expect(compareStringAsNumber('10', '-1')).toBeGreaterThan(0);
    expect(compareStringAsNumber('10', undefined)).toBe(-1);
    expect(compareStringAsNumber('0', undefined)).toBe(-1);
    expect(compareStringAsNumber(undefined, undefined)).toBe(0);
});

test('compare date', () => {
    expect(compareDate(1550068244746, 1550068244746)).toBe(0);
    expect(compareDate(1150068244746, 1550068244746)).toBeLessThan(0);
    expect(compareDate(1550068244746, 1150068244746)).toBeGreaterThan(0);
    expect(compareDate(1550068244746, undefined)).toBe(-1);
    expect(compareDate(undefined, undefined)).toBe(0);
});
