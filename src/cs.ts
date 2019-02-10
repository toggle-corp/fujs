import { Maybe } from './declarations';
import { isTruthyString } from './core';

export function _cs(...props: Maybe<string | false>[]): string {
    return props.filter(isTruthyString).join(' ');
}
