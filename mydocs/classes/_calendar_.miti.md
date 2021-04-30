[@togglecorp/fujs](../README.md) › [Globals](../globals.md) › ["calendar"](../modules/_calendar_.md) › [Miti](_calendar_.miti.md)

# Class: Miti

## Hierarchy

* [Ymd](_calendar_.ymd.md)

  ↳ **Miti**

## Index

### Constructors

* [constructor](_calendar_.miti.md#constructor)

### Methods

* [addDays](_calendar_.miti.md#adddays)
* [addMonths](_calendar_.miti.md#addmonths)
* [addYears](_calendar_.miti.md#addyears)
* [convertTo](_calendar_.miti.md#convertto)
* [getDay](_calendar_.miti.md#getday)
* [getDaysInCurrentMonth](_calendar_.miti.md#getdaysincurrentmonth)
* [getDaysInCurrentYear](_calendar_.miti.md#getdaysincurrentyear)
* [getDifference](_calendar_.miti.md#getdifference)
* [getMonth](_calendar_.miti.md#getmonth)
* [getString](_calendar_.miti.md#getstring)
* [getWeek](_calendar_.miti.md#getweek)
* [getYear](_calendar_.miti.md#getyear)
* [isEqual](_calendar_.miti.md#isequal)
* [isGreaterThan](_calendar_.miti.md#isgreaterthan)
* [isGreaterThanOrEqual](_calendar_.miti.md#isgreaterthanorequal)
* [isLessThan](_calendar_.miti.md#islessthan)
* [isLessThanOrEqual](_calendar_.miti.md#islessthanorequal)
* [isNotEqual](_calendar_.miti.md#isnotequal)
* [subtractDays](_calendar_.miti.md#subtractdays)

## Constructors

###  constructor

\+ **new Miti**(`year`: number, `month`: number, `day`: number, `dict`: [Dictionary](../interfaces/_calendar_.dictionary.md)): *[Miti](_calendar_.miti.md)*

*Overrides [Ymd](_calendar_.ymd.md).[constructor](_calendar_.ymd.md#constructor)*

*Defined in [calendar.ts:70](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |
`month` | number |
`day` | number |
`dict` | [Dictionary](../interfaces/_calendar_.dictionary.md) |

**Returns:** *[Miti](_calendar_.miti.md)*

## Methods

###  addDays

▸ **addDays**(`no`: number): *[Miti](_calendar_.miti.md)‹›*

*Defined in [calendar.ts:173](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L173)*

**Parameters:**

Name | Type |
------ | ------ |
`no` | number |

**Returns:** *[Miti](_calendar_.miti.md)‹›*

___

###  addMonths

▸ **addMonths**(`no`: number): *[Miti](_calendar_.miti.md)‹›*

*Defined in [calendar.ts:163](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L163)*

**Parameters:**

Name | Type |
------ | ------ |
`no` | number |

**Returns:** *[Miti](_calendar_.miti.md)‹›*

___

###  addYears

▸ **addYears**(`no`: number): *[Miti](_calendar_.miti.md)‹›*

*Defined in [calendar.ts:154](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`no` | number |

**Returns:** *[Miti](_calendar_.miti.md)‹›*

___

###  convertTo

▸ **convertTo**(`dict`: [Dictionary](../interfaces/_calendar_.dictionary.md)): *[Miti](_calendar_.miti.md)‹›*

*Defined in [calendar.ts:284](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L284)*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | [Dictionary](../interfaces/_calendar_.dictionary.md) |

**Returns:** *[Miti](_calendar_.miti.md)‹›*

___

###  getDay

▸ **getDay**(): *number*

*Inherited from [Ymd](_calendar_.ymd.md).[getDay](_calendar_.ymd.md#getday)*

*Defined in [calendar.ts:25](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L25)*

**Returns:** *number*

___

###  getDaysInCurrentMonth

▸ **getDaysInCurrentMonth**(): *number*

*Defined in [calendar.ts:92](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L92)*

**Returns:** *number*

___

###  getDaysInCurrentYear

▸ **getDaysInCurrentYear**(): *number*

*Defined in [calendar.ts:96](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L96)*

**Returns:** *number*

___

###  getDifference

▸ **getDifference**(`sub`: [Ymd](_calendar_.ymd.md)): *number*

*Defined in [calendar.ts:100](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`sub` | [Ymd](_calendar_.ymd.md) |

**Returns:** *number*

___

###  getMonth

▸ **getMonth**(): *number*

*Inherited from [Ymd](_calendar_.ymd.md).[getMonth](_calendar_.ymd.md#getmonth)*

*Defined in [calendar.ts:23](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L23)*

**Returns:** *number*

___

###  getString

▸ **getString**(): *string*

*Inherited from [Ymd](_calendar_.ymd.md).[getString](_calendar_.ymd.md#getstring)*

*Defined in [calendar.ts:17](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L17)*

**Returns:** *string*

___

###  getWeek

▸ **getWeek**(): *number*

*Defined in [calendar.ts:88](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L88)*

**Returns:** *number*

___

###  getYear

▸ **getYear**(): *number*

*Inherited from [Ymd](_calendar_.ymd.md).[getYear](_calendar_.ymd.md#getyear)*

*Defined in [calendar.ts:21](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L21)*

**Returns:** *number*

___

###  isEqual

▸ **isEqual**(`other`: [Ymd](_calendar_.ymd.md)): *boolean*

*Inherited from [Ymd](_calendar_.ymd.md).[isEqual](_calendar_.ymd.md#isequal)*

*Defined in [calendar.ts:27](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Ymd](_calendar_.ymd.md) |

**Returns:** *boolean*

___

###  isGreaterThan

▸ **isGreaterThan**(`other`: [Ymd](_calendar_.ymd.md)): *boolean*

*Inherited from [Ymd](_calendar_.ymd.md).[isGreaterThan](_calendar_.ymd.md#isgreaterthan)*

*Defined in [calendar.ts:47](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Ymd](_calendar_.ymd.md) |

**Returns:** *boolean*

___

###  isGreaterThanOrEqual

▸ **isGreaterThanOrEqual**(`other`: [Ymd](_calendar_.ymd.md)): *boolean*

*Inherited from [Ymd](_calendar_.ymd.md).[isGreaterThanOrEqual](_calendar_.ymd.md#isgreaterthanorequal)*

*Defined in [calendar.ts:43](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Ymd](_calendar_.ymd.md) |

**Returns:** *boolean*

___

###  isLessThan

▸ **isLessThan**(`other`: [Ymd](_calendar_.ymd.md)): *boolean*

*Inherited from [Ymd](_calendar_.ymd.md).[isLessThan](_calendar_.ymd.md#islessthan)*

*Defined in [calendar.ts:33](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Ymd](_calendar_.ymd.md) |

**Returns:** *boolean*

___

###  isLessThanOrEqual

▸ **isLessThanOrEqual**(`other`: [Ymd](_calendar_.ymd.md)): *boolean*

*Inherited from [Ymd](_calendar_.ymd.md).[isLessThanOrEqual](_calendar_.ymd.md#islessthanorequal)*

*Defined in [calendar.ts:51](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Ymd](_calendar_.ymd.md) |

**Returns:** *boolean*

___

###  isNotEqual

▸ **isNotEqual**(`other`: [Ymd](_calendar_.ymd.md)): *boolean*

*Inherited from [Ymd](_calendar_.ymd.md).[isNotEqual](_calendar_.ymd.md#isnotequal)*

*Defined in [calendar.ts:39](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Ymd](_calendar_.ymd.md) |

**Returns:** *boolean*

___

###  subtractDays

▸ **subtractDays**(`no`: number): *[Miti](_calendar_.miti.md)‹›*

*Defined in [calendar.ts:230](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L230)*

**Parameters:**

Name | Type |
------ | ------ |
`no` | number |

**Returns:** *[Miti](_calendar_.miti.md)‹›*
