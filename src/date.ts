import { Maybe } from './declarations';
import { padStart } from './string';
import { isTruthy, isFalsy } from './core';

// FIXME: do not use date library

const MONTHS: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const DAYS: string[] = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
];

enum ValueType {
    time = 'time',
    date = 'date',
}

interface Value {
    type?: ValueType;
    value: string;
}

function getStartAndEnd(format: string, matches: string[]) {
    let minStart: number | undefined;
    let maxEnd: number | undefined;

    matches.forEach((val) => {
        const start = format.indexOf(val);
        if (start === -1) {
            return;
        }

        const end = start + val.length;

        if (minStart === undefined || start < minStart) {
            minStart = start;
        }
        if (maxEnd === undefined || end > maxEnd) {
            maxEnd = end;
        }
    });

    return {
        start: minStart,
        end: maxEnd,
    };
}

/**
 * Break timedate format into time unit, date unit and other unit.
 *
 * @remarks
 * The date unit are: yyyy, yy, MMM, MM, dd, EEE.
 * The time unit are: hh, mm, ss, aaa.
 * Anything can come in between date and time unit and they will be treated as separator.
 * @param format format for datetime
 */
export function breakFormat(format: string): Value[] {
    const {
        start: dateStart,
        end: dateEnd,
    } = getStartAndEnd(format, ['yyyy', 'yy', 'MMM', 'MM', 'dd', 'EEE']);
    const {
        start: timeStart,
        end: timeEnd,
    } = getStartAndEnd(format, ['hh', 'mm', 'ss', 'aaa']);

    const formatEnd = format.length;
    const getSubFormat = (start: number | undefined, end: number | undefined) => {
        if (start === undefined || end === undefined) {
            return '';
        }
        return format.substring(start, end);
    };

    if (dateStart === undefined && timeStart === undefined) {
        return [
            { value: format },
        ].filter((a) => a.value !== '');
    }
    if (dateStart === undefined) {
        return [
            { value: getSubFormat(0, timeStart) },
            {
                type: ValueType.time,
                value: getSubFormat(timeStart, timeEnd),
            },
            { value: getSubFormat(timeEnd, formatEnd) },
        ].filter((a) => a.value !== '');
    }
    if (timeStart === undefined) {
        return [
            { value: getSubFormat(0, dateStart) },
            {
                type: ValueType.date,
                value: getSubFormat(dateStart, dateEnd),
            },
            { value: getSubFormat(dateEnd, formatEnd) },
        ].filter((a) => a.value !== '');
    }
    if (dateStart < timeStart) {
        return [
            { value: getSubFormat(0, dateStart) },
            {
                type: ValueType.date,
                value: getSubFormat(dateStart, dateEnd),
            },
            { value: getSubFormat(dateEnd, timeStart) },
            {
                type: ValueType.time,
                value: getSubFormat(timeStart, timeEnd),
            },
            { value: getSubFormat(timeEnd, formatEnd) },
        ].filter((a) => a.value !== '');
    }
    return [
        { value: getSubFormat(0, timeStart) },
        {
            type: ValueType.time,
            value: getSubFormat(timeStart, timeEnd),
        },
        { value: getSubFormat(timeEnd, dateStart) },
        {
            type: ValueType.date,
            value: getSubFormat(dateStart, dateEnd),
        },
        { value: getSubFormat(dateEnd, formatEnd) },
    ].filter((a) => a.value !== '');
}

/**
 * Populate the format list with date
 *
 * @param formatList the list of datetime units
 * @param date
 */
export function populateFormat(formatList: Value[], date: Date) {
    return formatList.map((format) => {
        if (format.type === ValueType.date) {
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const weekName = DAYS[date.getDay()];

            const newFormat = { ...format };
            newFormat.value = newFormat.value
                .replace('yyyy', String(year))
                .replace('yy', String(date.getFullYear() % 100))
                .replace('MMM', MONTHS[date.getMonth()])
                .replace('MM', padStart(month, 2))
                .replace('EEE', weekName)
                .replace('dd', padStart(day, 2));
            return newFormat;
        }
        if (format.type === ValueType.time) {
            const ttIndex = format.value.indexOf('aaa');

            const originalHour = date.getHours();

            const hour = ttIndex >= 0
                ? ((originalHour - 1) % 12) + 1
                : originalHour;
            const amPm = originalHour >= 12 ? 'PM' : 'AM';
            const minute = date.getMinutes();
            const second = date.getSeconds();

            const newFormat = { ...format };
            newFormat.value = newFormat.value
                .replace('hh', padStart(hour, 2))
                .replace('mm', padStart(minute, 2))
                .replace('ss', padStart(second, 2))
                .replace('aaa', amPm);
            return newFormat;
        }
        return format;
    });
}

/**
 * Format date
 *
 * @param date
 * @param format format for datetime
 * @returns formatted date
 */
export function formatDateToString(date: Date, format: string): string {
    return populateFormat(breakFormat(format), date)
        .map((e) => e.value)
        .join('');
}

/**
 * Set hour, minute and second to zero in given datetime
 *
 * @param date timestamp or a date string
 * @returns timestamp with hour, minute and second set to zero
 */
export function getDate(datetime: string | number): number {
    const today = new Date(datetime);
    today.setHours(0, 0, 0, 0);
    return today.getTime();
}

/**
 * Get number of days betwen two datetime
 *
 * @param a timestamp or a date string
 * @param b timestamp or a date string
 * @returns number of days between two datetime
 */
export function getDifferenceInDays(a: string | number, b: string | number): number {
    const dateA = getDate(a);
    const dateB = getDate(b);
    return (dateA - dateB) / (1000 * 60 * 60 * 24);
}

/**
 * Get number of days betwen two datetime
 *
 * @param a timestamp or a date string
 * @param b timestamp or a date string
 * @returns number of days between two datetime
 */
export function getDateDifferenceHumanReadable(a: string, b: string): string {
    const diff = getDifferenceInDays(a, b);
    if (diff === 0) {
        return 'Today';
    }
    if (diff === -1) {
        return 'Yesterday';
    }
    if (diff === 1) {
        return 'Tomorrow';
    }

    if (diff < 0) {
        return `${-diff} days ago`;
    }

    return `After ${diff} days`;
}

/**
 * Get number of days in certain year and month
 *
 * @param year
 * @param month
 * @returns number of days
 *
 * @remarks
 * Month starts from 1 (not zero)
 */
export function getNumDaysInMonthX(year: Maybe<number>, month: Maybe<number>): number {
    if (isTruthy(year) && isTruthy(month)) {
        return new Date(year, month, 0).getDate();
    }
    return 32;
}

/**
 * Get number of days in certain year and month from a date
 *
 * @param date
 * @returns number of days
 */
export function getNumDaysInMonth(date: Maybe<Date>) {
    if (date) {
        return getNumDaysInMonthX(date.getFullYear(), date.getMonth() + 1);
    }
    return 32;
}

/**
 * Change date into 'yyyy-MM-dd' string
 *
 * @param date
 */
export function encodeDate(date: Date): string {
    return formatDateToString(date, 'yyyy-MM-dd');
}

/**
 * Change timestamp or 'yyyy-MM-dd' string into date
 *
 * @param value timestamp or 'yyyy-MM-dd' string
 */
export function decodeDate(value: undefined): undefined;
export function decodeDate(value: null): undefined;
export function decodeDate(value: string | number): Date;
export function decodeDate(value: Maybe<string | number>) {
    // Let's assume that the value is in local time zone

    if (!value) {
        return undefined;
    }

    // Check if value is timestamp number or ISO string with time information
    // In both case, new Date assumes local time zone
    if (typeof value === 'number' || value.indexOf('T') >= 0) {
        return new Date(value);
    }

    // In case of ISO string with no time information, new Date assumes
    // UTC timezone. So first split it manually, and feed them separately
    // so they will be processed as local time zone.
    const splits = value.split('-');
    return new Date(
        Number(splits[0]),
        Number(splits[1]) - 1,
        Number(splits[2]),
    );
}

export const MIN_YEAR = 1990;

interface Ymd {
    yearValue: number;
    monthValue: number;
    dayValue: number;
}

/**
 * Identify if ymd value is complete
 *
 * @param ymd
 */
export function isDateValuesComplete(ymd: Partial<Ymd>): ymd is Ymd {
    const { yearValue, monthValue, dayValue } = ymd;
    // Complete if all values are undefined or none are
    return (
        (isTruthy(dayValue) && isTruthy(monthValue) && isTruthy(yearValue))
        || (isFalsy(dayValue) && isFalsy(monthValue) && isFalsy(yearValue))
    );
}

/**
 * Identify problem with ymd value
 *
 * @param ymd
 *
 * @remarks
 * The return value will be undefined if there are no problems.
 */
export function getErrorForDateValues(ymd: Partial<Ymd>) {
    if (!isDateValuesComplete(ymd)) {
        return 'Date values incomplete';
    }

    const { yearValue, monthValue, dayValue } = ymd;
    if (yearValue < MIN_YEAR) {
        return `Year should be greater than or equal to ${MIN_YEAR}`;
    }

    if (monthValue < 1 || monthValue > 12) {
        return 'Month should be between 1 and 12';
    }

    const maxNumberOfDays = getNumDaysInMonthX(yearValue, monthValue);
    if (dayValue < 1 || dayValue > maxNumberOfDays) {
        return 'Invalid day for this month';
    }

    return undefined;
}

const MIN_HOUR = 0;
const MAX_HOUR = 23;
const MIN_MINUTE = 0;
const MAX_MINUTE = 59;
const MIN_SECOND = 0;
const MAX_SECOND = 59;

interface Hms {
    hourValue: number;
    minuteValue: number;
    secondValue: number;
}

/**
 * Identify if hms value is complete
 *
 * @param hms
 */
export const isTimeValuesComplete = (val: Partial<Hms>): val is Hms => {
    const { hourValue, minuteValue, secondValue } = val;
    // Complete if all values are undefined or none are
    return (
        (isTruthy(hourValue) && isTruthy(minuteValue) && isTruthy(secondValue))
        || (isFalsy(hourValue) && isFalsy(minuteValue) && isFalsy(secondValue))
    );
};

/**
 * Identify problem with hms value
 *
 * @param hms
 *
 * @remarks
 * The return value will be undefined if there are no problems.
 */
export const getErrorForTimeValues = (val: Partial<Hms>) => {
    if (!isTimeValuesComplete(val)) {
        return 'Time values incomplete';
    }
    const { hourValue, minuteValue, secondValue } = val;

    if (hourValue < MIN_HOUR || hourValue > MAX_HOUR) {
        return `Hour must be between ${MIN_HOUR} and ${MAX_HOUR}`;
    }
    if (minuteValue < MIN_MINUTE || minuteValue > MAX_MINUTE) {
        return `Minute must be between ${MIN_MINUTE} and ${MAX_MINUTE}`;
    }
    if (secondValue < MIN_SECOND || secondValue > MAX_SECOND) {
        return `Second must be between ${MIN_SECOND} and ${MAX_SECOND}`;
    }

    return undefined;
};
