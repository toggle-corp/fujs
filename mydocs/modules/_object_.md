[@togglecorp/fujs](../README.md) › [Globals](../globals.md) › ["object"](_object_.md)

# External module: "object"

## Index

### Functions

* [doesObjectHaveNoData](_object_.md#doesobjecthavenodata)
* [getFirstKeyByValue](_object_.md#getfirstkeybyvalue)
* [pick](_object_.md#const-pick)
* [removeKey](_object_.md#removekey)

## Functions

###  doesObjectHaveNoData

▸ **doesObjectHaveNoData**(`obj`: unknown, `invalids`: unknown[]): *boolean*

*Defined in [object.ts:43](https://github.com/toggle-corp/fujs/blob/e17c407/src/object.ts#L43)*

Identify if object has no data

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`obj` | unknown | - | - |
`invalids` | unknown[] | [] | list of values that aren't considered as data  |

**Returns:** *boolean*

___

###  getFirstKeyByValue

▸ **getFirstKeyByValue**<**T**>(`obj`: T, `value`: unknown): *string | undefined*

*Defined in [object.ts:34](https://github.com/toggle-corp/fujs/blob/e17c407/src/object.ts#L34)*

Get key of the first element in an object

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | T | - |
`value` | unknown |   |

**Returns:** *string | undefined*

___

### `Const` pick

▸ **pick**<**T**>(`obj`: T, `keys`: keyof T[]): *object*

*Defined in [object.ts:9](https://github.com/toggle-corp/fujs/blob/e17c407/src/object.ts#L9)*

Pick only certain keys from an object

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | T | - |
`keys` | keyof T[] |   |

**Returns:** *object*

___

###  removeKey

▸ **removeKey**<**T**>(`obj`: T, `key`: keyof T): *T*

*Defined in [object.ts:19](https://github.com/toggle-corp/fujs/blob/e17c407/src/object.ts#L19)*

Remove a certain key from an object

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | T | - |
`key` | keyof T |   |

**Returns:** *T*
