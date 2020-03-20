[@togglecorp/fujs](../README.md) › [Globals](../globals.md) › ["calendar"](../modules/_calendar_.md) › [Dictionary](_calendar_.dictionary.md)

# Interface: Dictionary

## Hierarchy

* **Dictionary**

## Index

### Properties

* [getDaysInMonth](_calendar_.dictionary.md#getdaysinmonth)
* [getDaysInYear](_calendar_.dictionary.md#getdaysinyear)
* [getMaxYmd](_calendar_.dictionary.md#getmaxymd)
* [getMinYmd](_calendar_.dictionary.md#getminymd)
* [isLeapYear](_calendar_.dictionary.md#isleapyear)
* [isValidDate](_calendar_.dictionary.md#isvaliddate)

## Properties

###  getDaysInMonth

• **getDaysInMonth**: *function*

*Defined in [calendar.ts:58](https://github.com/toggle-corp/fujs/blob/4664803/src/calendar.ts#L58)*

#### Type declaration:

▸ (`year`: number, `month`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |
`month` | number |

___

###  getDaysInYear

• **getDaysInYear**: *function*

*Defined in [calendar.ts:57](https://github.com/toggle-corp/fujs/blob/4664803/src/calendar.ts#L57)*

#### Type declaration:

▸ (`year`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

___

###  getMaxYmd

• **getMaxYmd**: *function*

*Defined in [calendar.ts:64](https://github.com/toggle-corp/fujs/blob/4664803/src/calendar.ts#L64)*

#### Type declaration:

▸ (): *[Ymd](../classes/_calendar_.ymd.md)*

___

###  getMinYmd

• **getMinYmd**: *function*

*Defined in [calendar.ts:63](https://github.com/toggle-corp/fujs/blob/4664803/src/calendar.ts#L63)*

#### Type declaration:

▸ (): *[Ymd](../classes/_calendar_.ymd.md)*

___

###  isLeapYear

• **isLeapYear**: *function*

*Defined in [calendar.ts:59](https://github.com/toggle-corp/fujs/blob/4664803/src/calendar.ts#L59)*

#### Type declaration:

▸ (`year`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

___

###  isValidDate

• **isValidDate**: *function*

*Defined in [calendar.ts:61](https://github.com/toggle-corp/fujs/blob/4664803/src/calendar.ts#L61)*

#### Type declaration:

▸ (`ymd`: [Ymd](../classes/_calendar_.ymd.md)): *[boolean, undefined | string]*

**Parameters:**

Name | Type |
------ | ------ |
`ymd` | [Ymd](../classes/_calendar_.ymd.md) |
