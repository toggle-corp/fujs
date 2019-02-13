import {
    addSeparator,
    formattedNormalize,
    Lang,
} from './number';

test('add thousand separator in number', () => {
    expect(addSeparator(1000000000)).toBe('1,000,000,000');
    expect(addSeparator(1000000000, '.')).toBe('1.000.000.000');
});

test('normalize numbers', () => {
    expect(formattedNormalize(80000, 'du' as Lang)).toEqual({ number: 80000 });
    expect(formattedNormalize(80000)).toEqual({ number: 80000, normalizeSuffix: undefined });
    expect(formattedNormalize(100000)).toEqual({ number: 1, normalizeSuffix: 'Lac' });
    expect(formattedNormalize(111110)).toEqual({ number: 1.1111, normalizeSuffix: 'Lac' });
    expect(formattedNormalize(30000000)).toEqual({ number: 3, normalizeSuffix: 'Cr' });
    expect(formattedNormalize(2000000000)).toEqual({ number: 2, normalizeSuffix: 'Ar' });
});


