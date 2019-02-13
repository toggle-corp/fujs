import {
    getContrastYIQ,
    getColorOnBgColor,
    getHashFromString,
    getHexFromString,
    getHexFromCode,
    getHexFromRgb,
    isValidHexColor,
    getHexFromRgbRaw,
    getRgbFromHex,
    getRgbRawFromHex,
    interpolateRgb,
} from './color';

test('get contrast YIQ', () => {
    expect(getContrastYIQ('#000000')).toBeCloseTo(0);
    expect(getContrastYIQ('#ffff00')).toBeCloseTo(0.886);
    expect(getContrastYIQ('#3498db')).toBeCloseTo(0.508);
});

test('get text color on bg color', () => {
    expect(getColorOnBgColor('#000000')).toEqual('#ffffff');
    expect(getColorOnBgColor('#ffff00')).toEqual('#212121');
    expect(getColorOnBgColor('#ffff00', '#ffff00')).toEqual('#ffff00');
    expect(getColorOnBgColor('#000000', '#ffff00', '#f00f00')).toEqual('#f00f00');
});

test('get hash of a string', () => {
    expect(getHashFromString('testing')).toEqual(2872521232);
    expect(getHashFromString('testing123')).toEqual(-1943301598);
});

test('get hex of a hash', () => {
    expect(getHexFromCode(2872521232)).toEqual('#373210');
    expect(getHexFromCode(-1943301598)).toEqual('#2B9222');
});

test('get hex of a string', () => {
    expect(getHexFromString('testing')).toEqual('#373210');
    expect(getHexFromString('testing123')).toEqual('#2B9222');
});

test('get hex from rgb', () => {
    expect(getHexFromRgb('rgb(255, 255, 255)')).toEqual('#ffffff');
    expect(getHexFromRgb('rgb(188, 143,143)')).toEqual('#bc8f8f');
    expect(getHexFromRgb('rgb(205,133, 63)')).toEqual('#cd853f');
    expect(getHexFromRgb('rgb(255,0,0)')).toEqual('#ff0000');
    expect(getHexFromRgb('rgb(255,0, 255)')).toEqual('#ff00ff');
    expect(getHexFromRgb('rgb(0, 255, 255)')).toEqual('#00ffff');
    expect(getHexFromRgb('rgb(0,0,255)')).toEqual('#0000ff');
    expect(getHexFromRgb('rgb(0,0,0)')).toEqual('#000000');
});

test('get hex from rgb raw', () => {
    expect(getHexFromRgbRaw([255,255,255])).toEqual('#ffffff');
    expect(getHexFromRgbRaw([188,143,143])).toEqual('#bc8f8f');
    expect(getHexFromRgbRaw([205,133,63])).toEqual('#cd853f');
    expect(getHexFromRgbRaw([255,0,0])).toEqual('#ff0000');
    expect(getHexFromRgbRaw([255,0,255])).toEqual('#ff00ff');
    expect(getHexFromRgbRaw([0,255,255])).toEqual('#00ffff');
    expect(getHexFromRgbRaw([0,0,255])).toEqual('#0000ff');
    expect(getHexFromRgbRaw([0,0,0])).toEqual('#000000');
});

test('get rgb from hex', () => {
    expect(getRgbFromHex('#ffffff')).toEqual('rgb(255, 255, 255)');
    expect(getRgbFromHex('#bc8f8f')).toEqual('rgb(188, 143, 143)');
    expect(getRgbFromHex('#cd853f')).toEqual('rgb(205, 133, 63)');
    expect(getRgbFromHex('#ff0000')).toEqual('rgb(255, 0, 0)');
    expect(getRgbFromHex('#ff00ff')).toEqual('rgb(255, 0, 255)');
    expect(getRgbFromHex('#00ffff')).toEqual('rgb(0, 255, 255)');
    expect(getRgbFromHex('#0000ff')).toEqual('rgb(0, 0, 255)');
    expect(getRgbFromHex('#000000')).toEqual('rgb(0, 0, 0)');
});

test('get rgb raw from hex', () => {
    expect(getRgbRawFromHex('#ffffff')).toEqual([255,255,255]);
    expect(getRgbRawFromHex('#bc8f8f')).toEqual([188,143,143]);
    expect(getRgbRawFromHex('#cd853f')).toEqual([205,133,63]);
    expect(getRgbRawFromHex('#ff0000')).toEqual([255,0,0]);
    expect(getRgbRawFromHex('#ff00ff')).toEqual([255,0,255]);
    expect(getRgbRawFromHex('#00ffff')).toEqual([0,255,255]);
    expect(getRgbRawFromHex('#0000ff')).toEqual([0,0,255]);
    expect(getRgbRawFromHex('#000000')).toEqual([0,0,0]);
});

test('interpolate rgb', () => {
    expect(interpolateRgb([0, 0, 0], [0, 0, 0])).toEqual([0,0,0]);
    expect(interpolateRgb([0, 0, 0], [0, 0, 0], 0)).toEqual([0,0,0]);
    expect(interpolateRgb([255, 0, 0], [0, 255, 0], 0)).toEqual([255,0,0]);
    expect(interpolateRgb([255, 255, 255], [0, 0, 0], 0.5)).toEqual([128,128,128]);
});

test('should return true for valid hex colors', () => {
    expect(isValidHexColor('#000000')).toBe(true);
    expect(isValidHexColor('#000')).toBe(true);
    expect(isValidHexColor('#ffffff')).toBe(true);
    expect(isValidHexColor('#AABBCC')).toBe(true);
    expect(isValidHexColor('#11AAFF')).toBe(true);
    expect(isValidHexColor('#afasdfa')).toBe(false);
    expect(isValidHexColor('#11212121212')).toBe(false);
    expect(isValidHexColor('#hello')).toBe(false);
    expect(isValidHexColor('')).toBe(false);
});

