[@togglecorp/fujs](README.md) / Exports

# @togglecorp/fujs

## Table of contents

### Classes

- [Miti](classes/Miti.md)
- [Ymd](classes/Ymd.md)

### Interfaces

- [Dictionary](interfaces/Dictionary.md)
- [KeySelector](interfaces/KeySelector.md)

### Type Aliases

- [FirstArgument](modules.md#firstargument)
- [Maybe](modules.md#maybe)
- [Obj](modules.md#obj)
- [OptionKey](modules.md#optionkey)
- [Parameters](modules.md#parameters)
- [ReturnType](modules.md#returntype)

### Variables

- [AD](modules.md#ad)
- [BS](modules.md#bs)
- [MIN\_YEAR](modules.md#min_year)
- [basicTypes](modules.md#basictypes)

### Functions

- [\_cs](modules.md#_cs)
- [addSeparator](modules.md#addseparator)
- [bound](modules.md#bound)
- [breakFormat](modules.md#breakformat)
- [bucket](modules.md#bucket)
- [camelToKebab](modules.md#cameltokebab)
- [camelToNormal](modules.md#cameltonormal)
- [camelToSnake](modules.md#cameltosnake)
- [capitalize](modules.md#capitalize)
- [caseInsensitiveSubmatch](modules.md#caseinsensitivesubmatch)
- [checkVersion](modules.md#checkversion)
- [compareBoolean](modules.md#compareboolean)
- [compareDate](modules.md#comparedate)
- [compareLength](modules.md#comparelength)
- [compareNumber](modules.md#comparenumber)
- [compareString](modules.md#comparestring)
- [compareStringAsNumber](modules.md#comparestringasnumber)
- [compareStringByWordCount](modules.md#comparestringbywordcount)
- [compareStringSearch](modules.md#comparestringsearch)
- [decodeDate](modules.md#decodedate)
- [difference](modules.md#difference)
- [doesObjectHaveNoData](modules.md#doesobjecthavenodata)
- [encodeDate](modules.md#encodedate)
- [findDifferenceInList](modules.md#finddifferenceinlist)
- [formatDateToString](modules.md#formatdatetostring)
- [formatPdfText](modules.md#formatpdftext)
- [formattedNormalize](modules.md#formattednormalize)
- [getColorOnBgColor](modules.md#getcoloronbgcolor)
- [getContrastYIQ](modules.md#getcontrastyiq)
- [getDate](modules.md#getdate)
- [getDateDifferenceHumanReadable](modules.md#getdatedifferencehumanreadable)
- [getDefinedElementAround](modules.md#getdefinedelementaround)
- [getDifferenceInDays](modules.md#getdifferenceindays)
- [getDuplicates](modules.md#getduplicates)
- [getElementAround](modules.md#getelementaround)
- [getErrorForDateValues](modules.md#geterrorfordatevalues)
- [getErrorForTimeValues](modules.md#geterrorfortimevalues)
- [getFirstKeyByValue](modules.md#getfirstkeybyvalue)
- [getHashFromString](modules.md#gethashfromstring)
- [getHexFromCode](modules.md#gethexfromcode)
- [getHexFromRgb](modules.md#gethexfromrgb)
- [getHexFromRgbRaw](modules.md#gethexfromrgbraw)
- [getHexFromString](modules.md#gethexfromstring)
- [getLinkedListNode](modules.md#getlinkedlistnode)
- [getNumDaysInMonth](modules.md#getnumdaysinmonth)
- [getNumDaysInMonthX](modules.md#getnumdaysinmonthx)
- [getNumbers](modules.md#getnumbers)
- [getRandomFromList](modules.md#getrandomfromlist)
- [getRatingForContentInString](modules.md#getratingforcontentinstring)
- [getRgbFromHex](modules.md#getrgbfromhex)
- [getRgbRawFromHex](modules.md#getrgbrawfromhex)
- [getTrigramSimilarity](modules.md#gettrigramsimilarity)
- [getTrigrams](modules.md#gettrigrams)
- [interpolateRgb](modules.md#interpolatergb)
- [intersection](modules.md#intersection)
- [isDateValuesComplete](modules.md#isdatevaluescomplete)
- [isDefined](modules.md#isdefined)
- [isFalsy](modules.md#isfalsy)
- [isFalsyString](modules.md#isfalsystring)
- [isInteger](modules.md#isinteger)
- [isList](modules.md#islist)
- [isListEqual](modules.md#islistequal)
- [isNaN](modules.md#isnan)
- [isNotDefined](modules.md#isnotdefined)
- [isObject](modules.md#isobject)
- [isParamRequired](modules.md#isparamrequired)
- [isTimeValuesComplete](modules.md#istimevaluescomplete)
- [isTruthy](modules.md#istruthy)
- [isTruthyString](modules.md#istruthystring)
- [isValidEmail](modules.md#isvalidemail)
- [isValidHexColor](modules.md#isvalidhexcolor)
- [isValidUrl](modules.md#isvalidurl)
- [listToGroupList](modules.md#listtogrouplist)
- [listToMap](modules.md#listtomap)
- [mapToList](modules.md#maptolist)
- [mapToMap](modules.md#maptomap)
- [max](modules.md#max)
- [mean](modules.md#mean)
- [median](modules.md#median)
- [min](modules.md#min)
- [modulo](modules.md#modulo)
- [noOp](modules.md#noop)
- [normalize](modules.md#normalize)
- [padStart](modules.md#padstart)
- [pick](modules.md#pick)
- [populateFormat](modules.md#populateformat)
- [randomString](modules.md#randomstring)
- [removeKey](modules.md#removekey)
- [resolve](modules.md#resolve)
- [reverseRoute](modules.md#reverseroute)
- [splitInWhitespace](modules.md#splitinwhitespace)
- [sum](modules.md#sum)
- [trimWhitespace](modules.md#trimwhitespace)
- [typeOf](modules.md#typeof)
- [union](modules.md#union)
- [unique](modules.md#unique)

## Type Aliases

### FirstArgument

Ƭ **FirstArgument**<`T`\>: `T` extends (`arg1`: infer U, ...`args`: `any`[]) => `any` ? `U` : `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[declarations.ts:5](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/declarations.ts#L5)

___

### Maybe

Ƭ **Maybe**<`T`\>: `T` \| `undefined` \| ``null``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[declarations.ts:1](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/declarations.ts#L1)

___

### Obj

Ƭ **Obj**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Index signature

▪ [key: `string`]: `T`

#### Defined in

[declarations.ts:2](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/declarations.ts#L2)

___

### OptionKey

Ƭ **OptionKey**: `string` \| `number`

#### Defined in

[transform.ts:4](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L4)

___

### Parameters

Ƭ **Parameters**<`T`\>: `T` extends (...`args`: infer S) => `any` ? `S` : `undefined`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[declarations.ts:7](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/declarations.ts#L7)

___

### ReturnType

Ƭ **ReturnType**<`T`\>: `T` extends (...`args`: `any`[]) => infer R ? `R` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[declarations.ts:9](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/declarations.ts#L9)

## Variables

### AD

• `Const` **AD**: [`Dictionary`](interfaces/Dictionary.md)

#### Defined in

[calendar.ts:291](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L291)

___

### BS

• `Const` **BS**: [`Dictionary`](interfaces/Dictionary.md)

#### Defined in

[calendar.ts:345](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L345)

___

### MIN\_YEAR

• `Const` **MIN\_YEAR**: ``1990``

#### Defined in

[date.ts:317](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L317)

___

### basicTypes

• `Const` **basicTypes**: `string`[]

#### Defined in

[type.ts:27](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/type.ts#L27)

## Functions

### \_cs

▸ **_cs**(...`props`): `string`

Concatenate valid string into classname

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...props` | [`Maybe`](modules.md#maybe)<`string` \| ``false``\>[] | arguments to concatenate |

#### Returns

`string`

final classname

#### Defined in

[cs.ts:10](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/cs.ts#L10)

___

### addSeparator

▸ **addSeparator**(`num`, `sep?`, `decimalSep?`): `undefined`

Get comma separated number

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `undefined` |
| `sep?` | `string` |
| `decimalSep?` | `string` |

#### Returns

`undefined`

#### Defined in

[number.ts:12](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/number.ts#L12)

▸ **addSeparator**(`num`, `sep?`, `decimalSep?`): ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | ``null`` |
| `sep?` | `string` |
| `decimalSep?` | `string` |

#### Returns

``null``

#### Defined in

[number.ts:13](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/number.ts#L13)

▸ **addSeparator**(`num`, `sep?`, `decimalSep?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` \| `number` |
| `sep?` | `string` |
| `decimalSep?` | `string` |

#### Returns

`string`

#### Defined in

[number.ts:14](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/number.ts#L14)

___

### bound

▸ **bound**(`value`, `a`, `b`): `number`

Get number bounded on two sides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  |
| `a` | `number` | upper or lower bound |
| `b` | `number` | upper or lower bound |

#### Returns

`number`

#### Defined in

[statistics.ts:87](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/statistics.ts#L87)

___

### breakFormat

▸ **breakFormat**(`format`): `Value`[]

Break timedate format into time unit, date unit and other unit.

**`Remarks`**

The date unit are: yyyy, yy, MMM, MM, dd, EEE.
The time unit are: hh, mm, ss, aaa.
Anything can come in between date and time unit and they will be treated as separator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` | format for datetime |

#### Returns

`Value`[]

#### Defined in

[date.ts:61](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L61)

___

### bucket

▸ **bucket**<`T`\>(`value`, `buckets`): `T` \| `undefined`

Get the bucket for a given number

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `buckets` | `Bucket`<`T`\>[] |

#### Returns

`T` \| `undefined`

#### Defined in

[statistics.ts:73](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/statistics.ts#L73)

___

### camelToKebab

▸ **camelToKebab**(`str`): `undefined`

Convert camel case to kebab case

**`Remarks`**

Only support alphabets (not numerals)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `undefined` |

#### Returns

`undefined`

#### Defined in

[string.ts:159](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L159)

▸ **camelToKebab**(`str`): ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | ``null`` |

#### Returns

``null``

#### Defined in

[string.ts:160](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L160)

▸ **camelToKebab**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[string.ts:161](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L161)

___

### camelToNormal

▸ **camelToNormal**(`str`, `separator?`): `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `undefined` |
| `separator?` | `string` |

#### Returns

`undefined`

#### Defined in

[string.ts:119](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L119)

▸ **camelToNormal**(`str`, `separator?`): ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | ``null`` |
| `separator?` | `string` |

#### Returns

``null``

#### Defined in

[string.ts:120](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L120)

▸ **camelToNormal**(`str`, `separator?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `separator?` | `string` |

#### Returns

`string`

#### Defined in

[string.ts:121](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L121)

___

### camelToSnake

▸ **camelToSnake**(`str`): `undefined`

Convert camel case to snake case

**`Remarks`**

Only support alphabets (not numerals)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `undefined` |

#### Returns

`undefined`

#### Defined in

[string.ts:139](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L139)

▸ **camelToSnake**(`str`): ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | ``null`` |

#### Returns

``null``

#### Defined in

[string.ts:140](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L140)

▸ **camelToSnake**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[string.ts:141](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L141)

___

### capitalize

▸ **capitalize**(`str`): ``null``

Change the first letter of word to uppercase

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | ``null`` |

#### Returns

``null``

#### Defined in

[string.ts:33](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L33)

▸ **capitalize**(`str`): `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `undefined` |

#### Returns

`undefined`

#### Defined in

[string.ts:34](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L34)

▸ **capitalize**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[string.ts:35](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L35)

___

### caseInsensitiveSubmatch

▸ **caseInsensitiveSubmatch**(`longText`, `shortText`): `boolean`

Identify if shortText is inside longText

**`Remarks`**

The match is case-insensitive

#### Parameters

| Name | Type |
| :------ | :------ |
| `longText` | [`Maybe`](modules.md#maybe)<`string` \| `number`\> |
| `shortText` | [`Maybe`](modules.md#maybe)<`string` \| `number`\> |

#### Returns

`boolean`

#### Defined in

[string.ts:208](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L208)

___

### checkVersion

▸ **checkVersion**(`oldVersionId`, `newVersionId`): `Object`

Check if new object should be set
and should the message of overriden shown

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldVersionId` | [`Maybe`](modules.md#maybe)<`number`\> |
| `newVersionId` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isValueOverriden` | `boolean` |
| `shouldSetValue` | `boolean` |

#### Defined in

[misc.ts:12](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/misc.ts#L12)

___

### compareBoolean

▸ **compareBoolean**(`x`, `y`, `direction?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | [`Maybe`](modules.md#maybe)<`boolean`\> | `undefined` |
| `y` | [`Maybe`](modules.md#maybe)<`boolean`\> | `undefined` |
| `direction` | `number` | `1` |

#### Returns

`number`

#### Defined in

[comparision.ts:14](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/comparision.ts#L14)

___

### compareDate

▸ **compareDate**(`x`, `y`, `direction?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | [`Maybe`](modules.md#maybe)<`string` \| `number` \| `Date`\> | `undefined` |
| `y` | [`Maybe`](modules.md#maybe)<`string` \| `number` \| `Date`\> | `undefined` |
| `direction` | `number` | `1` |

#### Returns

`number`

#### Defined in

[comparision.ts:14](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/comparision.ts#L14)

___

### compareLength

▸ **compareLength**(`x`, `y`, `direction?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | [`Maybe`](modules.md#maybe)<`string` \| `unknown`[]\> | `undefined` |
| `y` | [`Maybe`](modules.md#maybe)<`string` \| `unknown`[]\> | `undefined` |
| `direction` | `number` | `1` |

#### Returns

`number`

#### Defined in

[comparision.ts:14](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/comparision.ts#L14)

___

### compareNumber

▸ **compareNumber**(`x`, `y`, `direction?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | [`Maybe`](modules.md#maybe)<`number`\> | `undefined` |
| `y` | [`Maybe`](modules.md#maybe)<`number`\> | `undefined` |
| `direction` | `number` | `1` |

#### Returns

`number`

#### Defined in

[comparision.ts:14](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/comparision.ts#L14)

___

### compareString

▸ **compareString**(`x`, `y`, `direction?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | [`Maybe`](modules.md#maybe)<`string`\> | `undefined` |
| `y` | [`Maybe`](modules.md#maybe)<`string`\> | `undefined` |
| `direction` | `number` | `1` |

#### Returns

`number`

#### Defined in

[comparision.ts:14](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/comparision.ts#L14)

___

### compareStringAsNumber

▸ **compareStringAsNumber**(`x`, `y`, `direction?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | [`Maybe`](modules.md#maybe)<`string`\> | `undefined` |
| `y` | [`Maybe`](modules.md#maybe)<`string`\> | `undefined` |
| `direction` | `number` | `1` |

#### Returns

`number`

#### Defined in

[comparision.ts:14](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/comparision.ts#L14)

___

### compareStringByWordCount

▸ **compareStringByWordCount**(`x`, `y`, `direction?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | [`Maybe`](modules.md#maybe)<`string`\> | `undefined` |
| `y` | [`Maybe`](modules.md#maybe)<`string`\> | `undefined` |
| `direction` | `number` | `1` |

#### Returns

`number`

#### Defined in

[comparision.ts:14](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/comparision.ts#L14)

___

### compareStringSearch

▸ **compareStringSearch**(`x`, `y`, `z`, `d?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](modules.md#maybe)<`string`\> |
| `y` | [`Maybe`](modules.md#maybe)<`string`\> |
| `z` | [`Maybe`](modules.md#maybe)<`string`\> |
| `d?` | `number` |

#### Returns

`number`

#### Defined in

[comparision.ts:47](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/comparision.ts#L47)

___

### decodeDate

▸ **decodeDate**(`value`): `undefined`

Change timestamp or 'yyyy-MM-dd' string into date

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `undefined` | timestamp or 'yyyy-MM-dd' string |

#### Returns

`undefined`

#### Defined in

[date.ts:290](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L290)

▸ **decodeDate**(`value`): `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` |

#### Returns

`undefined`

#### Defined in

[date.ts:291](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L291)

▸ **decodeDate**(`value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |

#### Returns

`Date`

#### Defined in

[date.ts:292](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L292)

___

### difference

▸ **difference**<`T`\>(`setA`, `setB`): `Set`<`T`\>

Get difference of two sets.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setA` | `Set`<`T`\> |
| `setB` | `Set`<`T`\> |

#### Returns

`Set`<`T`\>

difference between two sets

#### Defined in

[core.ts:35](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/core.ts#L35)

___

### doesObjectHaveNoData

▸ **doesObjectHaveNoData**(`obj`, `invalids?`): `boolean`

Identify if object has no data

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `unknown` | `undefined` |  |
| `invalids` | `unknown`[] | `[]` | list of values that aren't considered as data |

#### Returns

`boolean`

#### Defined in

[object.ts:43](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/object.ts#L43)

___

### encodeDate

▸ **encodeDate**(`date`): `string`

Change date into 'yyyy-MM-dd' string

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`string`

#### Defined in

[date.ts:281](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L281)

___

### findDifferenceInList

▸ **findDifferenceInList**<`T`, `K`\>(`listA`, `listB`, `keySelector`): `Object`

Find difference between two list

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends [`OptionKey`](modules.md#optionkey) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listA` | `T`[] |  |
| `listB` | `T`[] |  |
| `keySelector` | [`KeySelector`](interfaces/KeySelector.md)<`T`, `K`\> | get key from an element |

#### Returns

`Object`

list of added, modified, removed and unmodified elements

| Name | Type |
| :------ | :------ |
| `added` | `T`[] |
| `modified` | { `new`: `T` ; `old`: `T`  }[] |
| `removed` | `T`[] |
| `unmodified` | `T`[] |

#### Defined in

[list.ts:134](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/list.ts#L134)

___

### formatDateToString

▸ **formatDateToString**(`date`, `format`): `string`

Format date

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` |  |
| `format` | `string` | format for datetime |

#### Returns

`string`

formatted date

#### Defined in

[date.ts:189](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L189)

___

### formatPdfText

▸ **formatPdfText**(`text`): `string`

Format text, extracted from pdfs, to remove extraneous spaces

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[string.ts:48](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L48)

___

### formattedNormalize

▸ **formattedNormalize**(`num`): { `normalizeSuffix`: `undefined` = suffix; `number`: `number` = num } \| { `normalizeSuffix`: `string` = suffix; `number`: `number`  }

Get normalized number

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

{ `normalizeSuffix`: `undefined` = suffix; `number`: `number` = num } \| { `normalizeSuffix`: `string` = suffix; `number`: `number`  }

#### Defined in

[number.ts:37](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/number.ts#L37)

___

### getColorOnBgColor

▸ **getColorOnBgColor**(`color`, `colorOnLight?`, `colorOnDark?`): `string`

Get appropriate foreground color for a given background color.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | `string` | `undefined` | color for background |
| `colorOnLight` | `string` | `'#212121'` | color for light background |
| `colorOnDark` | `string` | `'#ffffff'` | color for dark background |

#### Returns

`string`

appropriate foreground color

#### Defined in

[color.ts:39](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/color.ts#L39)

___

### getContrastYIQ

▸ **getContrastYIQ**(`color`): `number`

Convert hex to yiq colorspace and get the luma value

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`number`

yiq luma value

#### Defined in

[color.ts:14](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/color.ts#L14)

___

### getDate

▸ **getDate**(`datetime`): `number`

Set hour, minute and second to zero in given datetime

#### Parameters

| Name | Type |
| :------ | :------ |
| `datetime` | `string` \| `number` |

#### Returns

`number`

timestamp with hour, minute and second set to zero

#### Defined in

[date.ts:201](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L201)

___

### getDateDifferenceHumanReadable

▸ **getDateDifferenceHumanReadable**(`a`, `b`): `string`

Get number of days betwen two datetime

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | timestamp or a date string |
| `b` | `string` | timestamp or a date string |

#### Returns

`string`

number of days between two datetime

#### Defined in

[date.ts:227](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L227)

___

### getDefinedElementAround

▸ **getDefinedElementAround**<`T`\>(`list`, `currentIndex`): [`Maybe`](modules.md#maybe)<`T`\>

Get a defined element around certain index in a list

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`Maybe`](modules.md#maybe)<`T`\>[] |
| `currentIndex` | `number` |

#### Returns

[`Maybe`](modules.md#maybe)<`T`\>

#### Defined in

[list.ts:52](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/list.ts#L52)

___

### getDifferenceInDays

▸ **getDifferenceInDays**(`a`, `b`): `number`

Get number of days betwen two datetime

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` \| `number` | timestamp or a date string |
| `b` | `string` \| `number` | timestamp or a date string |

#### Returns

`number`

number of days between two datetime

#### Defined in

[date.ts:214](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L214)

___

### getDuplicates

▸ **getDuplicates**<`T`, `K`\>(`list`, `keySelector`): `string`[]

Get a duplicate count for each element in a list

**`Remarks`**

The map only includes element for which there is a duplicate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends [`OptionKey`](modules.md#optionkey) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `list` | `T`[] |  |
| `keySelector` | [`KeySelector`](interfaces/KeySelector.md)<`T`, `K`\> | get key from an element |

#### Returns

`string`[]

map of element key and duplicate count

#### Defined in

[list.ts:99](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/list.ts#L99)

▸ **getDuplicates**<`T`, `K`\>(`list`, `keySelector`): `string`[] \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends [`OptionKey`](modules.md#optionkey) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`Maybe`](modules.md#maybe)<`T`[]\> |
| `keySelector` | [`KeySelector`](interfaces/KeySelector.md)<`T`, `K`\> |

#### Returns

`string`[] \| `undefined`

#### Defined in

[list.ts:103](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/list.ts#L103)

___

### getElementAround

▸ **getElementAround**<`T`\>(`list`, `index`): `T` \| `undefined`

Get an element around certain index in a list

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T`[] |
| `index` | `number` |

#### Returns

`T` \| `undefined`

#### Defined in

[list.ts:36](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/list.ts#L36)

___

### getErrorForDateValues

▸ **getErrorForDateValues**(`ymd`): `undefined` \| `string`

Identify problem with ymd value

**`Remarks`**

The return value will be undefined if there are no problems.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ymd` | `Partial`<`Ymd`\> |

#### Returns

`undefined` \| `string`

#### Defined in

[date.ts:347](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L347)

___

### getErrorForTimeValues

▸ **getErrorForTimeValues**(`val`): `undefined` \| `string`

Identify problem with hms value

**`Remarks`**

The return value will be undefined if there are no problems.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `Partial`<`Hms`\> |

#### Returns

`undefined` \| `string`

#### Defined in

[date.ts:404](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L404)

___

### getFirstKeyByValue

▸ **getFirstKeyByValue**<`T`\>(`obj`, `value`): `string` \| `undefined`

Get key of the first element in an object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `value` | `unknown` |

#### Returns

`string` \| `undefined`

#### Defined in

[object.ts:34](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/object.ts#L34)

___

### getHashFromString

▸ **getHashFromString**(`str`): `number`

Get hash from a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | any string |

#### Returns

`number`

hash derived from string

#### Defined in

[color.ts:48](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/color.ts#L48)

___

### getHexFromCode

▸ **getHexFromCode**(`code`): `HexColor`

Get color from a number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

`HexColor`

color derived from hash

#### Defined in

[color.ts:61](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/color.ts#L61)

___

### getHexFromRgb

▸ **getHexFromRgb**(`color`): `undefined` \| `string`

Get hex color from rgb color.

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[color.ts:93](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/color.ts#L93)

___

### getHexFromRgbRaw

▸ **getHexFromRgbRaw**(`color`): `string`

Get hex color from rgb color.

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `RgbColor` |

#### Returns

`string`

#### Defined in

[color.ts:83](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/color.ts#L83)

___

### getHexFromString

▸ **getHexFromString**(`str`): `string`

Get color from string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | any string |

#### Returns

`string`

#### Defined in

[color.ts:75](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/color.ts#L75)

___

### getLinkedListNode

▸ **getLinkedListNode**<`T`\>(`node`, `n`, `selector`): `undefined` \| `T`

Get nth node from a linked list.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `T` | the first node of the linked list |
| `n` | `number` | the nth node after the first node |
| `selector` | `LinkSelector`<`T`\> | get next node from current node |

#### Returns

`undefined` \| `T`

the nth node

#### Defined in

[linkedlist.ts:16](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/linkedlist.ts#L16)

___

### getNumDaysInMonth

▸ **getNumDaysInMonth**(`date`): `number`

Get number of days in certain year and month from a date

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | [`Maybe`](modules.md#maybe)<`Date`\> |

#### Returns

`number`

number of days

#### Defined in

[date.ts:269](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L269)

___

### getNumDaysInMonthX

▸ **getNumDaysInMonthX**(`year`, `month`): `number`

Get number of days in certain year and month

**`Remarks`**

Month starts from 1 (not zero)

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | [`Maybe`](modules.md#maybe)<`number`\> |
| `month` | [`Maybe`](modules.md#maybe)<`number`\> |

#### Returns

`number`

number of days

#### Defined in

[date.ts:256](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L256)

___

### getNumbers

▸ **getNumbers**(`start`, `end`): `number`[]

Get list of numbers from `start` to `end`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | number from where list starts |
| `end` | `number` | number where list ends |

#### Returns

`number`[]

#### Defined in

[statistics.ts:110](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/statistics.ts#L110)

___

### getRandomFromList

▸ **getRandomFromList**<`T`\>(`items`): `T`

Get a random item from the list

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `T`[] |

#### Returns

`T`

#### Defined in

[list.ts:26](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/list.ts#L26)

___

### getRatingForContentInString

▸ **getRatingForContentInString**(`content`, `str`): `number`

Get rating for content in string

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`Maybe`](modules.md#maybe)<`string`\> |
| `str` | [`Maybe`](modules.md#maybe)<`string`\> |

#### Returns

`number`

#### Defined in

[string.ts:71](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L71)

___

### getRgbFromHex

▸ **getRgbFromHex**(`hex`): `RgbRawColor` \| `undefined`

Get rgb color from hex color 'rgb(255, 255, 255)'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | hex color '#ffffff' |

#### Returns

`RgbRawColor` \| `undefined`

#### Defined in

[color.ts:126](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/color.ts#L126)

___

### getRgbRawFromHex

▸ **getRgbRawFromHex**(`color`): `RgbColor` \| `undefined`

Get rgb color from hex color.

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`RgbColor` \| `undefined`

#### Defined in

[color.ts:109](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/color.ts#L109)

___

### getTrigramSimilarity

▸ **getTrigramSimilarity**(`foo`, `bar`): `number`

Get trigram similarity between two sentences

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `foo` | `string` | first string |
| `bar` | `string` | second string |

#### Returns

`number`

#### Defined in

[stringSimilarity.ts:29](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/stringSimilarity.ts#L29)

___

### getTrigrams

▸ **getTrigrams**(`sentence`): `Set`<`string`\>

Get trigrams from a sentence

#### Parameters

| Name | Type |
| :------ | :------ |
| `sentence` | `string` |

#### Returns

`Set`<`string`\>

#### Defined in

[stringSimilarity.ts:7](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/stringSimilarity.ts#L7)

___

### interpolateRgb

▸ **interpolateRgb**(`color1`, `color2`, `factor?`): `RgbColor`

Interpolate two rgb colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color1` | `RgbColor` | `undefined` |  |
| `color2` | `RgbColor` | `undefined` |  |
| `factor` | `number` | `0.5` | decides where the interpolated color lies. |

#### Returns

`RgbColor`

interpolated rgb color

#### Defined in

[color.ts:144](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/color.ts#L144)

___

### intersection

▸ **intersection**<`T`\>(`setA`, `setB`): `Set`<`T`\>

Get intersection of two sets.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setA` | `Set`<`T`\> |
| `setB` | `Set`<`T`\> |

#### Returns

`Set`<`T`\>

intersection of two sets

#### Defined in

[core.ts:25](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/core.ts#L25)

___

### isDateValuesComplete

▸ **isDateValuesComplete**(`ymd`): ymd is Ymd

Identify if ymd value is complete

#### Parameters

| Name | Type |
| :------ | :------ |
| `ymd` | `Partial`<`Ymd`\> |

#### Returns

ymd is Ymd

#### Defined in

[date.ts:330](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L330)

___

### isDefined

▸ **isDefined**<`T`\>(`val`): val is T

Identifies if value is defined.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`Maybe`](modules.md#maybe)<`T`\> |

#### Returns

val is T

#### Defined in

[core.ts:63](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/core.ts#L63)

___

### isFalsy

▸ **isFalsy**(`val`, `override?`): val is undefined \| null

Identifies if value is falsy.
undefined, null, NaN and false are considered as false value.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `val` | `unknown` | `undefined` |  |
| `override` | `unknown`[] | `[]` | list of additional values that are considered false values |

#### Returns

val is undefined \| null

#### Defined in

[core.ts:73](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/core.ts#L73)

___

### isFalsyString

▸ **isFalsyString**(`val`): val is undefined \| null

Identifies if value is falsy string.
undefined, null, NaN, false, '' are considered as false value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

val is undefined \| null

#### Defined in

[core.ts:91](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/core.ts#L91)

___

### isInteger

▸ **isInteger**(`value`): value is number

Identifies if item is an integer.
Float values are not not considered as integer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is number

#### Defined in

[type.ts:23](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/type.ts#L23)

___

### isList

▸ **isList**(`item`): item is unknown[]

Identifies if item is a list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `unknown` | anything |

#### Returns

item is unknown[]

#### Defined in

[type.ts:5](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/type.ts#L5)

___

### isListEqual

▸ **isListEqual**(`list1`, `list2`): `boolean`

Identify if two list are the same

**`Remarks`**

The function assumes that the elements aren't mutated

#### Parameters

| Name | Type |
| :------ | :------ |
| `list1` | `unknown`[] |
| `list2` | `unknown`[] |

#### Returns

`boolean`

#### Defined in

[list.ts:14](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/list.ts#L14)

___

### isNaN

▸ **isNaN**(`val`): `boolean`

Identifies if value is NaN.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

`boolean`

#### Defined in

[core.ts:43](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/core.ts#L43)

___

### isNotDefined

▸ **isNotDefined**(`val`): val is undefined \| null

Identifies if value is not defined.
undefined, null and NaN are not considered as defined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

val is undefined \| null

#### Defined in

[core.ts:55](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/core.ts#L55)

___

### isObject

▸ **isObject**(`item`): item is object

Identifies if item is an object.
`null` and `list` are not considered as object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `unknown` | anything |

#### Returns

item is object

#### Defined in

[type.ts:14](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/type.ts#L14)

___

### isParamRequired

▸ **isParamRequired**(`route`, `param`): `boolean`

Identify if param is required in certain route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `route` | `string` | route template |
| `param` | `string` | parameter name |

#### Returns

`boolean`

#### Defined in

[route.ts:50](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/route.ts#L50)

___

### isTimeValuesComplete

▸ **isTimeValuesComplete**(`val`): val is Hms

Identify if hms value is complete

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `Partial`<`Hms`\> |

#### Returns

val is Hms

#### Defined in

[date.ts:387](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L387)

___

### isTruthy

▸ **isTruthy**<`T`\>(`val`, `override?`): val is T

Identifies if value is truthy.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `val` | [`Maybe`](modules.md#maybe)<`T`\> | `undefined` |  |
| `override` | `unknown`[] | `[]` | list of additional values that are considered true values |

#### Returns

val is T

#### Defined in

[core.ts:82](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/core.ts#L82)

___

### isTruthyString

▸ **isTruthyString**(`val`): val is string

Identifies if value is truthy string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`Maybe`](modules.md#maybe)<`string` \| ``false``\> |

#### Returns

val is string

#### Defined in

[core.ts:99](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/core.ts#L99)

___

### isValidEmail

▸ **isValidEmail**(`value`): `boolean`

Identifies if string is a valid email.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`boolean`

#### Defined in

[type.ts:70](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/type.ts#L70)

___

### isValidHexColor

▸ **isValidHexColor**(`color`): `boolean`

Identifies if given color is valid color.

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`boolean`

#### Defined in

[color.ts:27](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/color.ts#L27)

___

### isValidUrl

▸ **isValidUrl**(`value`): `boolean`

Identifies if string is a valid url.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`boolean`

#### Defined in

[type.ts:79](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/type.ts#L79)

___

### listToGroupList

▸ **listToGroupList**<`T`, `K`\>(`list`, `keySelector`): [`Obj`](modules.md#obj)<`T`[]\>

Group list into object of list.
Items in list are grouped by key returned by keySelector

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends [`OptionKey`](modules.md#optionkey) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `list` | `T`[] |  |
| `keySelector` | [`KeySelector`](interfaces/KeySelector.md)<`T`, `K`\> | get key for item in list |

#### Returns

[`Obj`](modules.md#obj)<`T`[]\>

#### Defined in

[transform.ts:158](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L158)

▸ **listToGroupList**<`T`, `K`\>(`list`, `keySelector`): [`Obj`](modules.md#obj)<`T`[]\> \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends [`OptionKey`](modules.md#optionkey) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`Maybe`](modules.md#maybe)<`T`[]\> |
| `keySelector` | [`KeySelector`](interfaces/KeySelector.md)<`T`, `K`\> |

#### Returns

[`Obj`](modules.md#obj)<`T`[]\> \| `undefined`

#### Defined in

[transform.ts:162](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L162)

▸ **listToGroupList**<`T`, `Q`, `K`\>(`list`, `keySelector`, `modifier`): [`Obj`](modules.md#obj)<`Q`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Q` | `Q` |
| `K` | extends [`OptionKey`](modules.md#optionkey) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T`[] |
| `keySelector` | [`KeySelector`](interfaces/KeySelector.md)<`T`, `K`\> |
| `modifier` | `GroupListModifier`<`T`, `Q`, `K`\> |

#### Returns

[`Obj`](modules.md#obj)<`Q`[]\>

#### Defined in

[transform.ts:166](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L166)

▸ **listToGroupList**<`T`, `Q`, `K`\>(`list`, `keySelector`, `modifier`): [`Obj`](modules.md#obj)<`Q`[]\> \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Q` | `Q` |
| `K` | extends [`OptionKey`](modules.md#optionkey) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`Maybe`](modules.md#maybe)<`T`[]\> |
| `keySelector` | [`KeySelector`](interfaces/KeySelector.md)<`T`, `K`\> |
| `modifier` | `GroupListModifier`<`T`, `Q`, `K`\> |

#### Returns

[`Obj`](modules.md#obj)<`Q`[]\> \| `undefined`

#### Defined in

[transform.ts:171](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L171)

___

### listToMap

▸ **listToMap**<`T`, `K`\>(`list`, `keySelector`): `Record`<`K`, `T`\>

Transform list to object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends [`OptionKey`](modules.md#optionkey) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `list` | `T`[] |  |
| `keySelector` | [`KeySelector`](interfaces/KeySelector.md)<`T`, `K`\> | get key from item in list |

#### Returns

`Record`<`K`, `T`\>

#### Defined in

[transform.ts:29](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L29)

▸ **listToMap**<`T`, `K`\>(`list`, `keySelector`): `Record`<`K`, `T`\> \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends [`OptionKey`](modules.md#optionkey) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`Maybe`](modules.md#maybe)<`T`[]\> |
| `keySelector` | [`KeySelector`](interfaces/KeySelector.md)<`T`, `K`\> |

#### Returns

`Record`<`K`, `T`\> \| `undefined`

#### Defined in

[transform.ts:33](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L33)

▸ **listToMap**<`T`, `Q`, `K`\>(`list`, `keySelector`, `modifier`): `Record`<`K`, `Q`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Q` | `Q` |
| `K` | extends [`OptionKey`](modules.md#optionkey) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T`[] |
| `keySelector` | [`KeySelector`](interfaces/KeySelector.md)<`T`, `K`\> |
| `modifier` | `Modifier`<`T`, `Q`, `K`\> |

#### Returns

`Record`<`K`, `Q`\>

#### Defined in

[transform.ts:37](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L37)

▸ **listToMap**<`T`, `Q`, `K`\>(`list`, `keySelector`, `modifier`): `Record`<`K`, `Q`\> \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Q` | `Q` |
| `K` | extends [`OptionKey`](modules.md#optionkey) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`Maybe`](modules.md#maybe)<`T`[]\> |
| `keySelector` | [`KeySelector`](interfaces/KeySelector.md)<`T`, `K`\> |
| `modifier` | `Modifier`<`T`, `Q`, `K`\> |

#### Returns

`Record`<`K`, `Q`\> \| `undefined`

#### Defined in

[transform.ts:42](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L42)

___

### mapToList

▸ **mapToList**<`T`\>(`obj`): `T`[]

Transform object to list

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Obj`](modules.md#obj)<`T`\> |

#### Returns

`T`[]

#### Defined in

[transform.ts:74](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L74)

▸ **mapToList**<`T`\>(`obj`): `T`[] \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Maybe`](modules.md#maybe)<[`Obj`](modules.md#obj)<`T`\>\> |

#### Returns

`T`[] \| `undefined`

#### Defined in

[transform.ts:77](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L77)

▸ **mapToList**<`T`, `Q`\>(`obj`, `modifier`): `Q`[]

#### Type parameters

| Name |
| :------ |
| `T` |
| `Q` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Obj`](modules.md#obj)<`T`\> |
| `modifier` | `ListModifier`<`T`, `Q`, `string`\> |

#### Returns

`Q`[]

#### Defined in

[transform.ts:80](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L80)

▸ **mapToList**<`T`, `Q`\>(`obj`, `modifier`): `Q`[] \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |
| `Q` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Maybe`](modules.md#maybe)<[`Obj`](modules.md#obj)<`T`\>\> |
| `modifier` | `ListModifier`<`T`, `Q`, `string`\> |

#### Returns

`Q`[] \| `undefined`

#### Defined in

[transform.ts:84](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L84)

___

### mapToMap

▸ **mapToMap**<`T`, `K`\>(`obj`, `keySelector?`): `Record`<`K`, `T`\>

Transform object to object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends [`OptionKey`](modules.md#optionkey) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Obj`](modules.md#obj)<`T`\> |  |
| `keySelector?` | `NewKeySelector`<`T`, `K`\> | get new key for item in object |

#### Returns

`Record`<`K`, `T`\>

#### Defined in

[transform.ts:111](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L111)

▸ **mapToMap**<`T`, `K`\>(`obj`, `keySelector?`): `Record`<`K`, `T`\> \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends [`OptionKey`](modules.md#optionkey) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Maybe`](modules.md#maybe)<[`Obj`](modules.md#obj)<`T`\>\> |
| `keySelector?` | `NewKeySelector`<`T`, `K`\> |

#### Returns

`Record`<`K`, `T`\> \| `undefined`

#### Defined in

[transform.ts:115](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L115)

▸ **mapToMap**<`T`, `Q`, `K`\>(`obj`, `keySelector`, `modifier`): `Record`<`K`, `Q`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Q` | `Q` |
| `K` | extends [`OptionKey`](modules.md#optionkey) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Obj`](modules.md#obj)<`T`\> |
| `keySelector` | `undefined` \| `NewKeySelector`<`T`, `K`\> |
| `modifier` | `Modifier`<`T`, `Q`, `string`\> |

#### Returns

`Record`<`K`, `Q`\>

#### Defined in

[transform.ts:119](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L119)

▸ **mapToMap**<`T`, `Q`, `K`\>(`obj`, `keySelector`, `modifier`): `Record`<`K`, `Q`\> \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Q` | `Q` |
| `K` | extends [`OptionKey`](modules.md#optionkey) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Maybe`](modules.md#maybe)<[`Obj`](modules.md#obj)<`T`\>\> |
| `keySelector` | `undefined` \| `NewKeySelector`<`T`, `K`\> |
| `modifier` | `Modifier`<`T`, `Q`, `string`\> |

#### Returns

`Record`<`K`, `Q`\> \| `undefined`

#### Defined in

[transform.ts:124](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/transform.ts#L124)

___

### max

▸ **max**<`T`\>(`list`, `comparator`): `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`Maybe`](modules.md#maybe)<`T`[]\> |
| `comparator` | (`val`: `T`) => `number` |

#### Returns

`T` \| `undefined`

#### Defined in

[list.ts:215](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/list.ts#L215)

___

### mean

▸ **mean**(`values`): `number`

Get mean of all elements in a list

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |

#### Returns

`number`

#### Defined in

[statistics.ts:38](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/statistics.ts#L38)

___

### median

▸ **median**(`values`): `undefined` \| `number`

Get median of all elements in a list

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |

#### Returns

`undefined` \| `number`

#### Defined in

[statistics.ts:50](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/statistics.ts#L50)

___

### min

▸ **min**<`T`\>(`list`, `comparator`): `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`Maybe`](modules.md#maybe)<`T`[]\> |
| `comparator` | (`val`: `T`) => `number` |

#### Returns

`T` \| `undefined`

#### Defined in

[list.ts:231](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/list.ts#L231)

___

### modulo

▸ **modulo**(`a`, `b`): `number`

Get `a` modulo `b`

**`Remarks`**

Return a positive modulo

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | dividend |
| `b` | `number` | divisor |

#### Returns

`number`

#### Defined in

[statistics.ts:9](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/statistics.ts#L9)

___

### noOp

▸ **noOp**(): `void`

Does nothing

#### Returns

`void`

#### Defined in

[core.ts:7](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/core.ts#L7)

___

### normalize

▸ **normalize**(`value`, `max`, `min`): `number`

Get normalized value for a number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  |
| `max` | `number` | max value |
| `min` | `number` | min value |

#### Returns

`number`

#### Defined in

[statistics.ts:100](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/statistics.ts#L100)

___

### padStart

▸ **padStart**(`value`, `length`, `pad?`): `string`

Add padding before string or number

**`Remarks`**

Use when String(num).padStart(length, str) not fully supported

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | [`Maybe`](modules.md#maybe)<`string` \| `number`\> | `undefined` |  |
| `length` | `number` | `undefined` | total length of the output |
| `pad` | `string` | `'0'` | character used to pad |

#### Returns

`string`

#### Defined in

[string.ts:18](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L18)

___

### pick

▸ **pick**<`T`\>(`obj`, `keys`): `Object`

Pick only certain keys from an object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `keys` | keyof `T`[] |

#### Returns

`Object`

#### Defined in

[object.ts:9](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/object.ts#L9)

___

### populateFormat

▸ **populateFormat**(`formatList`, `date`): `Value`[]

Populate the format list with date

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `formatList` | `Value`[] | the list of datetime units |
| `date` | `Date` |  |

#### Returns

`Value`[]

#### Defined in

[date.ts:140](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/date.ts#L140)

___

### randomString

▸ **randomString**(`length?`, `mixedCase?`): `string`

Get random string

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `length` | `number` | `16` | length of the random string |
| `mixedCase` | `boolean` | `false` | if uppercase alphabets are to be included |

#### Returns

`string`

#### Defined in

[string.ts:85](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L85)

___

### removeKey

▸ **removeKey**<`T`\>(`obj`, `key`): `T`

Remove a certain key from an object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `key` | keyof `T` |

#### Returns

`T`

#### Defined in

[object.ts:19](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/object.ts#L19)

___

### resolve

▸ **resolve**<`T`\>(`variable`, ...`args`): `any`

Resolves if first argument is function with other arguments as argument to
user supplied function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variable` | `T` | either a function to resolive or any value |
| `...args` | [`Parameters`](modules.md#parameters)<`T`\> | arguments for user supplied function |

#### Returns

`any`

value resolved from user supplied function

#### Defined in

[core.ts:110](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/core.ts#L110)

___

### reverseRoute

▸ **reverseRoute**(`route`, `params`): `string`

Fill parameters in route url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `route` | `string` | route template |
| `params` | [`Obj`](modules.md#obj)<`string` \| `number`\> | map of values |

#### Returns

`string`

#### Defined in

[route.ts:9](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/route.ts#L9)

___

### splitInWhitespace

▸ **splitInWhitespace**(`str`): `string`[]

Split sentence

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | [`Maybe`](modules.md#maybe)<`string`\> |

#### Returns

`string`[]

#### Defined in

[string.ts:176](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L176)

___

### sum

▸ **sum**(`values`): `number`

Get sum of all elements in a list

**`Remarks`**

Return a positive modulo

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |

#### Returns

`number`

#### Defined in

[statistics.ts:26](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/statistics.ts#L26)

___

### trimWhitespace

▸ **trimWhitespace**(`str`): `undefined`

Convert all whitespaces into single space

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `undefined` |

#### Returns

`undefined`

#### Defined in

[string.ts:188](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L188)

▸ **trimWhitespace**(`str`): ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | ``null`` |

#### Returns

``null``

#### Defined in

[string.ts:189](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L189)

▸ **trimWhitespace**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[string.ts:190](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/string.ts#L190)

___

### typeOf

▸ **typeOf**(`item`): `string`

Get type of an item.
Valid types: null, boolean, number, string, function, array, date, regexp, object, error, symbol

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `unknown` | anything |

#### Returns

`string`

type of that item

#### Defined in

[type.ts:55](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/type.ts#L55)

___

### union

▸ **union**<`T`\>(`setA`, `setB`): `Set`<`T`\>

Get union of two sets.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setA` | `Set`<`T`\> |
| `setB` | `Set`<`T`\> |

#### Returns

`Set`<`T`\>

union of two sets

#### Defined in

[core.ts:15](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/core.ts#L15)

___

### unique

▸ **unique**<`T`\>(`list`, `getItemHash?`): `undefined`

Find unique items from a list

**`Remarks`**

If getItemHash is not supplied, comparision is done by casting items in list
to string

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `list` | `undefined` |  |
| `getItemHash?` | (`item`: `T`) => `string` \| `number` | method to get id to check uniqueness |

#### Returns

`undefined`

#### Defined in

[list.ts:182](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/list.ts#L182)

▸ **unique**<`T`\>(`list`, `getItemHash?`): `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | ``null`` |
| `getItemHash?` | (`item`: `T`) => `string` \| `number` |

#### Returns

`undefined`

#### Defined in

[list.ts:183](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/list.ts#L183)

▸ **unique**<`T`\>(`list`, `getItemHash?`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T`[] |
| `getItemHash?` | (`item`: `T`) => `string` \| `number` |

#### Returns

`T`[]

#### Defined in

[list.ts:184](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/list.ts#L184)
