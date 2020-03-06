[@togglecorp/fujs](../README.md) › [Globals](../globals.md) › ["linkedlist"](_linkedlist_.md)

# External module: "linkedlist"

## Index

### Functions

* [getLinkedListNode](_linkedlist_.md#getlinkedlistnode)

## Functions

###  getLinkedListNode

▸ **getLinkedListNode**<**T**>(`node`: T, `n`: number, `selector`: LinkSelector‹T›): *undefined | T*

*Defined in [linkedlist.ts:16](https://github.com/toggle-corp/fujs/blob/8801a55/src/linkedlist.ts#L16)*

Get nth node from a linked list.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | T | the first node of the linked list |
`n` | number | the nth node after the first node |
`selector` | LinkSelector‹T› | get next node from current node  |

**Returns:** *undefined | T*

the nth node
