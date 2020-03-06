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

▸ **addSeparator**(`num`: [Maybe](_declarations_.md#maybe)‹string | number›, `separator`: string, `decimalSeparator`: string): *undefined | null | string*

*Defined in [number.ts:12](https://github.com/toggle-corp/fujs/blob/8801a55/src/number.ts#L12)*

Get comma separated number

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`num` | [Maybe](_declarations_.md#maybe)‹string &#124; number› | - | - |
`separator` | string | "," | thousand separator |
`decimalSeparator` | string | "." | decimal separator  |

**Returns:** *undefined | null | string*

___

###  formattedNormalize

▸ **formattedNormalize**(`num`: number, `lang`: [Lang](../enums/_number_.lang.md)): *object | object*

*Defined in [number.ts:65](https://github.com/toggle-corp/fujs/blob/8801a55/src/number.ts#L65)*

Get normalized number

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`num` | number | - | - |
`lang` | [Lang](../enums/_number_.lang.md) | Lang.np | language  |

**Returns:** *object | object*
