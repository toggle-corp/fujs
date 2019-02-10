import { _cs } from './cs';

test('join classname using _cs', () => {
    const isBad = false;
    const isAwesome = true;

    expect(_cs('class', 'name', '', 'joined')).toEqual('class name joined');
    expect(_cs(
        isBad && 'bad',
        isAwesome && 'awesome',
        '',
        undefined,
        'welldone',
        null,
    )).toEqual('awesome welldone');
});
