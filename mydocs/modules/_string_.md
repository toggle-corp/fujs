[@togglecorp/fujs](../README.md) › [Globals](../globals.md) › ["string"](_string_.md)

# External module: "string"

## Index

### Functions

* [camelToKebab](_string_.md#cameltokebab)
* [camelToNormal](_string_.md#cameltonormal)
* [camelToSnake](_string_.md#cameltosnake)
* [capitalize](_string_.md#capitalize)
* [caseInsensitiveSubmatch](_string_.md#caseinsensitivesubmatch)
* [formatPdfText](_string_.md#formatpdftext)
* [getRatingForContentInString](_string_.md#getratingforcontentinstring)
* [padStart](_string_.md#padstart)
* [randomString](_string_.md#randomstring)
* [splitInWhitespace](_string_.md#splitinwhitespace)
* [trimWhitespace](_string_.md#trimwhitespace)

## Functions

###  camelToKebab

▸ **camelToKebab**(`str`: [Maybe](_declarations_.md#maybe)‹string›): *undefined | null | string*

*Defined in [string.ts:149](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/string.ts#L149)*

Convert camel case to kebab case

**`remarks`** 
Only support alphabets (not numerals)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | [Maybe](_declarations_.md#maybe)‹string› |   |

**Returns:** *undefined | null | string*

___

###  camelToNormal

▸ **camelToNormal**(`str`: [Maybe](_declarations_.md#maybe)‹string›, `separator`: string): *undefined | null | string*

*Defined in [string.ts:116](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/string.ts#L116)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`str` | [Maybe](_declarations_.md#maybe)‹string› | - |
`separator` | string | " " |

**Returns:** *undefined | null | string*

___

###  camelToSnake

▸ **camelToSnake**(`str`: [Maybe](_declarations_.md#maybe)‹string›): *undefined | null | string*

*Defined in [string.ts:133](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/string.ts#L133)*

Convert camel case to snake case

**`remarks`** 
Only support alphabets (not numerals)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | [Maybe](_declarations_.md#maybe)‹string› |   |

**Returns:** *undefined | null | string*

___

###  capitalize

▸ **capitalize**(`str`: [Maybe](_declarations_.md#maybe)‹string›): *undefined | null | string*

*Defined in [string.ts:33](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/string.ts#L33)*

Change the first letter of word to uppercase

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | [Maybe](_declarations_.md#maybe)‹string› |   |

**Returns:** *undefined | null | string*

___

###  caseInsensitiveSubmatch

▸ **caseInsensitiveSubmatch**(`longText`: [Maybe](_declarations_.md#maybe)‹string | number›, `shortText`: [Maybe](_declarations_.md#maybe)‹string | number›): *boolean*

*Defined in [string.ts:191](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/string.ts#L191)*

Identify if shortText is inside longText

**`remarks`** 
The match is case-insensitive

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`longText` | [Maybe](_declarations_.md#maybe)‹string &#124; number› | - |
`shortText` | [Maybe](_declarations_.md#maybe)‹string &#124; number› |   |

**Returns:** *boolean*

___

###  formatPdfText

▸ **formatPdfText**(`text`: string): *string*

*Defined in [string.ts:45](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/string.ts#L45)*

Format text, extracted from pdfs, to remove extraneous spaces

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string |   |

**Returns:** *string*

___

###  getRatingForContentInString

▸ **getRatingForContentInString**(`content`: [Maybe](_declarations_.md#maybe)‹string›, `str`: [Maybe](_declarations_.md#maybe)‹string›): *number*

*Defined in [string.ts:68](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/string.ts#L68)*

Get rating for content in string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`content` | [Maybe](_declarations_.md#maybe)‹string› | - |
`str` | [Maybe](_declarations_.md#maybe)‹string› |   |

**Returns:** *number*

___

###  padStart

▸ **padStart**(`value`: [Maybe](_declarations_.md#maybe)‹string | number›, `length`: number, `pad`: string): *string*

*Defined in [string.ts:18](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/string.ts#L18)*

Add padding before string or number

**`remarks`** 
Use when String(num).padStart(length, str) not fully supported

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | [Maybe](_declarations_.md#maybe)‹string &#124; number› | - | - |
`length` | number | - | total length of the output |
`pad` | string | "0" | character used to pad  |

**Returns:** *string*

___

###  randomString

▸ **randomString**(`length`: number, `mixedCase`: boolean): *string*

*Defined in [string.ts:82](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/string.ts#L82)*

Get random string

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`length` | number | 16 | length of the random string |
`mixedCase` | boolean | false | if uppercase alphabets are to be included  |

**Returns:** *string*

___

###  splitInWhitespace

▸ **splitInWhitespace**(`str`: [Maybe](_declarations_.md#maybe)‹string›): *string[]*

*Defined in [string.ts:162](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/string.ts#L162)*

Split sentence

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | [Maybe](_declarations_.md#maybe)‹string› |   |

**Returns:** *string[]*

___

###  trimWhitespace

▸ **trimWhitespace**(`str`: [Maybe](_declarations_.md#maybe)‹string›): *undefined | null | string*

*Defined in [string.ts:174](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/string.ts#L174)*

Convert all whitespaces into single space

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | [Maybe](_declarations_.md#maybe)‹string› |   |

**Returns:** *undefined | null | string*
