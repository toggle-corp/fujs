[@togglecorp/fujs](../README.md) > ["number"](../modules/_number_.md)

# External module: "number"

## Index

### Enumerations

* [Lang](../enums/_number_.lang.md)

### Functions

* [addSeparator](_number_.md#addseparator)
* [formattedNormalize](_number_.md#formattednormalize)

---

## Functions

<a id="addseparator"></a>

###  addSeparator

▸ **addSeparator**(num: *[Maybe](_declarations_.md#maybe)<`string` \| `number`>*, separator?: *`string`*, decimalSeparator?: *`string`*): `undefined` \| `null` \| `string`

*Defined in [number.ts:12](https://github.com/toggle-corp/fujs/blob/ade87ee/src/number.ts#L12)*

Get comma separated number

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| num | [Maybe](_declarations_.md#maybe)<`string` \| `number`> | - |  \- |
| `Default value` separator | `string` | &quot;,&quot; |  thousand separator |
| `Default value` decimalSeparator | `string` | &quot;.&quot; |  decimal separator |

**Returns:** `undefined` \| `null` \| `string`

___
<a id="formattednormalize"></a>

###  formattedNormalize

▸ **formattedNormalize**(num: *`number`*, lang?: *[Lang](../enums/_number_.lang.md)*): `object` \| `object`

*Defined in [number.ts:61](https://github.com/toggle-corp/fujs/blob/ade87ee/src/number.ts#L61)*

Get normalized number

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| num | `number` | - |  \- |
| `Default value` lang | [Lang](../enums/_number_.lang.md) |  Lang.np |  language |

**Returns:** `object` \| `object`

___

