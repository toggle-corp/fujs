[@togglecorp/fujs](../README.md) › [Globals](../globals.md) › ["transform"](_transform_.md)

# External module: "transform"

## Index

### Functions

* [listToGroupList](_transform_.md#listtogrouplist)
* [listToMap](_transform_.md#listtomap)
* [mapToList](_transform_.md#maptolist)
* [mapToMap](_transform_.md#maptomap)

## Functions

###  listToGroupList

▸ **listToGroupList**<**T**>(`list`: [Maybe](_declarations_.md#maybe)‹T[]›, `keySelector`: KeySelector‹T›): *[Obj](_declarations_.md#obj)‹T[]›*

*Defined in [transform.ts:115](https://github.com/toggle-corp/fujs/blob/4664803/src/transform.ts#L115)*

Group list into object of list.
Items in list are grouped by key returned by keySelector

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | [Maybe](_declarations_.md#maybe)‹T[]› | - |
`keySelector` | KeySelector‹T› | get key for item in list |

**Returns:** *[Obj](_declarations_.md#obj)‹T[]›*

▸ **listToGroupList**<**T**, **Q**>(`list`: [Maybe](_declarations_.md#maybe)‹T[]›, `keySelector`: KeySelector‹T›, `modifier`: Modifier‹T, Q›): *[Obj](_declarations_.md#obj)‹Q[]›*

*Defined in [transform.ts:119](https://github.com/toggle-corp/fujs/blob/4664803/src/transform.ts#L119)*

**Type parameters:**

▪ **T**

▪ **Q**

**Parameters:**

Name | Type |
------ | ------ |
`list` | [Maybe](_declarations_.md#maybe)‹T[]› |
`keySelector` | KeySelector‹T› |
`modifier` | Modifier‹T, Q› |

**Returns:** *[Obj](_declarations_.md#obj)‹Q[]›*

___

###  listToMap

▸ **listToMap**<**T**>(`list`: [Maybe](_declarations_.md#maybe)‹T[]›, `keySelector`: KeySelector‹T›): *[Obj](_declarations_.md#obj)‹T›*

*Defined in [transform.ts:24](https://github.com/toggle-corp/fujs/blob/4664803/src/transform.ts#L24)*

Transform list to object

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | [Maybe](_declarations_.md#maybe)‹T[]› | - |
`keySelector` | KeySelector‹T› | get key from item in list |

**Returns:** *[Obj](_declarations_.md#obj)‹T›*

▸ **listToMap**<**T**, **Q**>(`list`: [Maybe](_declarations_.md#maybe)‹T[]›, `keySelector`: KeySelector‹T›, `modifier`: Modifier‹T, Q›): *[Obj](_declarations_.md#obj)‹Q›*

*Defined in [transform.ts:28](https://github.com/toggle-corp/fujs/blob/4664803/src/transform.ts#L28)*

**Type parameters:**

▪ **T**

▪ **Q**

**Parameters:**

Name | Type |
------ | ------ |
`list` | [Maybe](_declarations_.md#maybe)‹T[]› |
`keySelector` | KeySelector‹T› |
`modifier` | Modifier‹T, Q› |

**Returns:** *[Obj](_declarations_.md#obj)‹Q›*

___

###  mapToList

▸ **mapToList**<**T**>(`obj`: [Maybe](_declarations_.md#maybe)‹[Obj](_declarations_.md#obj)‹T››): *T[]*

*Defined in [transform.ts:58](https://github.com/toggle-corp/fujs/blob/4664803/src/transform.ts#L58)*

Transform object to list

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [Maybe](_declarations_.md#maybe)‹[Obj](_declarations_.md#obj)‹T›› |

**Returns:** *T[]*

▸ **mapToList**<**T**, **Q**>(`obj`: [Maybe](_declarations_.md#maybe)‹[Obj](_declarations_.md#obj)‹T››, `modifier`: ListModifier‹T, Q›): *Q[]*

*Defined in [transform.ts:59](https://github.com/toggle-corp/fujs/blob/4664803/src/transform.ts#L59)*

**Type parameters:**

▪ **T**

▪ **Q**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [Maybe](_declarations_.md#maybe)‹[Obj](_declarations_.md#obj)‹T›› |
`modifier` | ListModifier‹T, Q› |

**Returns:** *Q[]*

___

###  mapToMap

▸ **mapToMap**<**T**>(`obj`: [Maybe](_declarations_.md#maybe)‹[Obj](_declarations_.md#obj)‹T››, `keySelector?`: NewKeySelector‹T›): *[Obj](_declarations_.md#obj)‹T›*

*Defined in [transform.ts:80](https://github.com/toggle-corp/fujs/blob/4664803/src/transform.ts#L80)*

Transform object to object

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | [Maybe](_declarations_.md#maybe)‹[Obj](_declarations_.md#obj)‹T›› | - |
`keySelector?` | NewKeySelector‹T› | get new key for item in object |

**Returns:** *[Obj](_declarations_.md#obj)‹T›*

▸ **mapToMap**<**T**, **Q**>(`obj`: [Maybe](_declarations_.md#maybe)‹[Obj](_declarations_.md#obj)‹T››, `keySelector`: NewKeySelector‹T› | undefined, `modifier`: Modifier‹T, Q›): *[Obj](_declarations_.md#obj)‹Q›*

*Defined in [transform.ts:84](https://github.com/toggle-corp/fujs/blob/4664803/src/transform.ts#L84)*

**Type parameters:**

▪ **T**

▪ **Q**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [Maybe](_declarations_.md#maybe)‹[Obj](_declarations_.md#obj)‹T›› |
`keySelector` | NewKeySelector‹T› &#124; undefined |
`modifier` | Modifier‹T, Q› |

**Returns:** *[Obj](_declarations_.md#obj)‹Q›*
