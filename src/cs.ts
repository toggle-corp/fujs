import { Maybe } from './declarations';
import { isTruthyString } from './core';

/**
 * Concatenate valid string into classname
 * @param props arguments to concatenate
 * @returns final classname
 */
export function _cs(...props: Maybe<string | false>[]): string {
    return props.filter(isTruthyString).join(' ');
}
