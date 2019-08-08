> **[@togglecorp/fujs](../README.md)**

[Globals](../globals.md) / ["date"](_date_.md) /

# External module: "date"

## Index

### Variables

* [MIN_YEAR](_date_.md#const-min_year)

### Functions

* [breakFormat](_date_.md#breakformat)
* [decodeDate](_date_.md#decodedate)
* [encodeDate](_date_.md#encodedate)
* [formatDateToString](_date_.md#formatdatetostring)
* [getDate](_date_.md#getdate)
* [getDateDifferenceHumanReadable](_date_.md#getdatedifferencehumanreadable)
* [getDifferenceInDays](_date_.md#getdifferenceindays)
* [getErrorForDateValues](_date_.md#geterrorfordatevalues)
* [getErrorForTimeValues](_date_.md#const-geterrorfortimevalues)
* [getNumDaysInMonth](_date_.md#getnumdaysinmonth)
* [getNumDaysInMonthX](_date_.md#getnumdaysinmonthx)
* [isDateValuesComplete](_date_.md#isdatevaluescomplete)
* [isTimeValuesComplete](_date_.md#const-istimevaluescomplete)
* [populateFormat](_date_.md#populateformat)

## Variables

### `Const` MIN_YEAR

• **MIN_YEAR**: *`1990`* = 1990

*Defined in [date.ts:308](https://github.com/toggle-corp/fujs/blob/6346fe3/src/date.ts#L308)*

## Functions

###  breakFormat

▸ **breakFormat**(`format`: string): *`Value`[]*

*Defined in [date.ts:59](https://github.com/toggle-corp/fujs/blob/6346fe3/src/date.ts#L59)*

Break timedate format into time unit, date unit and other unit.

**`remarks`** 
The date unit are: yyyy, yy, MMM, MM, dd, EEE.
The time unit are: hh, mm, ss, aaa.
Anything can come in between date and time unit and they will be treated as separator.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | format for datetime  |

**Returns:** *`Value`[]*

___

###  decodeDate

▸ **decodeDate**(`value`: [Maybe](_declarations_.md#maybe)‹*string | number*›): *undefined | `Date`*

*Defined in [date.ts:284](https://github.com/toggle-corp/fujs/blob/6346fe3/src/date.ts#L284)*

Change timestamp or 'yyyy-MM-dd' string into date

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | [Maybe](_declarations_.md#maybe)‹*string \| number*› | timestamp or 'yyyy-MM-dd' string  |

**Returns:** *undefined | `Date`*

___

###  encodeDate

▸ **encodeDate**(`date`: `Date`): *string*

*Defined in [date.ts:275](https://github.com/toggle-corp/fujs/blob/6346fe3/src/date.ts#L275)*

Change date into 'yyyy-MM-dd' string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | `Date` |   |

**Returns:** *string*

___

###  formatDateToString

▸ **formatDateToString**(`date`: `Date`, `format`: string): *string*

*Defined in [date.ts:183](https://github.com/toggle-corp/fujs/blob/6346fe3/src/date.ts#L183)*

Format date

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | `Date` | - |
`format` | string | format for datetime |

**Returns:** *string*

formatted date

___

###  getDate

▸ **getDate**(`datetime`: string | number): *number*

*Defined in [date.ts:195](https://github.com/toggle-corp/fujs/blob/6346fe3/src/date.ts#L195)*

Set hour, minute and second to zero in given datetime

**Parameters:**

Name | Type |
------ | ------ |
`datetime` | string \| number |

**Returns:** *number*

timestamp with hour, minute and second set to zero

___

###  getDateDifferenceHumanReadable

▸ **getDateDifferenceHumanReadable**(`a`: string, `b`: string): *string*

*Defined in [date.ts:221](https://github.com/toggle-corp/fujs/blob/6346fe3/src/date.ts#L221)*

Get number of days betwen two datetime

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | string | timestamp or a date string |
`b` | string | timestamp or a date string |

**Returns:** *string*

number of days between two datetime

___

###  getDifferenceInDays

▸ **getDifferenceInDays**(`a`: string | number, `b`: string | number): *number*

*Defined in [date.ts:208](https://github.com/toggle-corp/fujs/blob/6346fe3/src/date.ts#L208)*

Get number of days betwen two datetime

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | string \| number | timestamp or a date string |
`b` | string \| number | timestamp or a date string |

**Returns:** *number*

number of days between two datetime

___

###  getErrorForDateValues

▸ **getErrorForDateValues**(`ymd`: `Partial<Ymd>`): *undefined | string*

*Defined in [date.ts:338](https://github.com/toggle-corp/fujs/blob/6346fe3/src/date.ts#L338)*

Identify problem with ymd value

**`remarks`** 
The return value will be undefined if there are no problems.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ymd` | `Partial<Ymd>` |   |

**Returns:** *undefined | string*

___

### `Const` getErrorForTimeValues

▸ **getErrorForTimeValues**(`val`: `Partial<Hms>`): *undefined | string*

*Defined in [date.ts:395](https://github.com/toggle-corp/fujs/blob/6346fe3/src/date.ts#L395)*

Identify problem with hms value

**Parameters:**

Name | Type |
------ | ------ |
`val` | `Partial<Hms>` |

**Returns:** *undefined | string*

___

###  getNumDaysInMonth

▸ **getNumDaysInMonth**(`date`: [Maybe](_declarations_.md#maybe)‹*`Date`*›): *number*

*Defined in [date.ts:263](https://github.com/toggle-corp/fujs/blob/6346fe3/src/date.ts#L263)*

Get number of days in certain year and month from a date

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Maybe](_declarations_.md#maybe)‹*`Date`*› |

**Returns:** *number*

number of days

___

###  getNumDaysInMonthX

▸ **getNumDaysInMonthX**(`year`: [Maybe](_declarations_.md#maybe)‹*number*›, `month`: [Maybe](_declarations_.md#maybe)‹*number*›): *number*

*Defined in [date.ts:250](https://github.com/toggle-corp/fujs/blob/6346fe3/src/date.ts#L250)*

Get number of days in certain year and month

**`remarks`** 
Month starts from 1 (not zero)

**Parameters:**

Name | Type |
------ | ------ |
`year` | [Maybe](_declarations_.md#maybe)‹*number*› |
`month` | [Maybe](_declarations_.md#maybe)‹*number*› |

**Returns:** *number*

number of days

___

###  isDateValuesComplete

▸ **isDateValuesComplete**(`ymd`: `Partial<Ymd>`): *boolean*

*Defined in [date.ts:321](https://github.com/toggle-corp/fujs/blob/6346fe3/src/date.ts#L321)*

Identify if ymd value is complete

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ymd` | `Partial<Ymd>` |   |

**Returns:** *boolean*

___

### `Const` isTimeValuesComplete

▸ **isTimeValuesComplete**(`val`: `Partial<Hms>`): *boolean*

*Defined in [date.ts:378](https://github.com/toggle-corp/fujs/blob/6346fe3/src/date.ts#L378)*

Identify if hms value is complete

**Parameters:**

Name | Type |
------ | ------ |
`val` | `Partial<Hms>` |

**Returns:** *boolean*

___

###  populateFormat

▸ **populateFormat**(`formatList`: `Value`[], `date`: `Date`): *`Value`[]*

*Defined in [date.ts:135](https://github.com/toggle-corp/fujs/blob/6346fe3/src/date.ts#L135)*

Populate the format list with date

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`formatList` | `Value`[] | the list of datetime units |
`date` | `Date` |   |

**Returns:** *`Value`[]*