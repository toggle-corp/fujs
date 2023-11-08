import { isNotDefined } from './core';

type LinkSelector<T> = (node: T, index: number) => T | undefined;

/**
 * Get nth node from a linked list.
 * @param node the first node of the linked list
 * @param n the nth node after the first node
 * @param selector get next node from current node
 *
 * @returns the nth node
 */
// eslint-disable-next-line import/prefer-default-export
export function getLinkedListNode<T>(node: T, n: number, selector: LinkSelector<T>) {
    let newNode: T | undefined = node;
    for (let i = 0; i < n; i += 1) {
        newNode = selector(newNode, i);
        if (isNotDefined(newNode)) {
            break;
        }
    }
    return newNode;
}
