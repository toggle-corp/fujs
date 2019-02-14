import {
    getNumbers,
    bound,
    normalize,
    mean,
    median,
    sum,
    bucket,
    modulo,
} from './statistics';

test('get modulo', () => {
    expect(modulo(0, 10)).toEqual(0);
    expect(modulo(1, 1)).toEqual(0);
    expect(modulo(2, 10)).toEqual(2);
    expect(modulo(10, 10)).toEqual(0);
    expect(modulo(-1, 10)).toEqual(9);
    expect(modulo(-2, 10)).toEqual(8);
    expect(modulo(-10, 10)).toEqual(0);
    expect(modulo(-11, 10)).toEqual(9);
});

test('get bucket', () => {
    expect(bucket(-200, [[-1, 10, 'hari'], [10, 100, 'shyam']])).toEqual(undefined);
    expect(bucket(12, [[-1, 10, 'hari'], [10, 100, 'shyam']])).toEqual('shyam');
    expect(bucket(10, [[-1, 10, 'hari'], [10, 100, 'shyam']])).toEqual('shyam');
    expect(bucket(-1, [[-1, 10, 'hari'], [10, 100, 'shyam']])).toEqual('hari');
    expect(bucket(200, [[-1, 10, 'hari'], [10, 100, 'shyam']])).toEqual(undefined);
});

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

test('sum', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
    expect(sum([1, -2, -3, 4])).toBe(0);
    expect(sum([1])).toBeCloseTo(1);
    expect(sum([])).toBeCloseTo(0);
});

test('mean', () => {
    expect(mean([1, 2, 3, 4])).toBeCloseTo(2.5);
    expect(mean([1, -2, -3, 4])).toBeCloseTo(0);
    expect(mean([1])).toBeCloseTo(1);
    expect(mean([])).toBeCloseTo(0);
});

test('median', () => {
    expect(median([1, 2, 3, 4])).toBeCloseTo(2.5);
    expect(median([1, 2, 3, 4, 5])).toBe(3);
    expect(median([1, -2, -3, 4, 0])).toBe(0);
    expect(median([1])).toBe(1);
    expect(median([])).toBe(undefined);
});
