> **[@togglecorp/fujs](../README.md)**

[Globals](../globals.md) / ["list"](_list_.md) /

# External module: "list"

## Index

### Functions

* [findDifferenceInList](_list_.md#finddifferenceinlist)
* [getDefinedElementAround](_list_.md#getdefinedelementaround)
* [getDuplicates](_list_.md#getduplicates)
* [getElementAround](_list_.md#getelementaround)
* [getRandomFromList](_list_.md#getrandomfromlist)
* [isListEqual](_list_.md#islistequal)
* [unique](_list_.md#unique)

## Functions

###  findDifferenceInList

▸ **findDifferenceInList**<**T**>(`listA`: `T`[], `listB`: `T`[], `keySelector`: `KeySelector<T>`): *object*

*Defined in [list.ts:120](https://github.com/toggle-corp/fujs/blob/6346fe3/src/list.ts#L120)*

Find difference between two list

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listA` | `T`[] | - |
`listB` | `T`[] | - |
`keySelector` | `KeySelector<T>` | get key from an element  |

**Returns:** *object*

list of added, modified, removed and unmodified elements

___

###  getDefinedElementAround

▸ **getDefinedElementAround**<**T**>(`list`: [Maybe](_declarations_.md#maybe)‹*`T`*›[], `currentIndex`: number): *undefined | null | `T`*

*Defined in [list.ts:51](https://github.com/toggle-corp/fujs/blob/6346fe3/src/list.ts#L51)*

Get a defined element around certain index in a list

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`list` | [Maybe](_declarations_.md#maybe)‹*`T`*›[] |
`currentIndex` | number |

**Returns:** *undefined | null | `T`*

___

###  getDuplicates

▸ **getDuplicates**<**T**>(`list`: [Maybe](_declarations_.md#maybe)‹*`T`[]*›, `keySelector`: `KeySelector<T>`): *string[]*

*Defined in [list.ts:100](https://github.com/toggle-corp/fujs/blob/6346fe3/src/list.ts#L100)*

Get a duplicate count for each element in a list

**`remarks`** 
The map only includes element for which there is a duplicate

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | [Maybe](_declarations_.md#maybe)‹*`T`[]*› | - |
`keySelector` | `KeySelector<T>` | get key from an element  |

**Returns:** *string[]*

map of element key and duplicate count

___

###  getElementAround

▸ **getElementAround**<**T**>(`list`: `T`[], `index`: number): *`T` | undefined*

*Defined in [list.ts:36](https://github.com/toggle-corp/fujs/blob/6346fe3/src/list.ts#L36)*

Get an element around certain index in a list

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | `T`[] | - |
`index` | number |   |

**Returns:** *`T` | undefined*

___

###  getRandomFromList

▸ **getRandomFromList**<**T**>(`items`: `T`[]): *`T`*

*Defined in [list.ts:26](https://github.com/toggle-corp/fujs/blob/6346fe3/src/list.ts#L26)*

Get a random item from the list

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`items` | `T`[] |   |

**Returns:** *`T`*

___

###  isListEqual

▸ **isListEqual**(`list1`: unknown[], `list2`: unknown[]): *boolean*

*Defined in [list.ts:14](https://github.com/toggle-corp/fujs/blob/6346fe3/src/list.ts#L14)*

Indentify if two list are the same

**`remarks`** 
The function assumes that the elements aren't mutated

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list1` | unknown[] | - |
`list2` | unknown[] |   |

**Returns:** *boolean*

___

###  unique

▸ **unique**<**T**>(`list`: `T`[] | undefined, `getItemHash?`: undefined | function): *undefined | `T`[]*

*Defined in [list.ts:164](https://github.com/toggle-corp/fujs/blob/6346fe3/src/list.ts#L164)*

Find unique items from a list

**`remarks`** 
If getItemHash is not supplied, comparision is done by casting items in list
to string

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | `T`[] \| undefined | - |
`getItemHash?` | undefined \| function | method to get id to check uniqueness  |

**Returns:** *undefined | `T`[]*