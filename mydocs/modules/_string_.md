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

▸ **camelToKebab**(`str`: undefined): *undefined*

*Defined in [string.ts:160](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L160)*

Convert camel case to kebab case

**`remarks`** 
Only support alphabets (not numerals)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | undefined |   |

**Returns:** *undefined*

▸ **camelToKebab**(`str`: null): *null*

*Defined in [string.ts:161](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | null |

**Returns:** *null*

▸ **camelToKebab**(`str`: string): *string*

*Defined in [string.ts:162](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

###  camelToNormal

▸ **camelToNormal**(`str`: undefined, `separator?`: undefined | string): *undefined*

*Defined in [string.ts:120](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | undefined |
`separator?` | undefined &#124; string |

**Returns:** *undefined*

▸ **camelToNormal**(`str`: null, `separator?`: undefined | string): *null*

*Defined in [string.ts:121](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | null |
`separator?` | undefined &#124; string |

**Returns:** *null*

▸ **camelToNormal**(`str`: string, `separator?`: undefined | string): *string*

*Defined in [string.ts:122](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`separator?` | undefined &#124; string |

**Returns:** *string*

___

###  camelToSnake

▸ **camelToSnake**(`str`: undefined): *undefined*

*Defined in [string.ts:140](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L140)*

Convert camel case to snake case

**`remarks`** 
Only support alphabets (not numerals)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | undefined |   |

**Returns:** *undefined*

▸ **camelToSnake**(`str`: null): *null*

*Defined in [string.ts:141](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L141)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | null |

**Returns:** *null*

▸ **camelToSnake**(`str`: string): *string*

*Defined in [string.ts:142](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

###  capitalize

▸ **capitalize**(`str`: null): *null*

*Defined in [string.ts:33](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L33)*

Change the first letter of word to uppercase

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | null |   |

**Returns:** *null*

▸ **capitalize**(`str`: undefined): *undefined*

*Defined in [string.ts:34](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | undefined |

**Returns:** *undefined*

▸ **capitalize**(`str`: string): *string*

*Defined in [string.ts:35](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

###  caseInsensitiveSubmatch

▸ **caseInsensitiveSubmatch**(`longText`: [Maybe](_declarations_.md#maybe)‹string | number›, `shortText`: [Maybe](_declarations_.md#maybe)‹string | number›): *boolean*

*Defined in [string.ts:209](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L209)*

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

*Defined in [string.ts:48](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L48)*

Format text, extracted from pdfs, to remove extraneous spaces

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string |   |

**Returns:** *string*

___

###  getRatingForContentInString

▸ **getRatingForContentInString**(`content`: [Maybe](_declarations_.md#maybe)‹string›, `str`: [Maybe](_declarations_.md#maybe)‹string›): *number*

*Defined in [string.ts:71](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L71)*

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

*Defined in [string.ts:18](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L18)*

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

*Defined in [string.ts:85](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L85)*

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

*Defined in [string.ts:177](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L177)*

Split sentence

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | [Maybe](_declarations_.md#maybe)‹string› |   |

**Returns:** *string[]*

___

###  trimWhitespace

▸ **trimWhitespace**(`str`: undefined): *undefined*

*Defined in [string.ts:189](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L189)*

Convert all whitespaces into single space

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | undefined |   |

**Returns:** *undefined*

▸ **trimWhitespace**(`str`: null): *null*

*Defined in [string.ts:190](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L190)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | null |

**Returns:** *null*

▸ **trimWhitespace**(`str`: string): *string*

*Defined in [string.ts:191](https://github.com/toggle-corp/fujs/blob/e17c407/src/string.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*
