import {
    listToMap,
    mapToList,
    mapToMap,
    listToGroupList,
} from './transform';

interface Input {
    id: number,
    name: string,
};

test('convert list to map', () => {
    const input: Input[] = [
        { id: 1, name: 'hari' },
        { id: 2, name: 'shyam' },
        { id: 3, name: 'kiran' },
        { id: 4, name: 'ale' },
    ];
    const output = {
        1: { id: 1, name: 'hari' },
        2: { id: 2, name: 'shyam' },
        3: { id: 3, name: 'kiran' },
        4: { id: 4, name: 'ale' },
    };
    expect(listToMap(input, e => e.id)).toEqual(output);

    const output2 = {
        1: 'hari',
        2: 'shyam',
        3: 'kiran',
        4: 'ale',
    };
    expect(listToMap(input, e => e.id, e => e.name)).toEqual(output2);
    expect(listToMap<Input, string>(undefined, e => e.id, e => e.name)).toEqual({});
});

test('convert map to list', () => {
    const output: { [key: string]: Input } = {
        1: { id: 1, name: 'hari' },
        2: { id: 2, name: 'shyam' },
        3: { id: 3, name: 'kiran' },
        4: { id: 4, name: 'ale' },
    };
    const input: Input[] = [
        { id: 1, name: 'hari' },
        { id: 2, name: 'shyam' },
        { id: 3, name: 'kiran' },
        { id: 4, name: 'ale' },
    ];
    expect(mapToList(output)).toEqual(input);

    const output2 = [
        'hari',
        'shyam',
        'kiran',
        'ale',
    ];
    expect(mapToList(output, e => e.name)).toEqual(output2);
    expect(mapToList<Input, string>(undefined, e => e.name)).toEqual([]);
});

test('convert map to map', () => {
    const output: { [key: string]: Input } = {
        1: { id: 1, name: 'hari' },
        2: { id: 2, name: 'shyam' },
        3: { id: 3, name: 'kiran' },
        4: { id: 4, name: 'ale' },
    };
    const input: { [key: string]: Input } = {
        11: { id: 1, name: 'hari' },
        22: { id: 2, name: 'shyam' },
        33: { id: 3, name: 'kiran' },
        44: { id: 4, name: 'ale' },
    };
    expect(mapToMap(output, key => `${key}${key}`)).toEqual(input);

    const output2 = {
        1: 'hari',
        2: 'shyam',
        3: 'kiran',
        4: 'ale',
    };
    expect(mapToMap(output, k => k, elem => elem.name)).toEqual(output2);
    expect(mapToMap<Input, string>(undefined, k => k, e => e.name)).toEqual({});

    const newObj = {
        abc: 1,
        def: 2,
        ghi: 3,
        jkl: 4,
    };
    expect(mapToMap(newObj, (_, e) => e, (_, k) => k)).toEqual({
        1: 'abc',
        2: 'def',
        3: 'ghi',
        4: 'jkl',
    })

});

test('group list into map', () => {
    const input: Input[] = [
        { id: 1, name: 'hari' },
        { id: 2, name: 'shyam' },
        { id: 1, name: 'kiran' },
        { id: 1, name: 'ale' },
    ];
    const output = {
        1: [
            { id: 1, name: 'hari' },
            { id: 1, name: 'kiran' },
            { id: 1, name: 'ale' },
        ],
        2: [
            { id: 2, name: 'shyam' },
        ],
    };
    expect(listToGroupList(input, e => e.id)).toEqual(output);

    const outputTwo = {
        1: [
            'hari',
            'kiran',
            'ale',
        ],
        2: [
            'shyam',
        ],
    };
    expect(listToGroupList(input, e => e.id, e => e.name)).toEqual(outputTwo);
    expect(listToGroupList<Input, string>(undefined, e => e.id, e => e.name)).toEqual({});
});
