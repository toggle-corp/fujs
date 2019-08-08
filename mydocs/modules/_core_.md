> **[@togglecorp/fujs](../README.md)**

[Globals](../globals.md) / ["core"](_core_.md) /

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

▸ **difference**<**T**>(`setA`: `Set<T>`, `setB`: `Set<T>`): *`Set<T>`*

*Defined in [core.ts:34](https://github.com/toggle-corp/fujs/blob/6346fe3/src/core.ts#L34)*

Get difference of two sets.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`setA` | `Set<T>` |
`setB` | `Set<T>` |

**Returns:** *`Set<T>`*

difference between two sets

___

###  intersection

▸ **intersection**<**T**>(`setA`: `Set<T>`, `setB`: `Set<T>`): *`Set<T>`*

*Defined in [core.ts:24](https://github.com/toggle-corp/fujs/blob/6346fe3/src/core.ts#L24)*

Get intersection of two sets.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`setA` | `Set<T>` |
`setB` | `Set<T>` |

**Returns:** *`Set<T>`*

intersection of two sets

___

###  isDefined

▸ **isDefined**<**T**>(`val`: [Maybe](_declarations_.md#maybe)‹*`T`*›): *boolean*

*Defined in [core.ts:62](https://github.com/toggle-corp/fujs/blob/6346fe3/src/core.ts#L62)*

Identifies if value is defined.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`val` | [Maybe](_declarations_.md#maybe)‹*`T`*› |   |

**Returns:** *boolean*

___

###  isFalsy

▸ **isFalsy**(`val`: unknown, `override`: unknown[]): *boolean*

*Defined in [core.ts:72](https://github.com/toggle-corp/fujs/blob/6346fe3/src/core.ts#L72)*

Identifies if value is falsy.
undefined, null, NaN and false are considered as false value.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`val` | unknown | - | - |
`override` | unknown[] |  [] | list of additional values that are considered false values  |

**Returns:** *boolean*

___

###  isFalsyString

▸ **isFalsyString**(`val`: unknown): *boolean*

*Defined in [core.ts:90](https://github.com/toggle-corp/fujs/blob/6346fe3/src/core.ts#L90)*

Identifies if value is falsy string.
undefined, null, NaN, false, '' are considered as false value.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`val` | unknown |   |

**Returns:** *boolean*

___

###  isNaN

▸ **isNaN**(`val`: unknown): *boolean*

*Defined in [core.ts:42](https://github.com/toggle-corp/fujs/blob/6346fe3/src/core.ts#L42)*

Identifies if value is NaN.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`val` | unknown |   |

**Returns:** *boolean*

___

###  isNotDefined

▸ **isNotDefined**(`val`: unknown): *boolean*

*Defined in [core.ts:54](https://github.com/toggle-corp/fujs/blob/6346fe3/src/core.ts#L54)*

Identifies if value is not defined.
undefined, null and NaN are not considered as defined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`val` | unknown |   |

**Returns:** *boolean*

___

###  isTruthy

▸ **isTruthy**<**T**>(`val`: [Maybe](_declarations_.md#maybe)‹*`T`*›, `override`: unknown[]): *boolean*

*Defined in [core.ts:81](https://github.com/toggle-corp/fujs/blob/6346fe3/src/core.ts#L81)*

Identifies if value is truthy.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`val` | [Maybe](_declarations_.md#maybe)‹*`T`*› | - | - |
`override` | unknown[] |  [] | list of additional values that are considered true values  |

**Returns:** *boolean*

___

###  isTruthyString

▸ **isTruthyString**(`val`: [Maybe](_declarations_.md#maybe)‹*string | false*›): *boolean*

*Defined in [core.ts:98](https://github.com/toggle-corp/fujs/blob/6346fe3/src/core.ts#L98)*

Identifies if value is truthy string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`val` | [Maybe](_declarations_.md#maybe)‹*string \| false*› |   |

**Returns:** *boolean*

___

###  noOp

▸ **noOp**(): *void*

*Defined in [core.ts:6](https://github.com/toggle-corp/fujs/blob/6346fe3/src/core.ts#L6)*

Does nothing

**Returns:** *void*

___

###  resolve

▸ **resolve**<**T**>(`variable`: `T`, ...`args`: [Parameters](_declarations_.md#parameters)‹*`T`*›): *any*

*Defined in [core.ts:108](https://github.com/toggle-corp/fujs/blob/6346fe3/src/core.ts#L108)*

Resolves if first argument is function with other arguments as argument to user supplied function.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`variable` | `T` | either a function to resolive or any value |
`...args` | [Parameters](_declarations_.md#parameters)‹*`T`*› | arguments for user supplied function |

**Returns:** *any*

value resolved from user supplied function

___

###  union

▸ **union**<**T**>(`setA`: `Set<T>`, `setB`: `Set<T>`): *`Set<T>`*

*Defined in [core.ts:14](https://github.com/toggle-corp/fujs/blob/6346fe3/src/core.ts#L14)*

Get union of two sets.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`setA` | `Set<T>` |
`setB` | `Set<T>` |

**Returns:** *`Set<T>`*

union of two sets