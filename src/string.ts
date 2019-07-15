import { Maybe } from './declarations';
import {
    isTruthyString,
    isFalsyString,
    isNotDefined,
} from './core';

/**
 * Add padding before string or number
 *
 * @param value
 * @param length total length of the output
 * @param pad character used to pad
 *
 * @remarks
 * Use when String(num).padStart(length, str) not fully supported
 */
export function padStart(value: Maybe<string | number>, length: number, pad: string = '0'): string {
    if (isNotDefined(value)) {
        return '';
    }
    const str = String(value);
    return str.length >= length
        ? str
        : Array(length - str.length + 1).join(pad) + str;
};

/**
 * Change the first letter of word to uppercase
 *
 * @param str
 */
export function capitalize(str: Maybe<string>) {
    if (isTruthyString(str)) {
        return str.replace(/\b\w/g, l => l.toUpperCase());
    }
    return str;
};

/**
 * Format text, extracted from pdfs, to remove extraneous spaces
 *
 * @param text
 */
export function formatPdfText(text: string) {
    return text
        // Tab to space
        .replace(/\t/gi, ' ')
        // Anything except ascii TODO: support accents and other utf-8
        // text = text.replace(/[^\x00-\x7F]/g, "");
        // Single line break to space
        .replace(/([^\n])[ \t]*\n[ \t]*(?!\n)/gi, '$1 ')
        // Multiple spaces to single
        .replace(/ +/gi, ' ')
        // More than 3 line breaks to just 3 line breaks
        .replace(/\n\s*\n\s*(\n\s*)+/gi, '\n\n\n')
        // This weird -? text combo to just -
        .replace(/-\?/gi, '-')
        .trim();
};

/**
 * Get rating for content in string
 *
 * @param content
 * @param str
 */
export function getRatingForContentInString(content: Maybe<string>, str: Maybe<string>): number {
    // FIXME: the behavior needs to be tested again
    if (isFalsyString(content) || isFalsyString(str)) {
        return -1;
    }
    return content.toLowerCase().indexOf(str.toLowerCase())
};

/**
 * Get random string
 *
 * @param length length of the random string
 * @param mixedCase if uppercase alphabets are to be included
 */
export function randomString(length: number = 8, mixedCase: boolean = false) {
    let text = '';
    const possible = mixedCase
        ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        : 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;

    /*
     * -------------------------------------------------
     * better Algorithm, but not supported by enzyme :(
     * -------------------------------------------------

    const randomValues = new Uint8Array(length);
    window.crypto.getRandomValues(randomValues);
    return Array.from(randomValues, v => v.toString(36)).join('').substring(0, 8);
    */
};


/**
 * Convert camel case to space separated words
 *
 * @param str
 * @param separator
 *
 * @remarks
 * Only support alphabets (not numerals)
 */
const reOne = /([a-z])([A-Z])([A-Z])/g;
const reTwo = /([a-z])([A-Z])/g;
const reThree = /([A-Z])([A-Z])([a-z])/g;
export const camelToNormal = (str: Maybe<string>, separator: string = ' ') => {
    if (isNotDefined(str)) {
        return str;
    }
    return str.replace(reOne, (_, one, two, three) => `${one}${separator}${two}${three}`)
        .replace(reTwo, (_, one, two) => `${one}${separator}${two.toLowerCase()}`)
        .replace(reThree, (_, one, two, three) => `${one}${separator}${two.toLowerCase()}${three}`)
};

/**
 * Convert camel case to snake case
 *
 * @param str
 *
 * @remarks
 * Only support alphabets (not numerals)
 */
export const camelToSnake = (str: Maybe<string>) => {
    const value = camelToNormal(str, '_');
    if (isNotDefined(value) || value.length <= 1) {
        return value;
    }
    return value.charAt(0).toLowerCase() + value.slice(1);
}

/**
 * Convert camel case to kebab case
 *
 * @param str
 *
 * @remarks
 * Only support alphabets (not numerals)
 */
export function camelToKebab(str: Maybe<string>) {
    const value = camelToNormal(str, '-');
    if (isNotDefined(value) || value.length <= 1) {
        return value;
    }
    return value.charAt(0).toLowerCase() + value.slice(1);
};

/**
 * Split sentence
 *
 * @param str
 */
export function splitInWhitespace(str: Maybe<string>): string[] {
    if (isNotDefined(str)) {
        return [];
    }
    return str.match(/\S+/g) || [];
};

/**
 * Convert all whitespaces into single space
 *
 * @param str
 */
export function trimWhitespace(str: Maybe<string>) {
    if (isNotDefined(str)) {
        return str;
    }
    return splitInWhitespace(str).join(' ');
};

/**
 * Identify if shortText is inside longText
 *
 * @param longText
 * @param shortText
 *
 * @remarks
 * The match is case-insensitive
 *
 */
export function caseInsensitiveSubmatch(longText: Maybe<string | number>, shortText: Maybe<string | number>) {
    if (isNotDefined(longText) || isNotDefined(shortText)) {
        return false;
    }

    return (
        String(longText)
        .trim()
        .toLowerCase()
    ).includes(
        String(shortText)
        .trim()
        .toLowerCase()
    )
};
