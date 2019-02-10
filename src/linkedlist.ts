import { isNotDefined } from './core';

interface LinkSelector<T> {
    (node: T, index: number): T
}
export function getLinkedListNode<T>(linkedList: T, n: number, selector: LinkSelector<T>) {
    let newList = linkedList;
    for (let i = 0; i < n; i += 1) {
        newList = selector(newList, i);
        if (isNotDefined(newList)) {
            break;
        }
    }
    return newList;
};
