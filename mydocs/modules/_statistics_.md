[@togglecorp/fujs](../README.md) > ["statistics"](../modules/_statistics_.md)

# External module: "statistics"

## Index

### Functions

* [bound](_statistics_.md#bound)
* [bucket](_statistics_.md#bucket)
* [getNumbers](_statistics_.md#getnumbers)
* [mean](_statistics_.md#mean)
* [median](_statistics_.md#median)
* [modulo](_statistics_.md#modulo)
* [normalize](_statistics_.md#normalize)
* [sum](_statistics_.md#sum)

---

## Functions

<a id="bound"></a>

###  bound

▸ **bound**(value: *`number`*, a: *`number`*, b: *`number`*): `number`

*Defined in [statistics.ts:48](https://github.com/toggle-corp/fujs/blob/bd560f8/src/statistics.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `number` |
| a | `number` |
| b | `number` |

**Returns:** `number`

___
<a id="bucket"></a>

###  bucket

▸ **bucket**<`T`>(value: *`number`*, buckets: *`Bucket`<`T`>[]*): `T` \| `undefined`

*Defined in [statistics.ts:41](https://github.com/toggle-corp/fujs/blob/bd560f8/src/statistics.ts#L41)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `number` |
| buckets | `Bucket`<`T`>[] |

**Returns:** `T` \| `undefined`

___
<a id="getnumbers"></a>

###  getNumbers

▸ **getNumbers**(start: *`number`*, end: *`number`*): `number`[]

*Defined in [statistics.ts:58](https://github.com/toggle-corp/fujs/blob/bd560f8/src/statistics.ts#L58)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| start | `number` |
| end | `number` |

**Returns:** `number`[]

___
<a id="mean"></a>

###  mean

▸ **mean**(values: *`number`[]*): `number`

*Defined in [statistics.ts:17](https://github.com/toggle-corp/fujs/blob/bd560f8/src/statistics.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| values | `number`[] |

**Returns:** `number`

___
<a id="median"></a>

###  median

▸ **median**(values: *`number`[]*): `undefined` \| `number`

*Defined in [statistics.ts:24](https://github.com/toggle-corp/fujs/blob/bd560f8/src/statistics.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| values | `number`[] |

**Returns:** `undefined` \| `number`

___
<a id="modulo"></a>

###  modulo

▸ **modulo**(x: *`number`*, length: *`number`*): `number`

*Defined in [statistics.ts:1](https://github.com/toggle-corp/fujs/blob/bd560f8/src/statistics.ts#L1)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| length | `number` |

**Returns:** `number`

___
<a id="normalize"></a>

###  normalize

▸ **normalize**(value: *`number`*, max: *`number`*, min: *`number`*): `number`

*Defined in [statistics.ts:54](https://github.com/toggle-corp/fujs/blob/bd560f8/src/statistics.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `number` |
| max | `number` |
| min | `number` |

**Returns:** `number`

___
<a id="sum"></a>

###  sum

▸ **sum**(values: *`number`[]*): `number`

*Defined in [statistics.ts:10](https://github.com/toggle-corp/fujs/blob/bd560f8/src/statistics.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| values | `number`[] |

**Returns:** `number`

___

