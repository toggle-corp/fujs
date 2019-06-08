[@togglecorp/fujs](../README.md) > ["object"](../modules/_object_.md)

# External module: "object"

## Index

### Functions

* [doesObjectHaveNoData](_object_.md#doesobjecthavenodata)
* [getFirstKeyByValue](_object_.md#getfirstkeybyvalue)
* [pick](_object_.md#pick)
* [removeKey](_object_.md#removekey)

---

## Functions

<a id="doesobjecthavenodata"></a>

###  doesObjectHaveNoData

▸ **doesObjectHaveNoData**(obj: *`unknown`*, invalids?: *`unknown`[]*): `boolean`

*Defined in [object.ts:23](https://github.com/toggle-corp/fujs/blob/bd560f8/src/object.ts#L23)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| obj | `unknown` | - |
| `Default value` invalids | `unknown`[] |  [] |

**Returns:** `boolean`

___
<a id="getfirstkeybyvalue"></a>

###  getFirstKeyByValue

▸ **getFirstKeyByValue**<`T`>(obj: *`T`*, value: *`unknown`*): `string` \| `undefined`

*Defined in [object.ts:19](https://github.com/toggle-corp/fujs/blob/bd560f8/src/object.ts#L19)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | `T` |
| value | `unknown` |

**Returns:** `string` \| `undefined`

___
<a id="pick"></a>

### `<Const>` pick

▸ **pick**<`T`>(obj: *`T`*, keys: *`keyof T`[]*): `object`

*Defined in [object.ts:4](https://github.com/toggle-corp/fujs/blob/bd560f8/src/object.ts#L4)*

**Type parameters:**

#### T :  `object`
**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | `T` |
| keys | `keyof T`[] |

**Returns:** `object`

___
<a id="removekey"></a>

###  removeKey

▸ **removeKey**<`T`>(obj: *`T`*, key: *`keyof T`*): `T`

*Defined in [object.ts:9](https://github.com/toggle-corp/fujs/blob/bd560f8/src/object.ts#L9)*

**Type parameters:**

#### T :  `object`
**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | `T` |
| key | `keyof T` |

**Returns:** `T`

___

