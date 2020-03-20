[@togglecorp/fujs](../README.md) › [Globals](../globals.md) › ["core"](_core_.md)

# External module: "core"

## Index

### Functions

* [difference](_core_.md#difference)
* [intersection](_core_.md#intersection)
* [isDefined](_core_.md#isdefined)
* [isFalsy](_core_.md#isfalsy)
* [isFalsyString](_core_.md#isfalsystring)
* [isNaN](_core_.md#isnan)
* [isNotDefined](_core_.md#isnotdefined)
* [isTruthy](_core_.md#istruthy)
* [isTruthyString](_core_.md#istruthystring)
* [noOp](_core_.md#noop)
* [resolve](_core_.md#resolve)
* [union](_core_.md#union)

## Functions

###  difference

▸ **difference**<**T**>(`setA`: Set‹T›, `setB`: Set‹T›): *Set‹T›*

*Defined in [core.ts:35](https://github.com/toggle-corp/fujs/blob/4664803/src/core.ts#L35)*

Get difference of two sets.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`setA` | Set‹T› |
`setB` | Set‹T› |

**Returns:** *Set‹T›*

difference between two sets

___

###  intersection

▸ **intersection**<**T**>(`setA`: Set‹T›, `setB`: Set‹T›): *Set‹T›*

*Defined in [core.ts:25](https://github.com/toggle-corp/fujs/blob/4664803/src/core.ts#L25)*

Get intersection of two sets.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`setA` | Set‹T› |
`setB` | Set‹T› |

**Returns:** *Set‹T›*

intersection of two sets

___

###  isDefined

▸ **isDefined**<**T**>(`val`: [Maybe](_declarations_.md#maybe)‹T›): *val is T*

*Defined in [core.ts:63](https://github.com/toggle-corp/fujs/blob/4664803/src/core.ts#L63)*

Identifies if value is defined.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`val` | [Maybe](_declarations_.md#maybe)‹T› |   |

**Returns:** *val is T*

___

###  isFalsy

▸ **isFalsy**(`val`: unknown, `override`: unknown[]): *val is undefined | null*

*Defined in [core.ts:73](https://github.com/toggle-corp/fujs/blob/4664803/src/core.ts#L73)*

Identifies if value is falsy.
undefined, null, NaN and false are considered as false value.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`val` | unknown | - | - |
`override` | unknown[] | [] | list of additional values that are considered false values  |

**Returns:** *val is undefined | null*

___

###  isFalsyString

▸ **isFalsyString**(`val`: unknown): *val is undefined | null*

*Defined in [core.ts:91](https://github.com/toggle-corp/fujs/blob/4664803/src/core.ts#L91)*

Identifies if value is falsy string.
undefined, null, NaN, false, '' are considered as false value.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`val` | unknown |   |

**Returns:** *val is undefined | null*

___

###  isNaN

▸ **isNaN**(`val`: unknown): *boolean*

*Defined in [core.ts:43](https://github.com/toggle-corp/fujs/blob/4664803/src/core.ts#L43)*

Identifies if value is NaN.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`val` | unknown |   |

**Returns:** *boolean*

___

###  isNotDefined

▸ **isNotDefined**(`val`: unknown): *val is undefined | null*

*Defined in [core.ts:55](https://github.com/toggle-corp/fujs/blob/4664803/src/core.ts#L55)*

Identifies if value is not defined.
undefined, null and NaN are not considered as defined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`val` | unknown |   |

**Returns:** *val is undefined | null*

___

###  isTruthy

▸ **isTruthy**<**T**>(`val`: [Maybe](_declarations_.md#maybe)‹T›, `override`: unknown[]): *val is T*

*Defined in [core.ts:82](https://github.com/toggle-corp/fujs/blob/4664803/src/core.ts#L82)*

Identifies if value is truthy.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`val` | [Maybe](_declarations_.md#maybe)‹T› | - | - |
`override` | unknown[] | [] | list of additional values that are considered true values  |

**Returns:** *val is T*

___

###  isTruthyString

▸ **isTruthyString**(`val`: [Maybe](_declarations_.md#maybe)‹string | false›): *val is string*

*Defined in [core.ts:99](https://github.com/toggle-corp/fujs/blob/4664803/src/core.ts#L99)*

Identifies if value is truthy string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`val` | [Maybe](_declarations_.md#maybe)‹string &#124; false› |   |

**Returns:** *val is string*

___

###  noOp

▸ **noOp**(): *void*

*Defined in [core.ts:7](https://github.com/toggle-corp/fujs/blob/4664803/src/core.ts#L7)*

Does nothing

**Returns:** *void*

___

###  resolve

▸ **resolve**<**T**>(`variable`: T, ...`args`: [Parameters](_declarations_.md#parameters)‹T›): *any*

*Defined in [core.ts:110](https://github.com/toggle-corp/fujs/blob/4664803/src/core.ts#L110)*

Resolves if first argument is function with other arguments as argument to
user supplied function.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`variable` | T | either a function to resolive or any value |
`...args` | [Parameters](_declarations_.md#parameters)‹T› | arguments for user supplied function |

**Returns:** *any*

value resolved from user supplied function

___

###  union

▸ **union**<**T**>(`setA`: Set‹T›, `setB`: Set‹T›): *Set‹T›*

*Defined in [core.ts:15](https://github.com/toggle-corp/fujs/blob/4664803/src/core.ts#L15)*

Get union of two sets.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`setA` | Set‹T› |
`setB` | Set‹T› |

**Returns:** *Set‹T›*

union of two sets
