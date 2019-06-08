[@togglecorp/fujs](../README.md) > ["string"](../modules/_string_.md)

# External module: "string"

## Index

### Functions

* [camelToKebab](_string_.md#cameltokebab)
* [camelToNormal](_string_.md#cameltonormal)
* [capitalize](_string_.md#capitalize)
* [caseInsensitiveSubmatch](_string_.md#caseinsensitivesubmatch)
* [formatPdfText](_string_.md#formatpdftext)
* [getRatingForContentInString](_string_.md#getratingforcontentinstring)
* [padStart](_string_.md#padstart)
* [randomString](_string_.md#randomstring)
* [splitInWhitespace](_string_.md#splitinwhitespace)
* [trimWhitespace](_string_.md#trimwhitespace)

---

## Functions

<a id="cameltokebab"></a>

###  camelToKebab

▸ **camelToKebab**(str: *[Maybe](_declarations_.md#maybe)<`string`>*): `undefined` \| `null` \| `string`

*Defined in [string.ts:77](https://github.com/toggle-corp/fujs/blob/bd560f8/src/string.ts#L77)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | [Maybe](_declarations_.md#maybe)<`string`> |

**Returns:** `undefined` \| `null` \| `string`

___
<a id="cameltonormal"></a>

###  camelToNormal

▸ **camelToNormal**(str: *[Maybe](_declarations_.md#maybe)<`string`>*): `undefined` \| `null` \| `string`

*Defined in [string.ts:90](https://github.com/toggle-corp/fujs/blob/bd560f8/src/string.ts#L90)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | [Maybe](_declarations_.md#maybe)<`string`> |

**Returns:** `undefined` \| `null` \| `string`

___
<a id="capitalize"></a>

###  capitalize

▸ **capitalize**(str: *[Maybe](_declarations_.md#maybe)<`string`>*): `undefined` \| `null` \| `string`

*Defined in [string.ts:19](https://github.com/toggle-corp/fujs/blob/bd560f8/src/string.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | [Maybe](_declarations_.md#maybe)<`string`> |

**Returns:** `undefined` \| `null` \| `string`

___
<a id="caseinsensitivesubmatch"></a>

###  caseInsensitiveSubmatch

▸ **caseInsensitiveSubmatch**(longText: *[Maybe](_declarations_.md#maybe)<`string` \| `number`>*, shortText: *[Maybe](_declarations_.md#maybe)<`string` \| `number`>*): `boolean`

*Defined in [string.ts:114](https://github.com/toggle-corp/fujs/blob/bd560f8/src/string.ts#L114)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| longText | [Maybe](_declarations_.md#maybe)<`string` \| `number`> |
| shortText | [Maybe](_declarations_.md#maybe)<`string` \| `number`> |

**Returns:** `boolean`

___
<a id="formatpdftext"></a>

###  formatPdfText

▸ **formatPdfText**(text: *`string`*): `string`

*Defined in [string.ts:30](https://github.com/toggle-corp/fujs/blob/bd560f8/src/string.ts#L30)*

Format text, extracted from pdfs, to remove extraneous spaces

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `string`

___
<a id="getratingforcontentinstring"></a>

###  getRatingForContentInString

▸ **getRatingForContentInString**(content: *[Maybe](_declarations_.md#maybe)<`string`>*, str: *[Maybe](_declarations_.md#maybe)<`string`>*): `number`

*Defined in [string.ts:48](https://github.com/toggle-corp/fujs/blob/bd560f8/src/string.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| content | [Maybe](_declarations_.md#maybe)<`string`> |
| str | [Maybe](_declarations_.md#maybe)<`string`> |

**Returns:** `number`

___
<a id="padstart"></a>

###  padStart

▸ **padStart**(num: *[Maybe](_declarations_.md#maybe)<`string` \| `number`>*, length: *`number`*, pad?: *`string`*): `string`

*Defined in [string.ts:9](https://github.com/toggle-corp/fujs/blob/bd560f8/src/string.ts#L9)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| num | [Maybe](_declarations_.md#maybe)<`string` \| `number`> | - |
| length | `number` | - |
| `Default value` pad | `string` | &quot;0&quot; |

**Returns:** `string`

___
<a id="randomstring"></a>

###  randomString

▸ **randomString**(length?: *`number`*, mixedCase?: *`boolean`*): `string`

*Defined in [string.ts:55](https://github.com/toggle-corp/fujs/blob/bd560f8/src/string.ts#L55)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` length | `number` | 8 |
| `Default value` mixedCase | `boolean` | false |

**Returns:** `string`

___
<a id="splitinwhitespace"></a>

###  splitInWhitespace

▸ **splitInWhitespace**(str: *[Maybe](_declarations_.md#maybe)<`string`>*): `string`[]

*Defined in [string.ts:99](https://github.com/toggle-corp/fujs/blob/bd560f8/src/string.ts#L99)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | [Maybe](_declarations_.md#maybe)<`string`> |

**Returns:** `string`[]

___
<a id="trimwhitespace"></a>

###  trimWhitespace

▸ **trimWhitespace**(str: *[Maybe](_declarations_.md#maybe)<`string`>*): `undefined` \| `null` \| `string`

*Defined in [string.ts:106](https://github.com/toggle-corp/fujs/blob/bd560f8/src/string.ts#L106)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | [Maybe](_declarations_.md#maybe)<`string`> |

**Returns:** `undefined` \| `null` \| `string`

___

