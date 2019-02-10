export function getContrastYIQ(hexColor: string): number {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / (255 * 1000);

    return yiq;
};

export function isValidHexColor(value: string) {
    const colorHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
    return colorHex.test(value);
};

export function getColorOnBgColor(hexColor: string, colorOnLight: string = '#212121', colorOnDark: string = '#ffffff') {
    const isBgLight = getContrastYIQ(hexColor) > 0.5;
    return isBgLight ? colorOnLight : colorOnDark;
};

export function getHashFromString(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i += 1) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash); // eslint-disable-line
    }
    return hash;
};

export function getHexFromCode(hashCode: number) {
    const color = (hashCode & 0x00FFFFFF)    // eslint-disable-line
        .toString(16)
        .toUpperCase();

    const rgb = '00000'.substring(0, 6 - color.length) + color;
    return `#${rgb}`;
};

export function getHexFromString(str: string) {
    return getHexFromCode(getHashFromString(str));
};

export function getHexFromRgb(rgb: string) {
    const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)/i.exec(rgb);
    if (!result) {
        return undefined;
    }
    const r = parseInt(result[1], 10);
    const g = parseInt(result[2], 10);
    const b = parseInt(result[3], 10);

    // eslint-disable-next-line no-bitwise
    return `#${((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')}`
};

export function getRgbFromHex(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) {
        return undefined;
    }

    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    };
};

type Color = [number, number, number];

// Interpolates two [r,g,b] colors and returns an [r,g,b] of the result
// Taken from the awesome ROT.js roguelike dev library at
// https://github.com/ondras/rot.js
export const interpolateRgb = (color1: Color, color2: Color, factor: number = 0.5) => {
    const result = [];
    for (let i = 0; i < 3; i += 1) {
        result.push(
            Math.round((factor * (color2[i] - color1[i])) + color1[i]),
        );
    }
    return result;
};
