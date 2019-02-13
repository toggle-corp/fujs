import { getLinkedListNode } from './linkedlist';

test('get linked list node', () => {
    interface Node {
        value: number,
        child?: Node,
    }

    const selector = (node: Node) => node.child;
    const foo: Node = {
        value: 12,
        child: undefined,
    };
    const bar: Node = {
        value: 11,
        child: foo,
    };
    const baz: Node = {
        value: 11,
        child: bar,
    };
    expect(getLinkedListNode(baz, 0, selector)).toEqual(baz);
    expect(getLinkedListNode(baz, 1, selector)).toEqual(bar);
    expect(getLinkedListNode(baz, 2, selector)).toEqual(foo);
    expect(getLinkedListNode(baz, 3, selector)).toEqual(undefined);
});
