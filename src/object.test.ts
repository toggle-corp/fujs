import {
    getFirstKeyByValue,
    removeKey,
    pick,
    doesObjectHaveNoData,
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

test('check if object has no data', () => {
    expect(doesObjectHaveNoData(undefined)).toBe(true);
    expect(doesObjectHaveNoData({})).toBe(true);
    expect(doesObjectHaveNoData([])).toBe(true);
    expect(doesObjectHaveNoData([undefined, undefined])).toBe(true);
    expect(doesObjectHaveNoData([{}, {}])).toBe(true);
    expect(doesObjectHaveNoData({ hari: undefined })).toBe(true);
    expect(doesObjectHaveNoData({ hari: { shyam: undefined } })).toBe(true);
    expect(doesObjectHaveNoData({ hari: { shyam: undefined, hari: [] } })).toBe(true);
    expect(doesObjectHaveNoData({ hari: { shyam: undefined, hari: [{}, {}] } })).toBe(true);

    expect(doesObjectHaveNoData(NaN)).toBe(false);
    expect(doesObjectHaveNoData(null)).toBe(false);
    expect(doesObjectHaveNoData(1)).toBe(false);
    expect(doesObjectHaveNoData('')).toBe(false);
    expect(doesObjectHaveNoData('hari')).toBe(false);
    expect(doesObjectHaveNoData(false)).toBe(false);
    expect(doesObjectHaveNoData(true)).toBe(false);

    expect(doesObjectHaveNoData([true, undefined])).toBe(false);
    expect(doesObjectHaveNoData([{}, {}, false])).toBe(false);
    expect(doesObjectHaveNoData({ hari: '', shyam: undefined })).toBe(false);
    expect(doesObjectHaveNoData({ hari: { shyam: 1 } })).toBe(false);
    expect(doesObjectHaveNoData({ hari: { shyam: undefined, hari: [1, 2] } })).toBe(false);
    expect(doesObjectHaveNoData({ hari: { shyam: undefined, hari: [{}, { value: 0 }] } })).toBe(false);
});

test('check if object has no data', () => {
    const invalids = [''];
    expect(doesObjectHaveNoData(undefined, invalids)).toBe(true);
    expect(doesObjectHaveNoData({}, invalids)).toBe(true);
    expect(doesObjectHaveNoData([], invalids)).toBe(true);
    expect(doesObjectHaveNoData([undefined, undefined], invalids)).toBe(true);
    expect(doesObjectHaveNoData([{}, {}], invalids)).toBe(true);
    expect(doesObjectHaveNoData({ hari: undefined }, invalids)).toBe(true);
    expect(doesObjectHaveNoData({ hari: { shyam: undefined } }, invalids)).toBe(true);
    expect(doesObjectHaveNoData({ hari: { shyam: undefined, hari: [] } }, invalids)).toBe(true);
    expect(doesObjectHaveNoData({ hari: { shyam: undefined, hari: [{}, {}] } }, invalids)).toBe(true);
    expect(doesObjectHaveNoData('', invalids)).toBe(true);
    expect(doesObjectHaveNoData({ hari: '', shyam: undefined }, invalids)).toBe(true);

    expect(doesObjectHaveNoData(NaN, invalids)).toBe(false);
    expect(doesObjectHaveNoData(null, invalids)).toBe(false);
    expect(doesObjectHaveNoData(1, invalids)).toBe(false);
    expect(doesObjectHaveNoData('hari', invalids)).toBe(false);
    expect(doesObjectHaveNoData(false, invalids)).toBe(false);
    expect(doesObjectHaveNoData(true, invalids)).toBe(false);

    expect(doesObjectHaveNoData([true, undefined], invalids)).toBe(false);
    expect(doesObjectHaveNoData([{}, {}, false], invalids)).toBe(false);
    expect(doesObjectHaveNoData({ hari: { shyam: 1 } }, invalids)).toBe(false);
    expect(doesObjectHaveNoData({ hari: { shyam: undefined, hari: [1, 2] } }, invalids)).toBe(false);
    expect(doesObjectHaveNoData({ hari: { shyam: undefined, hari: [{}, { value: 0 }] } }, invalids)).toBe(false);
});
