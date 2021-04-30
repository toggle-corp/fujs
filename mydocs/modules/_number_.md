[@togglecorp/fujs](../README.md) › [Globals](../globals.md) › ["number"](_number_.md)

# External module: "number"

## Index

### Enumerations

* [Lang](../enums/_number_.lang.md)

### Functions

* [addSeparator](_number_.md#addseparator)
* [formattedNormalize](_number_.md#formattednormalize)

## Functions

###  addSeparator

▸ **addSeparator**(`num`: undefined, `sep?`: undefined | string, `decimalSep?`: undefined | string): *undefined*

*Defined in [number.ts:12](https://github.com/toggle-corp/fujs/blob/e17c407/src/number.ts#L12)*

Get comma separated number

**Parameters:**

Name | Type |
------ | ------ |
`num` | undefined |
`sep?` | undefined &#124; string |
`decimalSep?` | undefined &#124; string |

**Returns:** *undefined*

▸ **addSeparator**(`num`: null, `sep?`: undefined | string, `decimalSep?`: undefined | string): *null*

*Defined in [number.ts:13](https://github.com/toggle-corp/fujs/blob/e17c407/src/number.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`num` | null |
`sep?` | undefined &#124; string |
`decimalSep?` | undefined &#124; string |

**Returns:** *null*

▸ **addSeparator**(`num`: string | number, `sep?`: undefined | string, `decimalSep?`: undefined | string): *string*

*Defined in [number.ts:14](https://github.com/toggle-corp/fujs/blob/e17c407/src/number.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`num` | string &#124; number |
`sep?` | undefined &#124; string |
`decimalSep?` | undefined &#124; string |

**Returns:** *string*

___

###  formattedNormalize

▸ **formattedNormalize**(`num`: number, `lang`: [Lang](../enums/_number_.lang.md)): *object | object*

*Defined in [number.ts:64](https://github.com/toggle-corp/fujs/blob/e17c407/src/number.ts#L64)*

Get normalized number

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`num` | number | - | - |
`lang` | [Lang](../enums/_number_.lang.md) | Lang.np | language  |

**Returns:** *object | object*
