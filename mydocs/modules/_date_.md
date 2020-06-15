[@togglecorp/fujs](../README.md) › [Globals](../globals.md) › ["date"](_date_.md)

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

• **MIN_YEAR**: *1990* = 1990

*Defined in [date.ts:312](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/date.ts#L312)*

## Functions

###  breakFormat

▸ **breakFormat**(`format`: string): *Value[]*

*Defined in [date.ts:59](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/date.ts#L59)*

Break timedate format into time unit, date unit and other unit.

**`remarks`** 
The date unit are: yyyy, yy, MMM, MM, dd, EEE.
The time unit are: hh, mm, ss, aaa.
Anything can come in between date and time unit and they will be treated as separator.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | format for datetime  |

**Returns:** *Value[]*

___

###  decodeDate

▸ **decodeDate**(`value`: [Maybe](_declarations_.md#maybe)‹string | number›): *undefined | Date*

*Defined in [date.ts:288](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/date.ts#L288)*

Change timestamp or 'yyyy-MM-dd' string into date

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | [Maybe](_declarations_.md#maybe)‹string &#124; number› | timestamp or 'yyyy-MM-dd' string  |

**Returns:** *undefined | Date*

___

###  encodeDate

▸ **encodeDate**(`date`: Date): *string*

*Defined in [date.ts:279](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/date.ts#L279)*

Change date into 'yyyy-MM-dd' string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date |   |

**Returns:** *string*

___

###  formatDateToString

▸ **formatDateToString**(`date`: Date, `format`: string): *string*

*Defined in [date.ts:187](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/date.ts#L187)*

Format date

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date | - |
`format` | string | format for datetime |

**Returns:** *string*

formatted date

___

###  getDate

▸ **getDate**(`datetime`: string | number): *number*

*Defined in [date.ts:199](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/date.ts#L199)*

Set hour, minute and second to zero in given datetime

**Parameters:**

Name | Type |
------ | ------ |
`datetime` | string &#124; number |

**Returns:** *number*

timestamp with hour, minute and second set to zero

___

###  getDateDifferenceHumanReadable

▸ **getDateDifferenceHumanReadable**(`a`: string, `b`: string): *string*

*Defined in [date.ts:225](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/date.ts#L225)*

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

*Defined in [date.ts:212](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/date.ts#L212)*

Get number of days betwen two datetime

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | string &#124; number | timestamp or a date string |
`b` | string &#124; number | timestamp or a date string |

**Returns:** *number*

number of days between two datetime

___

###  getErrorForDateValues

▸ **getErrorForDateValues**(`ymd`: Partial‹Ymd›): *undefined | string*

*Defined in [date.ts:342](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/date.ts#L342)*

Identify problem with ymd value

**`remarks`** 
The return value will be undefined if there are no problems.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ymd` | Partial‹Ymd› |   |

**Returns:** *undefined | string*

___

### `Const` getErrorForTimeValues

▸ **getErrorForTimeValues**(`val`: Partial‹Hms›): *undefined | string*

*Defined in [date.ts:399](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/date.ts#L399)*

Identify problem with hms value

**`remarks`** 
The return value will be undefined if there are no problems.

**Parameters:**

Name | Type |
------ | ------ |
`val` | Partial‹Hms› |

**Returns:** *undefined | string*

___

###  getNumDaysInMonth

▸ **getNumDaysInMonth**(`date`: [Maybe](_declarations_.md#maybe)‹Date›): *number*

*Defined in [date.ts:267](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/date.ts#L267)*

Get number of days in certain year and month from a date

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Maybe](_declarations_.md#maybe)‹Date› |

**Returns:** *number*

number of days

___

###  getNumDaysInMonthX

▸ **getNumDaysInMonthX**(`year`: [Maybe](_declarations_.md#maybe)‹number›, `month`: [Maybe](_declarations_.md#maybe)‹number›): *number*

*Defined in [date.ts:254](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/date.ts#L254)*

Get number of days in certain year and month

**`remarks`** 
Month starts from 1 (not zero)

**Parameters:**

Name | Type |
------ | ------ |
`year` | [Maybe](_declarations_.md#maybe)‹number› |
`month` | [Maybe](_declarations_.md#maybe)‹number› |

**Returns:** *number*

number of days

___

###  isDateValuesComplete

▸ **isDateValuesComplete**(`ymd`: Partial‹Ymd›): *ymd is Ymd*

*Defined in [date.ts:325](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/date.ts#L325)*

Identify if ymd value is complete

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ymd` | Partial‹Ymd› |   |

**Returns:** *ymd is Ymd*

___

### `Const` isTimeValuesComplete

▸ **isTimeValuesComplete**(`val`: Partial‹Hms›): *val is Hms*

*Defined in [date.ts:382](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/date.ts#L382)*

Identify if hms value is complete

**Parameters:**

Name | Type |
------ | ------ |
`val` | Partial‹Hms› |

**Returns:** *val is Hms*

___

###  populateFormat

▸ **populateFormat**(`formatList`: Value[], `date`: Date): *Value[]*

*Defined in [date.ts:138](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/date.ts#L138)*

Populate the format list with date

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`formatList` | Value[] | the list of datetime units |
`date` | Date |   |

**Returns:** *Value[]*
