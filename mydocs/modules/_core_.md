[@togglecorp/fujs](../README.md) > ["core"](../modules/_core_.md)

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

---

## Functions

<a id="difference"></a>

###  difference

▸ **difference**<`T`>(setA: *`Set`<`T`>*, setB: *`Set`<`T`>*): `Set`<`T`>

*Defined in [core.ts:34](https://github.com/toggle-corp/fujs/blob/bd560f8/src/core.ts#L34)*

Get difference of two sets.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| setA | `Set`<`T`> |  \- |
| setB | `Set`<`T`> |  \- |

**Returns:** `Set`<`T`>
difference between two sets

___
<a id="intersection"></a>

###  intersection

▸ **intersection**<`T`>(setA: *`Set`<`T`>*, setB: *`Set`<`T`>*): `Set`<`T`>

*Defined in [core.ts:24](https://github.com/toggle-corp/fujs/blob/bd560f8/src/core.ts#L24)*

Get intersection of two sets.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| setA | `Set`<`T`> |  \- |
| setB | `Set`<`T`> |  \- |

**Returns:** `Set`<`T`>
intersection of two sets

___
<a id="isdefined"></a>

###  isDefined

▸ **isDefined**<`T`>(val: *[Maybe](_declarations_.md#maybe)<`T`>*): `boolean`

*Defined in [core.ts:62](https://github.com/toggle-corp/fujs/blob/bd560f8/src/core.ts#L62)*

Identifies if value is defined.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| val | [Maybe](_declarations_.md#maybe)<`T`> |   |

**Returns:** `boolean`

___
<a id="isfalsy"></a>

###  isFalsy

▸ **isFalsy**(val: *`unknown`*, override?: *`unknown`[]*): `boolean`

*Defined in [core.ts:72](https://github.com/toggle-corp/fujs/blob/bd560f8/src/core.ts#L72)*

Identifies if value is falsy. undefined, null, NaN and false are considered as false value.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| val | `unknown` | - |  \- |
| `Default value` override | `unknown`[] |  [] |  list of additional values that are considered false values |

**Returns:** `boolean`

___
<a id="isfalsystring"></a>

###  isFalsyString

▸ **isFalsyString**(val: *`unknown`*): `boolean`

*Defined in [core.ts:90](https://github.com/toggle-corp/fujs/blob/bd560f8/src/core.ts#L90)*

Identifies if value is falsy string. undefined, null, NaN, false, '' are considered as false value.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| val | `unknown` |   |

**Returns:** `boolean`

___
<a id="isnan"></a>

###  isNaN

▸ **isNaN**(val: *`unknown`*): `boolean`

*Defined in [core.ts:42](https://github.com/toggle-corp/fujs/blob/bd560f8/src/core.ts#L42)*

Identifies if value is NaN.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| val | `unknown` |   |

**Returns:** `boolean`

___
<a id="isnotdefined"></a>

###  isNotDefined

▸ **isNotDefined**(val: *`unknown`*): `boolean`

*Defined in [core.ts:54](https://github.com/toggle-corp/fujs/blob/bd560f8/src/core.ts#L54)*

Identifies if value is not defined. undefined, null and NaN are not considered as defined.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| val | `unknown` |   |

**Returns:** `boolean`

___
<a id="istruthy"></a>

###  isTruthy

▸ **isTruthy**<`T`>(val: *[Maybe](_declarations_.md#maybe)<`T`>*, override?: *`unknown`[]*): `boolean`

*Defined in [core.ts:81](https://github.com/toggle-corp/fujs/blob/bd560f8/src/core.ts#L81)*

Identifies if value is truthy.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| val | [Maybe](_declarations_.md#maybe)<`T`> | - |  \- |
| `Default value` override | `unknown`[] |  [] |  list of additional values that are considered true values |

**Returns:** `boolean`

___
<a id="istruthystring"></a>

###  isTruthyString

▸ **isTruthyString**(val: *[Maybe](_declarations_.md#maybe)<`string` \| `false`>*): `boolean`

*Defined in [core.ts:98](https://github.com/toggle-corp/fujs/blob/bd560f8/src/core.ts#L98)*

Identifies if value is truthy string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| val | [Maybe](_declarations_.md#maybe)<`string` \| `false`> |   |

**Returns:** `boolean`

___
<a id="noop"></a>

###  noOp

▸ **noOp**(): `void`

*Defined in [core.ts:6](https://github.com/toggle-corp/fujs/blob/bd560f8/src/core.ts#L6)*

Does nothing

**Returns:** `void`

___
<a id="resolve"></a>

###  resolve

▸ **resolve**<`T`>(variable: *`T`*, ...args: *[Parameters](_declarations_.md#parameters)<`T`>*): `any`

*Defined in [core.ts:108](https://github.com/toggle-corp/fujs/blob/bd560f8/src/core.ts#L108)*

Resolves if first argument is function with other arguments as argument to user supplied function.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| variable | `T` |  either a function to resolive or any value |
| `Rest` args | [Parameters](_declarations_.md#parameters)<`T`> |  arguments for user supplied function |

**Returns:** `any`
value resolved from user supplied function

___
<a id="union"></a>

###  union

▸ **union**<`T`>(setA: *`Set`<`T`>*, setB: *`Set`<`T`>*): `Set`<`T`>

*Defined in [core.ts:14](https://github.com/toggle-corp/fujs/blob/bd560f8/src/core.ts#L14)*

Get union of two sets.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| setA | `Set`<`T`> |  \- |
| setB | `Set`<`T`> |  \- |

**Returns:** `Set`<`T`>
union of two sets

___

