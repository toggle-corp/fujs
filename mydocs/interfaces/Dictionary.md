[@togglecorp/fujs](../README.md) / [Exports](../modules.md) / Dictionary

# Interface: Dictionary

## Table of contents

### Properties

- [getDaysInMonth](Dictionary.md#getdaysinmonth)
- [getDaysInYear](Dictionary.md#getdaysinyear)
- [getMaxYmd](Dictionary.md#getmaxymd)
- [getMinYmd](Dictionary.md#getminymd)
- [isLeapYear](Dictionary.md#isleapyear)
- [isValidDate](Dictionary.md#isvaliddate)

## Properties

### getDaysInMonth

• **getDaysInMonth**: (`year`: `number`, `month`: `number`) => `number`

#### Type declaration

▸ (`year`, `month`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |
| `month` | `number` |

##### Returns

`number`

#### Defined in

[calendar.ts:58](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L58)

___

### getDaysInYear

• **getDaysInYear**: (`year`: `number`) => `number`

#### Type declaration

▸ (`year`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

##### Returns

`number`

#### Defined in

[calendar.ts:57](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L57)

___

### getMaxYmd

• **getMaxYmd**: () => [`Ymd`](../classes/Ymd.md)

#### Type declaration

▸ (): [`Ymd`](../classes/Ymd.md)

##### Returns

[`Ymd`](../classes/Ymd.md)

#### Defined in

[calendar.ts:64](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L64)

___

### getMinYmd

• **getMinYmd**: () => [`Ymd`](../classes/Ymd.md)

#### Type declaration

▸ (): [`Ymd`](../classes/Ymd.md)

##### Returns

[`Ymd`](../classes/Ymd.md)

#### Defined in

[calendar.ts:63](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L63)

___

### isLeapYear

• **isLeapYear**: (`year`: `number`) => `boolean`

#### Type declaration

▸ (`year`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

##### Returns

`boolean`

#### Defined in

[calendar.ts:59](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L59)

___

### isValidDate

• **isValidDate**: (`ymd`: [`Ymd`](../classes/Ymd.md)) => [`boolean`, string?]

#### Type declaration

▸ (`ymd`): [`boolean`, string?]

##### Parameters

| Name | Type |
| :------ | :------ |
| `ymd` | [`Ymd`](../classes/Ymd.md) |

##### Returns

[`boolean`, string?]

#### Defined in

[calendar.ts:61](https://github.com/toggle-corp/fujs/blob/0c54ffd/src/calendar.ts#L61)
