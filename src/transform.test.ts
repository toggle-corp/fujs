import { listToMap, listToGroupList } from './transform';

test('convert list to map without modifier', () => {
    const input = [
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
});


test('convert list to map with modifier', () => {
    const input = [
        { id: 1, name: 'hari' },
        { id: 2, name: 'shyam' },
        { id: 3, name: 'kiran' },
        { id: 4, name: 'ale' },
    ];
    const output = {
        1: 'hari',
        2: 'shyam',
        3: 'kiran',
        4: 'ale',
    };
    expect(listToMap(input, e => e.id, e => e.name)).toEqual(output);
});


test('group list into map without modifier', () => {
    const input = [
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
});

test('group list into map with modifier', () => {
    const input = [
        { id: 1, name: 'hari' },
        { id: 2, name: 'shyam' },
        { id: 1, name: 'kiran' },
        { id: 1, name: 'ale' },
    ];
    const output = {
        1: [
            'hari',
            'kiran',
            'ale',
        ],
        2: [
            'shyam',
        ],
    };
    expect(listToGroupList(input, e => e.id, e => e.name)).toEqual(output);
});

