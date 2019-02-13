import { Maybe } from './declarations';
import {
    isTruthyString,
    isFalsyString,
    isNotDefined,
} from './core';

// NOTE: String(num).padStart(length, str) not fully supported
export function padStart(num: Maybe<string | number>, length: number, pad: string = '0'): string {
    if (isNotDefined(num)) {
        return '';
    }
    const str = String(num);
    return str.length >= length
        ? str
        : Array(length - str.length + 1).join(pad) + str;
};

export function capitalize(str: Maybe<string>) {
    if (isTruthyString(str)) {
        return str.replace(/\b\w/g, l => l.toUpperCase());
    }
    return str;
};

/**
 * Format text, extracted from pdfs,
 * to remove extraneous spaces
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

// FIXME: the behavior needs to be tested again
export function getRatingForContentInString(content: Maybe<string>, str: Maybe<string>): number {
    if (isFalsyString(content) || isFalsyString(str)) {
        return -1;
    }
    return content.toLowerCase().indexOf(str.toLowerCase())
};

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

// Convert camel case to kebab case
export function camelToKebab(str: Maybe<string>) {
    if (isNotDefined(str)) {
        return str;
    }
    return str
        .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
        .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);
};

/*
 * Convert camel case to normal case
 * eg: camelToDash -> camel to dash
 */
export function camelToNormal(str: Maybe<string>) {
    if (isNotDefined(str)) {
        return str;
    }
    return str
        .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
        .replace(/([A-Z])/g, ([letter]) => ` ${letter.toLowerCase()}`);
};

export function splitInWhitespace(str: Maybe<string>): string[] {
    if (isNotDefined(str)) {
        return [];
    }
    return str.match(/\S+/g) || [];
};

export function trimWhitespace(str: Maybe<string>) {
    if (isNotDefined(str)) {
        return str;
    }
    return splitInWhitespace(str).join(' ');
};

// Match two strings
export function caseInsensitiveSubmatch(longText: Maybe<string | number>, shortText: Maybe<string | number>) {
    if (isNotDefined(longText) || isNotDefined(shortText)) {
        return false;
    }
    return (String(longText).trim().toLowerCase()).includes(String(shortText).trim().toLowerCase())
};
