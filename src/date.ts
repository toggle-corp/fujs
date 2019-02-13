import { Maybe } from './declarations';
import { padStart } from './string';
import { isTruthy, isFalsy } from './core';

const MONTHS: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const DAYS: string[] = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
];

const enum ValueType {
    time = 'time',
    date = 'date',
}

interface Value {
    type?: ValueType,
    value: string,
};

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
        if (maxEnd === undefined  || end > maxEnd) {
            maxEnd = end;
        }
    });

    return {
        start: minStart,
        end: maxEnd,
    };
};

export function breakFormat(format: string): Value[] {
    const {
        start: dateStart,
        end: dateEnd,
    }= getStartAndEnd(format, ['yyyy', 'yy', 'MMM', 'MM', 'dd', 'EEE']);
    const {
        start: timeStart,
        end: timeEnd,
    }= getStartAndEnd(format, ['hh', 'mm', 'ss', 'aaa']);

    const formatEnd = format.length;
    const getSubFormat = (start: number | undefined, end: number | undefined) => {
        if (start === undefined || end === undefined) {
            return '';
        }
        return format.substring(start, end);
    }

    if (dateStart === undefined && timeStart === undefined) {
        return [
            { value: format },
        ].filter(a => a.value !== '');
    } else if (dateStart === undefined) {
        return [
            { value: getSubFormat(0, timeStart) },
            {
                type: ValueType.time,
                value: getSubFormat(timeStart, timeEnd),
            },
            { value: getSubFormat(timeEnd, formatEnd) },
        ].filter(a => a.value !== '');
    } else if (timeStart === undefined) {
        return [
            { value: getSubFormat(0, dateStart) },
            {
                type: ValueType.date,
                value: getSubFormat(dateStart, dateEnd),
            },
            { value: getSubFormat(dateEnd, formatEnd) },
        ].filter(a => a.value !== '');
    } else if (dateStart < timeStart) {
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
        ].filter(a => a.value !== '');
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
    ].filter(a => a.value !== '');
};

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
        } else if (format.type === ValueType.time) {
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
};

export function formatDateToString(date: Date, format: string): string {
    return populateFormat(breakFormat(format), date)
        .map(e => e.value)
        .join('');
};

export function getDate(timestamp: string | number): number {
    const today = new Date(timestamp);
    today.setHours(0, 0, 0, 0);
    return today.getTime();
};

export function getDifferenceInDays(a: string | number, b: string | number): number {
    const dateA = getDate(a);
    const dateB = getDate(b);
    return (dateA - dateB) / (1000 * 60 * 60 * 24);
};

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
};

// Here month starts from 1 (not zero)
export function getNumDaysInMonthX(year: Maybe<number>, month: Maybe<number>): number {
    return (isTruthy(year) && isTruthy(month))
        ? new Date(year, month, 0).getDate()
        : 32;
};

// TODO: write test
export const getNumDaysInMonth = (date: Maybe<Date>) => (
    date ? (
        getNumDaysInMonthX(date.getFullYear(), date.getMonth() + 1)
    ) : 32
);

export function encodeDate(date: Date): string {
    return formatDateToString(date, 'yyyy-MM-dd');
}

export const decodeDate = (value: Maybe<string | number>) => {
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
};

export const MIN_YEAR = 1990;

interface Ymd {
    yearValue: number,
    monthValue: number,
    dayValue: number,
}

export const isDateValuesComplete = (val: Partial<Ymd>): val is Ymd => {
    const { yearValue, monthValue, dayValue } = val;
    // Complete if all values are undefined or none are
    return (
        (isTruthy(dayValue) && isTruthy(monthValue) && isTruthy(yearValue)) ||
        (isFalsy(dayValue) && isFalsy(monthValue) && isFalsy(yearValue))
    );
};

export const getErrorForDateValues = (val: Partial<Ymd>) => {
    if (!isDateValuesComplete(val)) {
        return 'Date values incomplete';
    }

    const { yearValue, monthValue, dayValue } = val;
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
};

