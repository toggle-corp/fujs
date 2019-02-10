import { Maybe } from './declarations';
import { isNotDefined, isDefined } from './core';

interface Extractor<A, B>{
    (input: A): B
}
interface Comparator<A> {
    (foo: A, bar: A): number
}

const comparision = <A, B>(extractor: Extractor<A, B>, comparisionFunc: Comparator<B>) => (x: Maybe<A>, y: Maybe<A>, direction: number = 1): number => {
    const a = isDefined(x) ? extractor(x) : undefined;
    const b = isDefined(y) ? extractor(y) : undefined;
    if (a === b) {
        return 0;
    } else if (isNotDefined(a)) {
        return direction * 1;
    } else if (isNotDefined(b)) {
        return direction * -1;
    }
    return direction * comparisionFunc(a, b);
};

// NOTE: func is never called for boolean
export const compareBoolean = comparision((x: boolean) => x, (a, b) => (Number(a) - Number(b)));
export const compareString = comparision((x: string) => x, (a, b) => a.localeCompare(b));
export const compareNumber = comparision((x: number) => x, (a, b) => (a - b));
export const compareDate = comparision((x: Date) => x, (a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getTime() - dateB.getTime();
});

export const compareStringAsNumber = comparision((x: string) => Number(x), (a, b) => a - b);
export const compareLength = comparision((x: string | unknown[]) => x.length, (a, b) => (a - b));
export const compareStringByWordCount = comparision((x: string) => x.split(/\s+/).length, (a, b) => a - b);
