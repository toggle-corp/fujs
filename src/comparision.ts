import { Maybe } from './declarations';
import { isNotDefined, isDefined } from './core';

type Extractor<A, B> = (input: A) => B;
type Comparator<A> = (foo: A, bar: A) => number;

function comparison<A, B>(
    extractor: Extractor<A, B>,
    comparisonFunc: Comparator<B>,
) {
    return (
        x: Maybe<A>,
        y: Maybe<A>,
        direction = 1,
    ): number => {
        const a = isDefined(x) ? extractor(x) : undefined;
        const b = isDefined(y) ? extractor(y) : undefined;
        if (a === b) {
            return 0;
        }
        if (isNotDefined(a)) {
            return direction * 1;
        }
        if (isNotDefined(b)) {
            return direction * -1;
        }
        return direction * comparisonFunc(a, b);
    };
}

// NOTE: func is never called for boolean
export const compareBoolean = comparison((x: boolean) => x, (a, b) => (Number(a) - Number(b)));
export const compareString = comparison((x: string) => x, (a, b) => a.localeCompare(b));
export const compareNumber = comparison((x: number) => x, (a, b) => (a - b));
export const compareDate = comparison((x: Date | string | number) => x, (a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getTime() - dateB.getTime();
});

export const compareStringAsNumber = comparison((x: string) => Number(x), (a, b) => a - b);
export const compareLength = comparison((x: string | unknown[]) => x.length, (a, b) => (a - b));
export const compareStringByWordCount = comparison((x: string) => x.split(/\s+/).length, (a, b) => a - b);

export const compareStringSearch = (
    x: Maybe<string>,
    y: Maybe<string>,
    z: Maybe<string>,
    d?: number,
) => {
    if (!z) {
        return 0;
    }
    return comparison(
        (a: string) => a,
        (a: string, b: string) => {
            const searchText = z.toLowerCase();
            const firstIndex = a.toLowerCase().indexOf(searchText);
            const secondIndex = b.toLowerCase().indexOf(searchText);

            if (firstIndex === secondIndex) {
                return a.localeCompare(b);
            }

            if (firstIndex === -1 && secondIndex === -1) {
                return a.localeCompare(b);
            }
            if (secondIndex === -1) {
                return -1;
            }
            if (firstIndex === -1) {
                return 1;
            }
            return firstIndex - secondIndex;
        },
    )(x, y, d);
};
