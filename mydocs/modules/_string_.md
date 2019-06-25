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

*Defined in [string.ts:104](https://github.com/toggle-corp/fujs/blob/ade87ee/src/string.ts#L104)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | [Maybe](_declarations_.md#maybe)<`string`> |

**Returns:** `undefined` \| `null` \| `string`

___
<a id="cameltonormal"></a>

###  camelToNormal

▸ **camelToNormal**(str: *[Maybe](_declarations_.md#maybe)<`string`>*): `undefined` \| `null` \| `string`

*Defined in [string.ts:118](https://github.com/toggle-corp/fujs/blob/ade87ee/src/string.ts#L118)*

Convert camelcase to space separated words

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | [Maybe](_declarations_.md#maybe)<`string`> |   |

**Returns:** `undefined` \| `null` \| `string`

___
<a id="capitalize"></a>

###  capitalize

▸ **capitalize**(str: *[Maybe](_declarations_.md#maybe)<`string`>*): `undefined` \| `null` \| `string`

*Defined in [string.ts:33](https://github.com/toggle-corp/fujs/blob/ade87ee/src/string.ts#L33)*

Change the first letter of word to uppercase

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | [Maybe](_declarations_.md#maybe)<`string`> |   |

**Returns:** `undefined` \| `null` \| `string`

___
<a id="caseinsensitivesubmatch"></a>

###  caseInsensitiveSubmatch

▸ **caseInsensitiveSubmatch**(longText: *[Maybe](_declarations_.md#maybe)<`string` \| `number`>*, shortText: *[Maybe](_declarations_.md#maybe)<`string` \| `number`>*): `boolean`

*Defined in [string.ts:161](https://github.com/toggle-corp/fujs/blob/ade87ee/src/string.ts#L161)*

Identify if shortText is inside longText

*__remarks__*: The match is case-insensitive

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| longText | [Maybe](_declarations_.md#maybe)<`string` \| `number`> |  \- |
| shortText | [Maybe](_declarations_.md#maybe)<`string` \| `number`> |   |

**Returns:** `boolean`

___
<a id="formatpdftext"></a>

###  formatPdfText

▸ **formatPdfText**(text: *`string`*): `string`

*Defined in [string.ts:45](https://github.com/toggle-corp/fujs/blob/ade87ee/src/string.ts#L45)*

Format text, extracted from pdfs, to remove extraneous spaces

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| text | `string` |   |

**Returns:** `string`

___
<a id="getratingforcontentinstring"></a>

###  getRatingForContentInString

▸ **getRatingForContentInString**(content: *[Maybe](_declarations_.md#maybe)<`string`>*, str: *[Maybe](_declarations_.md#maybe)<`string`>*): `number`

*Defined in [string.ts:68](https://github.com/toggle-corp/fujs/blob/ade87ee/src/string.ts#L68)*

Get rating for content in string

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| content | [Maybe](_declarations_.md#maybe)<`string`> |  \- |
| str | [Maybe](_declarations_.md#maybe)<`string`> |   |

**Returns:** `number`

___
<a id="padstart"></a>

###  padStart

▸ **padStart**(value: *[Maybe](_declarations_.md#maybe)<`string` \| `number`>*, length: *`number`*, pad?: *`string`*): `string`

*Defined in [string.ts:18](https://github.com/toggle-corp/fujs/blob/ade87ee/src/string.ts#L18)*

Add padding before string or number

*__remarks__*: Use when String(num).padStart(length, str) not fully supported

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| value | [Maybe](_declarations_.md#maybe)<`string` \| `number`> | - |  \- |
| length | `number` | - |  total length of the output |
| `Default value` pad | `string` | &quot;0&quot; |  character used to pad |

**Returns:** `string`

___
<a id="randomstring"></a>

###  randomString

▸ **randomString**(length?: *`number`*, mixedCase?: *`boolean`*): `string`

*Defined in [string.ts:82](https://github.com/toggle-corp/fujs/blob/ade87ee/src/string.ts#L82)*

Get random string

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` length | `number` | 8 |  length of the random string |
| `Default value` mixedCase | `boolean` | false |  if uppercase alphabets are to be included |

**Returns:** `string`

___
<a id="splitinwhitespace"></a>

###  splitInWhitespace

▸ **splitInWhitespace**(str: *[Maybe](_declarations_.md#maybe)<`string`>*): `string`[]

*Defined in [string.ts:132](https://github.com/toggle-corp/fujs/blob/ade87ee/src/string.ts#L132)*

Split sentence

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | [Maybe](_declarations_.md#maybe)<`string`> |   |

**Returns:** `string`[]

___
<a id="trimwhitespace"></a>

###  trimWhitespace

▸ **trimWhitespace**(str: *[Maybe](_declarations_.md#maybe)<`string`>*): `undefined` \| `null` \| `string`

*Defined in [string.ts:144](https://github.com/toggle-corp/fujs/blob/ade87ee/src/string.ts#L144)*

Convert all whitespaces into single space

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | [Maybe](_declarations_.md#maybe)<`string`> |   |

**Returns:** `undefined` \| `null` \| `string`

___

