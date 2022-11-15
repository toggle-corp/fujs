import {
    addSeparator,
    formattedNormalize,
} from './number';

test('add thousand separator in number', () => {
    expect(addSeparator(1000000000)).toBe('1,000,000,000');
    expect(addSeparator(1000000000, '.')).toBe('1.000.000.000');
});

test('normalize numbers', () => {
    expect(formattedNormalize(80000)).toEqual({ number: 80, normalizeSuffix: 'K' });
    expect(formattedNormalize(100000)).toEqual({ number: 100, normalizeSuffix: 'K' });
    expect(formattedNormalize(1111100)).toEqual({ number: 1.1111, normalizeSuffix: 'M' });
    expect(formattedNormalize(30000000)).toEqual({ number: 30, normalizeSuffix: 'M' });
    expect(formattedNormalize(2000000000)).toEqual({ number: 2, normalizeSuffix: 'B' });
});
