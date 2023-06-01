import { isNotDefined } from './core';

type RgbColor = [number, number, number];

type HexColor = string;
type RgbRawColor = string;

/**
 * Get color from a number.
 * @param code
 * @returns color derived from hash
 */
export function getHexFromCode(code: number): HexColor {
    // eslint-disable-next-line no-bitwise
    const color = (code & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    // FIXME: use padStart
    const hex = '00000'.substring(0, 6 - color.length) + color;
    return `#${hex}`;
}

/**
 * Get hash from a string.
 * @param str any string
 * @returns hash derived from string
 */
export function getHashFromString(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i += 1) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash); // eslint-disable-line
    }
    return hash;
}

/**
 * Get color from string.
 * @param str any string
 */
export function getHexFromString(str: string) {
    return getHexFromCode(getHashFromString(str));
}

/**
 * Get hex color from rgb color.
 * @param color
 */
export function getHexFromRgbRaw(color: RgbColor) {
    const [r, g, b] = color;
    // eslint-disable-next-line no-bitwise
    return `#${((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')}`;
}

/**
 * Get hex color from rgb color.
 * @param color
 */
export function getHexFromRgb(color: RgbRawColor) {
    const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)/i.exec(color);
    if (!result) {
        return undefined;
    }
    const [, rs, gs, bs] = result;
    if (!rs || !gs || !bs) {
        return undefined;
    }
    const r = parseInt(rs, 10);
    const g = parseInt(gs, 10);
    const b = parseInt(bs, 10);

    return getHexFromRgbRaw([r, g, b]);
}

/**
 * Get rgb color from hex color.
 * @param color
 */
export function getRgbRawFromHex(color: HexColor): RgbColor | undefined {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    if (!result) {
        return undefined;
    }
    const [, rs, gs, bs] = result;
    if (!rs || !gs || !bs) {
        return undefined;
    }

    return [
        parseInt(rs, 16),
        parseInt(gs, 16),
        parseInt(bs, 16),
    ];
}

/**
 * Get rgb color from hex color 'rgb(255, 255, 255)'.
 * @param hex hex color '#ffffff'
 */
export function getRgbFromHex(hex: HexColor): RgbRawColor | undefined {
    const color = getRgbRawFromHex(hex);
    if (isNotDefined(color)) {
        return undefined;
    }
    const [r, g, b] = color;
    return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Convert hex to yiq colorspace and get the luma value
 * @param color
 * @returns yiq luma value
 */
// https://en.wikipedia.org/wiki/YIQ#From_RGB_to_YIQ
export function getContrastYIQ(color: HexColor): number {
    const rgbColor = getRgbRawFromHex(color);
    if (!rgbColor) {
        return 0;
    }
    const [r, g, b] = rgbColor;
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / (255 * 1000);

    return yiq;
}

/**
 * Identifies if given color is valid color.
 * @param color
 */
export function isValidHexColor(color: string) {
    const colorHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
    return colorHex.test(color);
}

/**
 * Get appropriate foreground color for a given background color.
 * @param color color for background
 * @param colorOnLight color for light background
 * @param colorOnDark color for dark background
 * @returns appropriate foreground color
 */
export function getColorOnBgColor(color: HexColor, colorOnLight: HexColor = '#212121', colorOnDark: HexColor = '#ffffff') {
    return getContrastYIQ(color) > 0.5 ? colorOnLight : colorOnDark;
}

/**
 * Interpolate two rgb colors.
 * @param color1
 * @param color2
 * @param factor decides where the interpolated color lies.
 * @returns interpolated rgb color
 */
// Taken from the awesome ROT.js roguelike dev library at
// https://github.com/ondras/rot.js
export function interpolateRgb(color1: RgbColor, color2: RgbColor, factor = 0.5) {
    const result: RgbColor = [
        Math.round((factor * (color2[0] - color1[0])) + color1[0]),
        Math.round((factor * (color2[1] - color1[1])) + color1[1]),
        Math.round((factor * (color2[2] - color1[2])) + color1[2]),
    ];
    return result;
}
