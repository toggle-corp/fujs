import {
    isInteger,
    isObject,
    isList,
} from './type';

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

test('isObject', () => {
    expect(isObject([])).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(NaN)).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject('hari')).toBe(false);

    expect(isObject({})).toBe(true);
    expect(isObject({ name: undefined })).toBe(true);
    expect(isObject({ name: 'hari' })).toBe(true);
});

test('isList', () => {
    expect(isList([])).toBe(true);
    expect(isList([undefined])).toBe(true);
    expect(isList(['name', 'age'])).toBe(true);
    expect(isList([{ name: 'hari' }])).toBe(true);

    expect(isList(null)).toBe(false);
    expect(isList(undefined)).toBe(false);
    expect(isList(NaN)).toBe(false);
    expect(isList(1)).toBe(false);
    expect(isList('hari')).toBe(false);
    expect(isList({})).toBe(false);
    expect(isList({ name: undefined })).toBe(false);
    expect(isList({ name: 'hari' })).toBe(false);
});
