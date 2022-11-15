import { isNotDefined } from './core';
import { Maybe } from './declarations';

// TODO: get methods from Numeral

/**
 * Get comma separated number
 * @param num
 * @param separator thousand separator
 * @param decimalSeparator decimal separator
 */
export function addSeparator(num: undefined, sep?: string, decimalSep?: string): undefined;
export function addSeparator(num: null, sep?: string, decimalSep?: string): null;
export function addSeparator(num: string | number, sep?: string, decimalSep?: string): string;
export function addSeparator(num: Maybe<string | number>, separator = ',', decimalSeparator = '.') {
    if (isNotDefined(num)) {
        return num;
    }
    const [before = '', after = ''] = String(num).split(decimalSeparator);

    let x1 = before;
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, `$1${separator}$2`);
    }

    const x2 = after !== '' ? `${decimalSeparator}${after}` : '';

    return x1 + x2;
}

/**
 * Get normalized number
 * @param num
 * @param lang language
 */
export function formattedNormalize(num: number) {
    const mapping = [
        { suffix: 'B', value: 1000000000 },
        { suffix: 'M', value: 1000000 },
        { suffix: 'K', value: 1000 },
    ];

    const rule = mapping.find((n) => num >= n.value);

    if (isNotDefined(rule)) {
        return { number: num };
    }
    const { suffix, value } = rule;
    return {
        number: num / value,
        normalizeSuffix: suffix,
    };
}
