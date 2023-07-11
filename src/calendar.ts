import { padStart } from './string';

function isMonthValid(value: number): value is 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 {
    return value >= 1 && value <= 12;
}

type MonthDays = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
];

interface DateAD {
    y: number,
    m: number,
    d: number,
    cal: 'AD',
}
interface DateBS {
    y: number,
    m: number,
    d: number,
    cal: 'BS',
}

function prepareDateUnchecked(year: number, month: number, day: number, cal: 'AD'): DateAD
function prepareDateUnchecked(year: number, month: number, day: number, cal: 'BS'): DateBS
function prepareDateUnchecked(year: number, month: number, day: number, cal: 'AD' | 'BS'): DateBS | DateAD
function prepareDateUnchecked(year: number, month: number, day: number, cal: 'AD' | 'BS') {
    return {
        y: year,
        m: month,
        d: day,
        cal,
    };
}

export function isDateEqual<T extends DateAD | DateBS>(foo: T, bar: T) {
    return (
        foo.y === bar.y
        && foo.m === bar.m
        && foo.d === bar.d
    );
}

export function isDateLessThan<T extends DateAD | DateBS>(foo: T, bar: T) {
    return (
        foo.y < bar.y
        || (foo.y === bar.y && foo.m < bar.m)
        || (foo.y === bar.y && foo.m === bar.m && foo.d < bar.d)
    );
}

export function isDateGreaterThan<T extends DateAD | DateBS>(foo: T, bar: T) {
    return (
        foo.y > bar.y
        || (foo.y === bar.y && foo.m > bar.m)
        || (foo.y === bar.y && foo.m === bar.m && foo.d > bar.d)
    );
}

export function isDateLessThanOrEqual<T extends DateAD | DateBS>(foo: T, bar: T) {
    return isDateEqual(foo, bar) || isDateLessThan(foo, bar);
}

export function isDateGreaterThanOrEqual<T extends DateAD | DateBS>(foo: T, bar: T) {
    return isDateEqual(foo, bar) || isDateGreaterThan(foo, bar);
}

export function toDateString(date: DateAD | DateBS) {
    return `${padStart(date.y, 4)}-${padStart(date.m, 2)}-${padStart(date.d, 2)}`;
}

const minBsDate = prepareDateUnchecked(2000, 9, 17, 'BS');
const maxBsDate = prepareDateUnchecked(2090, 12, 30, 'BS');

const bsData: MonthDays[] = [
    [365, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [365, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [365, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [365, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [365, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [365, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [365, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [365, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [365, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [365, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [365, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [365, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [365, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [365, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [365, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [365, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [365, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [365, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [365, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [366, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [365, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [365, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [366, 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [365, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [365, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    [365, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    [366, 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
    [365, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [366, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
    [365, 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
    [365, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [365, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
];

const minAdDate = prepareDateUnchecked(1944, 1, 1, 'AD');
const maxAdDate = prepareDateUnchecked(2034, 4, 12, 'AD');

const adData: [MonthDays, MonthDays] = [
    [365, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    [366, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
];

function isLeapAdYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

export function getDaysInYear(year: number, cal: 'AD' | 'BS') {
    if (cal === 'AD') {
        return isLeapAdYear(year) ? 366 : 365;
    }
    const minDate = minBsDate;
    const maxDate = maxBsDate;
    const data = bsData;

    if (year < minDate.y || year > maxDate.y) {
        const error = new Error('Year out of bounds');
        throw error;
    }
    const index = year - minDate.y;
    const yearData = data[index];
    if (!yearData) {
        const error = new Error('Year out of bounds');
        throw error;
    }
    return yearData[0];
}

export function isLeapYear(year: number, cal: 'AD' | 'BS') {
    if (cal === 'AD') {
        return isLeapAdYear(year);
    }
    return getDaysInYear(year, cal) === 366;
}

export function getDaysInMonth(year: number, month: number, cal: 'AD' | 'BS') {
    const minDate = cal === 'AD' ? minAdDate : minBsDate;
    const maxDate = cal === 'AD' ? maxAdDate : maxBsDate;

    if (year < minDate.y || year > maxDate.y) {
        const error = new Error('Year out of bounds');
        throw error;
    }
    if (!isMonthValid(month)) {
        const error = new Error('Month out of bounds');
        throw error;
    }

    if (cal === 'AD') {
        const index = isLeapYear(year, cal) ? 1 : 0;
        return adData[index][month];
    }

    const index = year - minDate.y;
    const yearData = bsData[index];
    if (!yearData) {
        const error = new Error('Year out of bounds');
        throw error;
    }
    return yearData[month];
}

export function isValidDate(date: DateAD | DateBS): [boolean, string?] {
    const minDate = date.cal === 'AD' ? minAdDate : minBsDate;
    const maxDate = date.cal === 'AD' ? maxAdDate : maxBsDate;

    if (date.y < minDate.y || date.y > maxDate.y) {
        return [false, 'Year out of bounds'];
    }
    if (date.m < 0 || date.m > 12) {
        return [false, 'Month out of bounds'];
    }
    if (date.d < 0 || date.d > getDaysInMonth(date.y, date.m, date.cal)) {
        return [false, 'Day out of bounds'];
    }

    // NOTE: can be inside min/max year but still be out of bounds for conversion
    if (isDateGreaterThan(date, maxDate) || isDateLessThan(date, minDate)) {
        return [false, 'Miti out of bounds'];
    }
    return [true];
}

export function prepareDate(year: number, month: number, day: number, cal: 'AD'): DateAD
export function prepareDate(year: number, month: number, day: number, cal: 'BS'): DateBS
export function prepareDate(year: number, month: number, day: number, cal: 'AD' | 'BS'): DateAD | DateBS
export function prepareDate(year: number, month: number, day: number, cal: 'AD' | 'BS') {
    const date = prepareDateUnchecked(year, month, day, cal);
    const [valid, errorMessage] = isValidDate(date);
    if (!valid) {
        const error = new Error(errorMessage);
        throw error;
    }
    return date;
}

export function getDateDifference<T extends DateAD | DateBS>(foo: T, bar: T) {
    const mitiIsAfterSub = isDateGreaterThan(foo, bar);

    const y = mitiIsAfterSub ? foo.y : bar.y;
    const m = mitiIsAfterSub ? foo.m : bar.m;
    const d = mitiIsAfterSub ? foo.d : bar.d;

    const y1 = !mitiIsAfterSub ? foo.y : bar.y;
    const m1 = !mitiIsAfterSub ? foo.m : bar.m;
    const d1 = !mitiIsAfterSub ? foo.d : bar.d;

    // NOTE: we can take cal from either foo or bar
    const { cal } = foo;

    const sign = mitiIsAfterSub ? 1 : -1;

    let no = 0;
    if (y !== y1) { // If the years differ
        // Get number of days 'no' till end of year
        no = getDaysInMonth(y1, m1, cal) - d1 + 1;
        for (let i = (m1 + 1); i <= 12; i += 1) {
            no += getDaysInMonth(y1, i, cal);
        }

        // Get number of days till the required year
        for (let i = y1 + 1; i < y; i += 1) {
            no += getDaysInYear(i, cal);
        }

        // Get number of days till the required month
        for (let i = 1; i < m; i += 1) {
            no += getDaysInMonth(y, i, cal);
        }

        // Get number of days till the required date
        no += d;
        no -= 1;
    } else if (m !== m1) { // If the months differ
        // Get number of days 'no' till end of month
        no = getDaysInMonth(y, m1, cal) - d1 + 1;

        // Get number of days till the required month
        for (let i = m1 + 1; i < m; i += 1) {
            no += getDaysInMonth(y, i, cal);
        }

        // Get number of days till the required date
        no += d;
        no -= 1;
    } else {
        // Get number of days till the required date
        no = d - d1;
    }

    return sign * no;
}

export function addYearsInDate(date: DateAD, no: number): DateAD;
export function addYearsInDate(date: DateBS, no: number): DateBS;
export function addYearsInDate(date: DateAD | DateBS, no: number): DateAD | DateBS
export function addYearsInDate(date: DateAD | DateBS, no: number) {
    const { cal, m } = date;
    const y = date.y + no;
    // Fix overflown day
    const d = Math.min(date.d, getDaysInMonth(y, m, cal));

    return prepareDate(y, m, d, cal);
}

export function addMonthsInDate(date: DateAD, no: number): DateAD;
export function addMonthsInDate(date: DateBS, no: number): DateBS;
export function addMonthsInDate(date: DateAD | DateBS, no: number): DateAD | DateBS
export function addMonthsInDate(date: DateAD | DateBS, no: number) {
    const { cal } = date;
    // NOTE: 'no' can be more than 12
    const y = date.y + Math.floor((date.m + no - 1) / 12);
    const m = ((date.m + no - 1) % 12) + 1;
    // Fix overflown da)y
    const d = Math.min(date.d, getDaysInMonth(y, m, cal));

    return prepareDate(y, m, d, cal);
}

export function addDaysInDate(date: DateAD, no: number): DateAD;
export function addDaysInDate(date: DateBS, no: number): DateBS;
export function addDaysInDate(date: DateAD | DateBS, no: number): DateAD | DateBS
export function addDaysInDate(date: DateAD | DateBS, no: number) {
    // return a clone of itself
    if (no === 0) {
        return prepareDate(date.y, date.m, date.d, date.cal);
    }

    // local variables that can be changed
    let { y, m, d } = date;
    const { cal } = date;

    // Get number of days 'n' till end of current year
    // 1. days remaining in current month
    let n = getDaysInMonth(y, m, cal) - d + 1;
    // 2. days remaining in following months
    for (let i = m + 1; i <= 12; i += 1) {
        n += getDaysInMonth(y, i, cal);
    }

    if (n <= no) { // If 'no' exceeds number of days in current year
        // Increment year
        y += 1;
        while (n + getDaysInYear(y, cal) <= no) {
            n += getDaysInYear(y, cal);
            y += 1;
        }
        // Increment month
        m = 1;
        while (n + getDaysInMonth(y, m, cal) <= no && m < 12) {
            n += getDaysInMonth(y, m, cal);
            m += 1;
        }
        // Increment day
        d = 1;
        d += no - n;
    } else {
        // Get number of days 'n' till end of month
        n = getDaysInMonth(y, m, cal) - d + 1;
        // If 'no' exceeds number of days in current month
        if (n <= no) {
            // Increment month
            m += 1;
            while (n + getDaysInMonth(y, m, cal) <= no) {
                n += getDaysInMonth(y, m, cal);
                m += 1;
            }
            // Increment day
            d = no - n + 1;
        } else {
            // Get day
            d += no;
        }
    }

    return prepareDate(y, m, d, cal);
}

export function subtractDaysInDate(date: DateAD | DateBS, no: number) {
    if (no === 0) {
        return prepareDate(date.y, date.m, date.d, date.cal);
    }

    let { y, m, d } = date;
    const { cal } = date;

    // Get number of days 'n' till beginning of year
    // 1. get number of days elapsed in current month
    let n = d;
    // 2. get number of days elapsed in previous months
    for (let i = m - 1; i >= 1; i -= 1) {
        n += getDaysInMonth(y, i, cal);
    }

    // If 'no' exceeds number of days elapsed in current year
    if (n <= no) {
        // Decrement year
        y -= 1;
        while (n + getDaysInYear(y, cal) <= no) {
            n += getDaysInYear(y, cal);
            y -= 1;
        }
        // Decrement month
        m = 12;
        while (n + getDaysInMonth(y, m, cal) <= no && m > 1) {
            n += getDaysInMonth(y, m, cal);
            m -= 1;
        }
        // Decrement date
        d = getDaysInMonth(y, m, cal) - (no - n);
    } else {
        // Get number of days elapsed in current month
        n = d;
        // If 'no' exceeds number of days elapsed in current month
        if (n <= no) {
            // Decrement month
            m -= 1;
            while (n + getDaysInMonth(y, m, cal) <= no) {
                n += getDaysInMonth(y, m, cal);
                m -= 1;
            }
            // Decrement date
            d = getDaysInMonth(y, m, cal) - (no - n);
        } else {
            // Get date
            d -= no;
        }
    }
    return prepareDate(y, m, d, cal);
}

export function getWeekFromDate(date: DateAD | DateBS) {
    const minDate = date.cal === 'AD' ? minAdDate : minBsDate;
    const totalDays = getDateDifference(
        date,
        minDate,
    );
    return ((totalDays + 6) % 7) + 1;
}

export function convertDate(date: DateAD, cal: 'BS'): DateBS;
export function convertDate(date: DateBS, cal: 'AD'): DateAD;
export function convertDate(date: DateBS, cal: 'BS'): DateBS;
export function convertDate(date: DateAD, cal: 'AD'): DateAD;
export function convertDate(date: DateAD | DateBS, cal: 'BS'): DateBS;
export function convertDate(date: DateAD | DateBS, cal: 'AD'): DateAD;
export function convertDate(date: DateAD | DateBS, cal: 'AD' | 'BS') {
    if (date.cal === cal) {
        return date;
    }
    const minDate = date.cal === 'AD' ? minAdDate : minBsDate;
    const totalDays = getDateDifference(
        date,
        minDate,
    );
    const minDateForNewDate = cal === 'AD'
        ? minAdDate
        : minBsDate;

    const newDate = prepareDate(minDateForNewDate.y, minDateForNewDate.m, minDateForNewDate.d, cal);
    return addDaysInDate(newDate, totalDays);
}
