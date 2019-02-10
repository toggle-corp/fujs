import { getFirstKeyByValue } from './object';

test('get key by value', () => {
    const map = { ram: 'ram', shyam: 'shyam', hari: 'ram' };
    expect(getFirstKeyByValue(map, 'ram')).toEqual('ram');
    expect(getFirstKeyByValue(map, 'ram')).not.toEqual('hari');
    expect(getFirstKeyByValue(map, 'shyam')).toEqual('shyam');
});

