import {
    caseInsensitiveSubmatch,
    capitalize,
    formatPdfText,
    splitInWhitespace,
    trimWhitespace,
    camelToKebab,
    camelToNormal,
    padStart,
    randomString,
} from './string';

test('random string', () => {
    expect(randomString().length).toEqual(8);
    expect(randomString(10).length).toEqual(10);
    expect(randomString(10, true).length).toEqual(10);
});

test('case-insensitive submatch', () => {
    expect(caseInsensitiveSubmatch('HArI', 'ari')).toEqual(true);
    expect(caseInsensitiveSubmatch('haRI', 'hari')).toEqual(true);
    expect(caseInsensitiveSubmatch('HAri', 'haris')).toEqual(false);
});

test('case-insensitive submatch for empty strings', () => {
    expect(caseInsensitiveSubmatch('', '')).toEqual(true);
    expect(caseInsensitiveSubmatch('', 'hari')).toEqual(false);
    expect(caseInsensitiveSubmatch('hari', '')).toEqual(true);
    expect(caseInsensitiveSubmatch(undefined, undefined)).toEqual(false);
    expect(caseInsensitiveSubmatch(undefined, 'hari')).toEqual(false);
    expect(caseInsensitiveSubmatch('hari', undefined)).toEqual(false);
});

test('capitalize strings using capitalize', () => {
    expect(capitalize('class')).toEqual('Class');
    expect(capitalize('class name')).toEqual('Class Name');
    expect(capitalize('what Are you?')).toEqual('What Are You?');
    expect(capitalize('? 12 w rT')).toEqual('? 12 W RT');
    expect(capitalize(undefined)).toEqual(undefined);
    expect(capitalize('')).toEqual('');
});

test('format pdf text', () => {
    const unformatted = 'Hari is a \n \n   \n\n  bad\nboy';
    const formatted = 'Hari is a \n\n bad boy';
    expect(formatPdfText(unformatted)).toEqual(formatted);
});

test('split from whitespaces', () => {
    expect(splitInWhitespace(undefined)).toEqual([]);
    expect(splitInWhitespace('')).toEqual([]);
    expect(splitInWhitespace('hari')).toEqual(['hari']);
    expect(splitInWhitespace('hari is')).toEqual(['hari', 'is']);
    expect(splitInWhitespace(' hari is ')).toEqual(['hari', 'is']);
    expect(splitInWhitespace('  hari  is good     ')).toEqual(['hari', 'is', 'good']);
    // eslint-disable-next-line no-tabs
    expect(splitInWhitespace('hari	is good')).toEqual(['hari', 'is', 'good']);
    expect(splitInWhitespace('hari\t is\ngood boy  ')).toEqual(['hari', 'is', 'good', 'boy']);
});


test('trim out whitespaces', () => {
    expect(trimWhitespace(undefined)).toEqual(undefined);
    expect(trimWhitespace('')).toEqual('');
    expect(trimWhitespace('hari')).toEqual('hari');
    expect(trimWhitespace('hari is')).toEqual('hari is');
    expect(trimWhitespace(' hari is ')).toEqual('hari is');
    expect(trimWhitespace('  hari  is good     ')).toEqual('hari is good');
    // eslint-disable-next-line no-tabs
    expect(trimWhitespace('hari	is good')).toEqual('hari is good');
    expect(trimWhitespace('hari\t is\ngood boy  ')).toEqual('hari is good boy');
});

test('left padding in number', () => {
    expect(padStart(undefined, 2, 'x')).toEqual('');
    expect(padStart(121, 2, 'x')).toEqual('121');
    expect(padStart(121, 4, 'x')).toEqual('x121');
    expect(padStart(121, 4)).toEqual('0121');
    expect(padStart(12221, 4)).toEqual('12221');
});

test('camel case to kebab case', () => {
    expect(camelToKebab('')).toEqual('');
    expect(camelToKebab(undefined)).toEqual(undefined);
    expect(camelToKebab('hariIsGood')).toEqual('hari-is-good');
    expect(camelToKebab('HariIsGood')).toEqual('hari-is-good');
    expect(camelToKebab('HariIsGOOD')).toEqual('hari-is-g-o-o-d');
    expect(camelToKebab('hari')).toEqual('hari');
    expect(camelToKebab('Hari')).toEqual('hari');
});

test('camel case to normal', () => {
    expect(camelToNormal('')).toEqual('');
    expect(camelToNormal(undefined)).toEqual(undefined);
    expect(camelToNormal('hariIsGood')).toEqual('hari is good');
    expect(camelToNormal('HariIsGood')).toEqual('hari is good');
    expect(camelToNormal('HariIsGOOD')).toEqual('hari is g o o d');
    expect(camelToNormal('hari')).toEqual('hari');
    expect(camelToNormal('Hari')).toEqual('hari');
});

