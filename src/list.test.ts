import { getRandomFromList, getElementAround, getDefinedElementAround } from './list';

test('random is from list', () => {
    const listing = [1, 2, 'hari', 'shyam'];
    expect(listing).toContain(getRandomFromList(listing));
    expect(listing).toContain(getRandomFromList(listing));
    expect(listing).toContain(getRandomFromList(listing));
    expect(listing).toContain(getRandomFromList(listing));
});

test('get element around', () => {
    expect(getElementAround([1, 2, 4, 3], 0)).toBe(2);
    expect(getElementAround([1, 2, 4, 3], 3)).toBe(4);
    expect(getElementAround([1, 2, 4, 3], 1)).toBe(4);
});

test('get defined element around', () => {
    expect(getDefinedElementAround([undefined, undefined, 1, undefined], 2)).toBe(undefined);
    expect(getDefinedElementAround([undefined, 0, 1, undefined], 2)).toBe(0);
    expect(getDefinedElementAround([0, undefined, 1, undefined], 2)).toBe(0);
    expect(getDefinedElementAround([0, undefined, 1, undefined, 3], 2)).toBe(3);
    expect(getDefinedElementAround([0, undefined, 1, undefined, undefined, 3], 2)).toBe(0);
    expect(getDefinedElementAround([undefined, undefined, 1, 0], 2)).toBe(0);
});
