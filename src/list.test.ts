import {
    getRandomFromList,
    getElementAround,
    getDefinedElementAround,
    isListEqual,
    getDuplicates,
    findDifferenceInList,
    unique,
} from './list';

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
    expect(getElementAround([1, 2, 4, 3], 10)).toBe(undefined);
});

test('get defined element around', () => {
    expect(getDefinedElementAround([undefined, undefined, 1, undefined], 2)).toBe(undefined);
    expect(getDefinedElementAround([undefined, 0, 1, undefined], 2)).toBe(0);
    expect(getDefinedElementAround([0, undefined, 1, undefined], 2)).toBe(0);
    expect(getDefinedElementAround([0, undefined, 1, undefined, 3], 2)).toBe(3);
    expect(getDefinedElementAround([0, undefined, 1, undefined, undefined, 3], 2)).toBe(0);
    expect(getDefinedElementAround([undefined, undefined, 1, 0], 2)).toBe(0);
});

test('is list equal', () => {
    expect(isListEqual([undefined, undefined], [undefined, undefined])).toBe(true);
    expect(isListEqual(['one'], ['one'])).toBe(true);

    const desc = { name: 'shyam' };
    expect(isListEqual([desc, 1], [desc, 1])).toBe(true);

    const lst = [1, 2, 3, { name: 'four' }];
    expect(isListEqual(lst, lst)).toBe(true);

    expect(isListEqual([undefined, undefined, 1, undefined], [])).toBe(false);
    expect(isListEqual(['one'], ['two'])).toBe(false);
    expect(isListEqual([{ name: 'hari' }], [{ name: 'hari' }])).toBe(false);
});

test('find duplicates', () => {
    expect(getDuplicates([1, 2, 2, 3, 3, 3], (k) => k)).toEqual(['2', '3']);
});

test('find difference in list', () => {
    const one = { key: 1, name: 'one' };
    const two = { key: 2, name: 'two' };
    const newTwo = { key: 2, name: 'other two' };
    const three = { key: 3, name: 'three' };
    const four = { key: 4, name: 'new four' };
    const oldList = [
        one,
        two,
        three,
    ];
    const newList = [
        newTwo,
        three,
        four,
    ];
    expect(findDifferenceInList(oldList, newList, (elem) => elem.key)).toEqual({
        added: [four],
        removed: [one],
        modified: [{ old: two, new: newTwo }],
        unmodified: [three],
    });
});

test('unique in list', () => {
    expect(unique([1, 2, 3, 1, 2, 3, 1]).map((i) => i))
        .toEqual([1, 2, 3]);
    expect(unique([1, 2, 3]))
        .toEqual([1, 2, 3]);
    expect(unique(undefined))
        .toEqual(undefined);
    const foo = [
        { uid: 14, name: 'hari' },
        { uid: 15, name: 'kiran' },
        { uid: 12, name: 'shyam' },
        { uid: 16, name: 'chyame' },
        { uid: 12, name: 'shyam' },
    ];
    const bar = [
        { uid: 14, name: 'hari' },
        { uid: 15, name: 'kiran' },
        { uid: 12, name: 'shyam' },
        { uid: 16, name: 'chyame' },
    ];
    expect(unique(foo, (item) => item.uid)).toEqual(bar);
});
