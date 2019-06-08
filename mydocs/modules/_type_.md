[@togglecorp/fujs](../README.md) > ["type"](../modules/_type_.md)

# External module: "type"

## Index

### Variables

* [basicTypes](_type_.md#basictypes)

### Functions

* [isInteger](_type_.md#isinteger)
* [isList](_type_.md#islist)
* [isObject](_type_.md#isobject)
* [isValidEmail](_type_.md#isvalidemail)
* [isValidUrl](_type_.md#isvalidurl)
* [typeOf](_type_.md#typeof)

---

## Variables

<a id="basictypes"></a>

### `<Const>` basicTypes

**● basicTypes**: *`string`[]* =  [
    'Boolean',
    'Number',
    'String',
    'Function',
    'Array',
    'Date',
    'RegExp',
    'Object',
    'Error',
    'Symbol',
]

*Defined in [type.ts:27](https://github.com/toggle-corp/fujs/blob/bd560f8/src/type.ts#L27)*

___

## Functions

<a id="isinteger"></a>

###  isInteger

▸ **isInteger**(value: *`unknown`*): `boolean`

*Defined in [type.ts:23](https://github.com/toggle-corp/fujs/blob/bd560f8/src/type.ts#L23)*

Identifies if item is an integer. Float values are not not considered as integer.

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `unknown` |

**Returns:** `boolean`

___
<a id="islist"></a>

###  isList

▸ **isList**(item: *`unknown`*): `boolean`

*Defined in [type.ts:5](https://github.com/toggle-corp/fujs/blob/bd560f8/src/type.ts#L5)*

Identifies if item is a list.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| item | `unknown` |  anything |

**Returns:** `boolean`

___
<a id="isobject"></a>

###  isObject

▸ **isObject**(item: *`unknown`*): `boolean`

*Defined in [type.ts:14](https://github.com/toggle-corp/fujs/blob/bd560f8/src/type.ts#L14)*

Identifies if item is an object. `null` and `list` are not considered as object.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| item | `unknown` |  anything |

**Returns:** `boolean`

___
<a id="isvalidemail"></a>

###  isValidEmail

▸ **isValidEmail**(value: *`string`*): `boolean`

*Defined in [type.ts:70](https://github.com/toggle-corp/fujs/blob/bd560f8/src/type.ts#L70)*

Identifies if string is a valid email.

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `string` |

**Returns:** `boolean`

___
<a id="isvalidurl"></a>

###  isValidUrl

▸ **isValidUrl**(value: *`string`*): `boolean`

*Defined in [type.ts:79](https://github.com/toggle-corp/fujs/blob/bd560f8/src/type.ts#L79)*

Identifies if string is a valid url.

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `string` |

**Returns:** `boolean`

___
<a id="typeof"></a>

### `<Const>` typeOf

▸ **typeOf**(item: *`unknown`*): `string`

*Defined in [type.ts:55](https://github.com/toggle-corp/fujs/blob/bd560f8/src/type.ts#L55)*

Get type of an item. Valid types: null, boolean, number, string, function, array, date, regexp, object, error, symbol

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| item | `unknown` |  anything |

**Returns:** `string`
type of that item

___

