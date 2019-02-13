import {
    getFirstKeyByValue,
    removeKey,
    pick,
} from './object';

test('get key by value', () => {
    const map = { ram: 'ram', shyam: 'shyam', hari: 'ram' };
    expect(getFirstKeyByValue(map, 'ram')).toEqual('ram');
    expect(getFirstKeyByValue(map, 'ram')).not.toEqual('hari');
    expect(getFirstKeyByValue(map, 'shyam')).toEqual('shyam');
});


test('pick', () => {
    expect(pick({ hari: undefined, shyam: 2 }, ['hari'])).toEqual({ hari: undefined });
    expect(pick({ hari: 1, shyam: 2 }, ['hari'])).toEqual({ hari: 1 });
    expect(pick({ hari: 1, shyam: 2 }, ['hari', 'shyam'])).toEqual({ hari: 1, shyam: 2 });
});

test('remove key', () => {
    expect(removeKey({ hari: undefined, shyam: 2 }, 'shyam')).toEqual({ hari: undefined });
    expect(removeKey({ hari: undefined, shyam: 2 }, 'hari')).toEqual({ shyam: 2 });
    expect(removeKey({ hari: 1, shyam: 2 }, 'hari')).toEqual({ shyam: 2 });
    expect(removeKey({ hari: 1, shyam: 2 }, 'shyam')).toEqual({ hari: 1 });
});
