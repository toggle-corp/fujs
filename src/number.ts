import { isNotDefined } from './core';
import { Maybe, Obj } from './declarations';

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
    const [before, after] = String(num).split(decimalSeparator);

    let x1 = before;
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, `$1${separator}$2`);
    }

    const x2 = after !== undefined ? `${decimalSeparator}${after}` : '';

    return x1 + x2;
}

export enum Lang {
    en = 'en',
    np = 'ne',
}

type Mapping = {
    suffix: string;
    value: number;
}[];

const nepaliMapping = [
    { suffix: 'Ar', value: 1000000000 },
    { suffix: 'Cr', value: 10000000 },
    { suffix: 'Lac', value: 100000 },
];

const englishMapping = [
    { suffix: 'B', value: 1000000000 },
    { suffix: 'M', value: 1000000 },
    { suffix: 'K', value: 1000 },
];

const mappings: Obj<Mapping> = {
    [Lang.np]: nepaliMapping,
    [Lang.en]: englishMapping,
};

/**
 * Get normalized number
 * @param num
 * @param lang language
 */
export function formattedNormalize(num: number, lang: Lang = Lang.np) {
    const mapping = mappings[lang];
    if (isNotDefined(mapping)) {
        console.error(`Mapping not defined for ${lang}`);
        return { number: num };
    }
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
