import {
    isInteger,
    isObject,
    isList,
    isValidEmail,
    isValidUrl,
    typeOf,
} from './type';

test('isInteger', () => {
    expect(isInteger(12)).toBe(true);
    expect(isInteger(-12)).toBe(true);
    expect(isInteger(0)).toBe(true);
    expect(isInteger(0.00)).toBe(true);
    expect(isInteger(-1.12)).toBe(false);
    expect(isInteger(12.012)).toBe(false);
    expect(isInteger('12')).toBe(false);
    expect(isInteger('23.12')).toBe(false);
    expect(isInteger({})).toBe(false);
    expect(isInteger(undefined)).toBe(false);
    expect(isInteger(null)).toBe(false);
    expect(isInteger(NaN)).toBe(false);
    expect(isInteger([])).toBe(false);
});

test('isObject', () => {
    expect(isObject([])).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(NaN)).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject('hari')).toBe(false);

    expect(isObject({})).toBe(true);
    expect(isObject({ name: undefined })).toBe(true);
    expect(isObject({ name: 'hari' })).toBe(true);
});

test('isList', () => {
    expect(isList([])).toBe(true);
    expect(isList([undefined])).toBe(true);
    expect(isList(['name', 'age'])).toBe(true);
    expect(isList([{ name: 'hari' }])).toBe(true);

    expect(isList(null)).toBe(false);
    expect(isList(undefined)).toBe(false);
    expect(isList(NaN)).toBe(false);
    expect(isList(1)).toBe(false);
    expect(isList('hari')).toBe(false);
    expect(isList({})).toBe(false);
    expect(isList({ name: undefined })).toBe(false);
    expect(isList({ name: 'hari' })).toBe(false);
});

test('email condition', () => {
    expect(isValidEmail('hari@test.com')).toBe(true);
    expect(isValidEmail('panda')).toBe(false);
    expect(isValidEmail('panda.com')).toBe(false);
    expect(isValidEmail('&*^%$#$%^&*&^%$#@.com')).toBe(false);
    expect(isValidEmail('@eampl.com')).toBe(false);
    expect(isValidEmail('Joe Smith <email@example.com>')).toBe(false);
    expect(isValidEmail('email..email@example.com')).toBe(false);
    expect(isValidEmail('email@example.com (Joe Smith)')).toBe(false);
    expect(isValidEmail('email@example')).toBe(false);
    expect(isValidEmail('email@111.222.333.44444')).toBe(false);
    expect(isValidEmail('email@example..com')).toBe(false);
    expect(isValidEmail('Abc..123@example.com')).toBe(false);
});

test('url condition', () => {
    expect(isValidUrl('https://www.w3.org/Protocols/HTTP/1.1/rfc2616.pdf')).toBe(true);
    expect(isValidUrl('http://www.pdf995.com/samples/pdf.pdf')).toBe(true);
    expect(isValidUrl('https://raaya_karas.carbonmade.com/')).toBe(true);

    expect(isValidUrl('http://foo.com/blah_blah')).toBe(true);
    expect(isValidUrl('http://foo.com/blah_blah/')).toBe(true);
    expect(isValidUrl('http://foo.com/blah_blah_(wikipedia)')).toBe(true);
    expect(isValidUrl('http://foo.com/blah_blah_(wikipedia)_(again)')).toBe(true);
    expect(isValidUrl('http://www.example.com/wpstyle/?p=364')).toBe(true);
    expect(isValidUrl('https://www.example.com/foo/?bar=baz&inga=42&quux')).toBe(true);
    expect(isValidUrl('http://142.42.1.1/')).toBe(true);
    expect(isValidUrl('http://142.42.1.1:8080/')).toBe(true);
    expect(isValidUrl('http://foo.com/blah_(wikipedia)#cite-1')).toBe(true);
    expect(isValidUrl('http://foo.com/blah_(wikipedia)_blah#cite-1')).toBe(true);
    expect(isValidUrl('http://foo.com/(something)?after=parens')).toBe(true);
    expect(isValidUrl('http://code.google.com/events/#&product=browser')).toBe(true);
    expect(isValidUrl('http://j.mp')).toBe(true);
    expect(isValidUrl('http://foo.bar/?q=Test%20URL-encoded%20stuff')).toBe(true);
    expect(isValidUrl('http://1337.net')).toBe(true);
    expect(isValidUrl('http://a.b-c.de')).toBe(true);
    expect(isValidUrl('http://223.255.255.254')).toBe(true);

    expect(isValidUrl('http://userid:password@example.com:8080')).toBe(true);
    expect(isValidUrl('http://userid:password@example.com:8080/')).toBe(true);
    expect(isValidUrl('http://userid@example.com')).toBe(true);
    expect(isValidUrl('http://userid@example.com/')).toBe(true);
    expect(isValidUrl('http://userid@example.com:8080')).toBe(true);
    expect(isValidUrl('http://userid@example.com:8080/')).toBe(true);
    expect(isValidUrl('http://userid:password@example.com')).toBe(true);
    expect(isValidUrl('http://userid:password@example.com/')).toBe(true);
    expect(isValidUrl('ftp://foo.bar/baz')).toBe(true);

    expect(isValidUrl('http://')).toBe(false);
    expect(isValidUrl('http://.')).toBe(false);
    expect(isValidUrl('http://..')).toBe(false);
    expect(isValidUrl('http://../')).toBe(false);
    expect(isValidUrl('http://?')).toBe(false);
    expect(isValidUrl('http://??')).toBe(false);
    expect(isValidUrl('http://??/')).toBe(false);
    expect(isValidUrl('http://#')).toBe(false);
    expect(isValidUrl('http://##')).toBe(false);
    expect(isValidUrl('http://##/')).toBe(false);
    expect(isValidUrl('//')).toBe(false);
    expect(isValidUrl('//a')).toBe(false);
    expect(isValidUrl('///a')).toBe(false);
    expect(isValidUrl('///')).toBe(false);
    expect(isValidUrl('http:///a')).toBe(false);
    expect(isValidUrl('foo.com')).toBe(false);
    expect(isValidUrl('rdar://1234')).toBe(false);
    expect(isValidUrl('h://test')).toBe(false);
    expect(isValidUrl('http:// shouldfail.com')).toBe(false);
    expect(isValidUrl('://shouldfail')).toBe(false);
    expect(isValidUrl('ftps://foo.bar/')).toBe(false);
    expect(isValidUrl('http://-error-.invalid/')).toBe(false);
    expect(isValidUrl('http://-a.b.co')).toBe(false);
    expect(isValidUrl('http://3628126748')).toBe(false);
    expect(isValidUrl('http://10.1.1.1')).toBe(false);
    expect(isValidUrl('http://10.1.1.254')).toBe(false);
    expect(isValidUrl('http://foo.bar?q=Spaces should be encoded')).toBe(false);
    // expect(isValidUrl('http://foo.bar/foo(bar)bazquux')).toBe(false);
    // expect(isValidUrl('http://a.b--c.de/')).toBe(false);
    expect(isValidUrl('http://a.b-.co')).toBe(false);
    expect(isValidUrl('http://1.1.1.1.1')).toBe(false);
    expect(isValidUrl('http://123.123.123')).toBe(false);
    expect(isValidUrl('http://.www.foo.bar/')).toBe(false);
    // expect(isValidUrl('http://www.foo.bar./')).toBe(false);
    expect(isValidUrl('http://.www.foo.bar./')).toBe(false);
});

test('type of', () => {
    expect(typeOf(null)).toBe('null');
    expect(typeOf(NaN)).toBe('number');
    // FIXME: typeof undefined should be undefined
    expect(typeOf(undefined)).toBe('null');
    expect(typeOf(1)).toBe('number');
    expect(typeOf(-1.100)).toBe('number');
    expect(typeOf(true)).toBe('boolean');
    expect(typeOf(false)).toBe('boolean');
    expect(typeOf('')).toBe('string');
    expect(typeOf('hari')).toBe('string');
    expect(typeOf(' ')).toBe('string');
    expect(typeOf([])).toBe('array');
    expect(typeOf([1, 2, 3])).toBe('array');
    expect(typeOf([{ id: 1 }, { id: 2 }])).toBe('array');
    expect(typeOf(new Date())).toBe('date');
    expect(typeOf(/.txt$/)).toBe('regexp');
    expect(typeOf({})).toBe('object');
    expect(typeOf({ id: 1 })).toBe('object');
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(typeOf(() => {})).toBe('function');
});
