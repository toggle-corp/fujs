[@togglecorp/fujs](../README.md) / [Exports](../modules.md) / Miti

# Class: Miti

## Hierarchy

- [`Ymd`](Ymd.md)

  ↳ **`Miti`**

## Table of contents

### Constructors

- [constructor](Miti.md#constructor)

### Methods

- [addDays](Miti.md#adddays)
- [addMonths](Miti.md#addmonths)
- [addYears](Miti.md#addyears)
- [convertTo](Miti.md#convertto)
- [getDay](Miti.md#getday)
- [getDaysInCurrentMonth](Miti.md#getdaysincurrentmonth)
- [getDaysInCurrentYear](Miti.md#getdaysincurrentyear)
- [getDifference](Miti.md#getdifference)
- [getMonth](Miti.md#getmonth)
- [getString](Miti.md#getstring)
- [getWeek](Miti.md#getweek)
- [getYear](Miti.md#getyear)
- [isEqual](Miti.md#isequal)
- [isGreaterThan](Miti.md#isgreaterthan)
- [isGreaterThanOrEqual](Miti.md#isgreaterthanorequal)
- [isLessThan](Miti.md#islessthan)
- [isLessThanOrEqual](Miti.md#islessthanorequal)
- [isNotEqual](Miti.md#isnotequal)
- [subtractDays](Miti.md#subtractdays)

## Constructors

### constructor

• **new Miti**(`year`, `month`, `day`, `dict`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |
| `month` | `number` |
| `day` | `number` |
| `dict` | [`Dictionary`](../interfaces/Dictionary.md) |

#### Overrides

[Ymd](Ymd.md).[constructor](Ymd.md#constructor)

#### Defined in

[calendar.ts:72](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L72)

## Methods

### addDays

▸ **addDays**(`no`): [`Miti`](Miti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `no` | `number` |

#### Returns

[`Miti`](Miti.md)

#### Defined in

[calendar.ts:173](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L173)

___

### addMonths

▸ **addMonths**(`no`): [`Miti`](Miti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `no` | `number` |

#### Returns

[`Miti`](Miti.md)

#### Defined in

[calendar.ts:163](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L163)

___

### addYears

▸ **addYears**(`no`): [`Miti`](Miti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `no` | `number` |

#### Returns

[`Miti`](Miti.md)

#### Defined in

[calendar.ts:154](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L154)

___

### convertTo

▸ **convertTo**(`dict`): [`Miti`](Miti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | [`Dictionary`](../interfaces/Dictionary.md) |

#### Returns

[`Miti`](Miti.md)

#### Defined in

[calendar.ts:284](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L284)

___

### getDay

▸ **getDay**(): `number`

#### Returns

`number`

#### Inherited from

[Ymd](Ymd.md).[getDay](Ymd.md#getday)

#### Defined in

[calendar.ts:25](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L25)

___

### getDaysInCurrentMonth

▸ **getDaysInCurrentMonth**(): `number`

#### Returns

`number`

#### Defined in

[calendar.ts:92](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L92)

___

### getDaysInCurrentYear

▸ **getDaysInCurrentYear**(): `number`

#### Returns

`number`

#### Defined in

[calendar.ts:96](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L96)

___

### getDifference

▸ **getDifference**(`sub`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sub` | [`Ymd`](Ymd.md) |

#### Returns

`number`

#### Defined in

[calendar.ts:100](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L100)

___

### getMonth

▸ **getMonth**(): `number`

#### Returns

`number`

#### Inherited from

[Ymd](Ymd.md).[getMonth](Ymd.md#getmonth)

#### Defined in

[calendar.ts:23](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L23)

___

### getString

▸ **getString**(): `string`

#### Returns

`string`

#### Inherited from

[Ymd](Ymd.md).[getString](Ymd.md#getstring)

#### Defined in

[calendar.ts:17](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L17)

___

### getWeek

▸ **getWeek**(): `number`

#### Returns

`number`

#### Defined in

[calendar.ts:88](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L88)

___

### getYear

▸ **getYear**(): `number`

#### Returns

`number`

#### Inherited from

[Ymd](Ymd.md).[getYear](Ymd.md#getyear)

#### Defined in

[calendar.ts:21](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L21)

___

### isEqual

▸ **isEqual**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Ymd`](Ymd.md) |

#### Returns

`boolean`

#### Inherited from

[Ymd](Ymd.md).[isEqual](Ymd.md#isequal)

#### Defined in

[calendar.ts:27](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L27)

___

### isGreaterThan

▸ **isGreaterThan**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Ymd`](Ymd.md) |

#### Returns

`boolean`

#### Inherited from

[Ymd](Ymd.md).[isGreaterThan](Ymd.md#isgreaterthan)

#### Defined in

[calendar.ts:47](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L47)

___

### isGreaterThanOrEqual

▸ **isGreaterThanOrEqual**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Ymd`](Ymd.md) |

#### Returns

`boolean`

#### Inherited from

[Ymd](Ymd.md).[isGreaterThanOrEqual](Ymd.md#isgreaterthanorequal)

#### Defined in

[calendar.ts:43](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L43)

___

### isLessThan

▸ **isLessThan**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Ymd`](Ymd.md) |

#### Returns

`boolean`

#### Inherited from

[Ymd](Ymd.md).[isLessThan](Ymd.md#islessthan)

#### Defined in

[calendar.ts:33](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L33)

___

### isLessThanOrEqual

▸ **isLessThanOrEqual**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Ymd`](Ymd.md) |

#### Returns

`boolean`

#### Inherited from

[Ymd](Ymd.md).[isLessThanOrEqual](Ymd.md#islessthanorequal)

#### Defined in

[calendar.ts:51](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L51)

___

### isNotEqual

▸ **isNotEqual**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Ymd`](Ymd.md) |

#### Returns

`boolean`

#### Inherited from

[Ymd](Ymd.md).[isNotEqual](Ymd.md#isnotequal)

#### Defined in

[calendar.ts:39](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L39)

___

### subtractDays

▸ **subtractDays**(`no`): [`Miti`](Miti.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `no` | `number` |

#### Returns

[`Miti`](Miti.md)

#### Defined in

[calendar.ts:230](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L230)
