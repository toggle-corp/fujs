[@togglecorp/fujs](../README.md) > ["color"](../modules/_color_.md)

# External module: "color"

## Index

### Functions

* [getColorOnBgColor](_color_.md#getcoloronbgcolor)
* [getContrastYIQ](_color_.md#getcontrastyiq)
* [getHashFromString](_color_.md#gethashfromstring)
* [getHexFromCode](_color_.md#gethexfromcode)
* [getHexFromRgb](_color_.md#gethexfromrgb)
* [getHexFromRgbRaw](_color_.md#gethexfromrgbraw)
* [getHexFromString](_color_.md#gethexfromstring)
* [getRgbFromHex](_color_.md#getrgbfromhex)
* [getRgbRawFromHex](_color_.md#getrgbrawfromhex)
* [interpolateRgb](_color_.md#interpolatergb)
* [isValidHexColor](_color_.md#isvalidhexcolor)

---

## Functions

<a id="getcoloronbgcolor"></a>

###  getColorOnBgColor

▸ **getColorOnBgColor**(color: *`HexColor`*, colorOnLight?: *`HexColor`*, colorOnDark?: *`HexColor`*): `string`

*Defined in [color.ts:39](https://github.com/toggle-corp/fujs/blob/bd560f8/src/color.ts#L39)*

Get appropriate foreground color for a given background color.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| color | `HexColor` | - |  color for background |
| `Default value` colorOnLight | `HexColor` | &quot;#212121&quot; |  color for light background |
| `Default value` colorOnDark | `HexColor` | &quot;#ffffff&quot; |  color for dark background |

**Returns:** `string`
appropriate foreground color

___
<a id="getcontrastyiq"></a>

###  getContrastYIQ

▸ **getContrastYIQ**(color: *`HexColor`*): `number`

*Defined in [color.ts:14](https://github.com/toggle-corp/fujs/blob/bd560f8/src/color.ts#L14)*

Convert hex to yiq colorspace and get the luma value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| color | `HexColor` |  \- |

**Returns:** `number`
yiq luma value

___
<a id="gethashfromstring"></a>

###  getHashFromString

▸ **getHashFromString**(str: *`string`*): `number`

*Defined in [color.ts:48](https://github.com/toggle-corp/fujs/blob/bd560f8/src/color.ts#L48)*

Get hash from a string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  any string |

**Returns:** `number`
hash derived from string

___
<a id="gethexfromcode"></a>

###  getHexFromCode

▸ **getHexFromCode**(code: *`number`*): `HexColor`

*Defined in [color.ts:61](https://github.com/toggle-corp/fujs/blob/bd560f8/src/color.ts#L61)*

Get color from a number.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| code | `number` |  \- |

**Returns:** `HexColor`
color derived from hash

___
<a id="gethexfromrgb"></a>

###  getHexFromRgb

▸ **getHexFromRgb**(color: *`RgbRawColor`*): `undefined` \| `string`

*Defined in [color.ts:83](https://github.com/toggle-corp/fujs/blob/bd560f8/src/color.ts#L83)*

Get hex color from rgb color.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| color | `RgbRawColor` |   |

**Returns:** `undefined` \| `string`

___
<a id="gethexfromrgbraw"></a>

###  getHexFromRgbRaw

▸ **getHexFromRgbRaw**(color: *`RgbColor`*): `string`

*Defined in [color.ts:99](https://github.com/toggle-corp/fujs/blob/bd560f8/src/color.ts#L99)*

Get hex color from rgb color.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| color | `RgbColor` |   |

**Returns:** `string`

___
<a id="gethexfromstring"></a>

###  getHexFromString

▸ **getHexFromString**(str: *`string`*): `string`

*Defined in [color.ts:75](https://github.com/toggle-corp/fujs/blob/bd560f8/src/color.ts#L75)*

Get color from string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  any string |

**Returns:** `string`

___
<a id="getrgbfromhex"></a>

###  getRgbFromHex

▸ **getRgbFromHex**(hex: *`HexColor`*): `RgbRawColor` \| `undefined`

*Defined in [color.ts:126](https://github.com/toggle-corp/fujs/blob/bd560f8/src/color.ts#L126)*

Get rgb color from hex color 'rgb(255, 255, 255)'.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hex | `HexColor` |  hex color '#ffffff' |

**Returns:** `RgbRawColor` \| `undefined`

___
<a id="getrgbrawfromhex"></a>

###  getRgbRawFromHex

▸ **getRgbRawFromHex**(color: *`HexColor`*): `RgbColor` \| `undefined`

*Defined in [color.ts:109](https://github.com/toggle-corp/fujs/blob/bd560f8/src/color.ts#L109)*

Get rgb color from hex color.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| color | `HexColor` |   |

**Returns:** `RgbColor` \| `undefined`

___
<a id="interpolatergb"></a>

###  interpolateRgb

▸ **interpolateRgb**(color1: *`RgbColor`*, color2: *`RgbColor`*, factor?: *`number`*): [`number`, `number`, `number`]

*Defined in [color.ts:144](https://github.com/toggle-corp/fujs/blob/bd560f8/src/color.ts#L144)*

Interpolate two rgb colors.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| color1 | `RgbColor` | - |  \- |
| color2 | `RgbColor` | - |  \- |
| `Default value` factor | `number` | 0.5 |  decides where the interpolated color lies. |

**Returns:** [`number`, `number`, `number`]
interpolated rgb color

___
<a id="isvalidhexcolor"></a>

###  isValidHexColor

▸ **isValidHexColor**(color: *`string`*): `boolean`

*Defined in [color.ts:27](https://github.com/toggle-corp/fujs/blob/bd560f8/src/color.ts#L27)*

Identifies if given color is valid color.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| color | `string` |   |

**Returns:** `boolean`

___

