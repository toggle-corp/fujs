// eslint-disable-next-line max-classes-per-file
import { padStart } from './string';

export class Ymd {
    private y: number;

    private m: number;

    private d: number;

    public constructor(year: number, month: number, day: number) {
        this.y = year;
        this.m = month;
        this.d = day;
    }

    public getString = () => (
        `${padStart(this.y, 4)}-${padStart(this.m, 2)}-${padStart(this.d, 2)}`
    );

    public getYear = () => this.y;

    public getMonth = () => this.m;

    public getDay = () => this.d;

    public isEqual = (other: Ymd) => (
        this.y === other.y
        && this.m === other.m
        && this.d === other.d
    );

    public isLessThan = (other: Ymd) => (
        this.y < other.y
        || (this.y === other.y && this.m < other.m)
        || (this.y === other.y && this.m === other.m && this.d < other.d)
    );

    public isNotEqual = (other: Ymd) => (
        !this.isEqual(other)
    );

    public isGreaterThanOrEqual = (other: Ymd) => (
        !this.isLessThan(other)
    );

    public isGreaterThan = (other: Ymd) => (
        !this.isEqual(other) && !this.isLessThan(other)
    );

    public isLessThanOrEqual = (other: Ymd) => (
        this.isEqual(other) || this.isLessThan(other)
    );
}

export interface Dictionary {
    getDaysInYear: (year: number) => number;
    getDaysInMonth: (year: number, month: number) => number;
    isLeapYear: (year: number) => boolean;

    isValidDate: (ymd: Ymd) => [boolean, string?];

    getMinYmd: () => Ymd;
    getMaxYmd: () => Ymd;
}

export class Miti extends Ymd {
    private dict: Dictionary;

    private totalDays: number;

    public constructor(year: number, month: number, day: number, dict: Dictionary) {
        super(year, month, day);
        this.dict = dict;

        const [isValid, errorMessage] = this.dict.isValidDate(this);
        if (!isValid) {
            const error = new Error(errorMessage);
            throw error;
        }

        // NOTE: may not need to calculate this eagerly
        this.totalDays = this.getDifference(this.dict.getMinYmd());
    }

    // private getTotalDays = () => this.totalDays

    public getWeek = () => (
        ((this.totalDays + 6) % 7) + 1
    );

    public getDaysInCurrentMonth = () => (
        this.dict.getDaysInMonth(this.getYear(), this.getMonth())
    );

    public getDaysInCurrentYear = () => (
        this.dict.getDaysInYear(this.getYear())
    );

    public getDifference = (sub: Ymd) => {
        const mitiIsAfterSub = this.isGreaterThan(sub);

        const y = mitiIsAfterSub ? this.getYear() : sub.getYear();
        const m = mitiIsAfterSub ? this.getMonth() : sub.getMonth();
        const d = mitiIsAfterSub ? this.getDay() : sub.getDay();

        const y1 = !mitiIsAfterSub ? this.getYear() : sub.getYear();
        const m1 = !mitiIsAfterSub ? this.getMonth() : sub.getMonth();
        const d1 = !mitiIsAfterSub ? this.getDay() : sub.getDay();

        const sign = mitiIsAfterSub ? 1 : -1;

        let no = 0;
        if (y !== y1) { // If the years differ
            // Get number of days 'no' till end of year
            no = this.dict.getDaysInMonth(y1, m1) - d1 + 1;
            for (let i = (m1 + 1); i <= 12; i += 1) {
                no += this.dict.getDaysInMonth(y1, i);
            }

            // Get number of days till the required year
            for (let i = y1 + 1; i < y; i += 1) {
                no += this.dict.getDaysInYear(i);
            }

            // Get number of days till the required month
            for (let i = 1; i < m; i += 1) {
                no += this.dict.getDaysInMonth(y, i);
            }

            // Get number of days till the required date
            no += d;
            no -= 1;
        } else if (m !== m1) { // If the months differ
            // Get number of days 'no' till end of month
            no = this.dict.getDaysInMonth(y, m1) - d1 + 1;

            // Get number of days till the required month
            for (let i = m1 + 1; i < m; i += 1) {
                no += this.dict.getDaysInMonth(y, i);
            }

            // Get number of days till the required date
            no += d;
            no -= 1;
        } else {
            // Get number of days till the required date
            no = d - d1;
        }

        return sign * no;
    };

    public addYears = (no: number) => {
        const y = this.getYear() + no;
        const m = this.getMonth();
        // Fix overflown day
        const d = Math.min(this.getDay(), this.dict.getDaysInMonth(y, m));

        return new Miti(y, m, d, this.dict);
    };

    public addMonths = (no: number) => {
        // NOTE: 'no' can be more than 12
        const y = this.getYear() + Math.floor((this.getMonth() + no - 1) / 12);
        const m = ((this.getMonth() + no - 1) % 12) + 1;
        // Fix overflown da)y
        const d = Math.min(this.getDay(), this.dict.getDaysInMonth(y, m));

        return new Miti(y, m, d, this.dict);
    };

    public addDays = (no: number) => {
        // return a clone of itself
        if (no === 0) {
            return new Miti(this.getYear(), this.getMonth(), this.getDay(), this.dict);
        }

        // local variables that can be changed
        let y = this.getYear();
        let m = this.getMonth();
        let d = this.getDay();

        // Get number of days 'n' till end of current year
        // 1. days remaining in current month
        let n = this.dict.getDaysInMonth(y, m) - d + 1;
        // 2. days remaining in following months
        for (let i = m + 1; i <= 12; i += 1) {
            n += this.dict.getDaysInMonth(y, i);
        }

        if (n <= no) { // If 'no' exceeds number of days in current year
            // Increment year
            y += 1;
            while (n + this.dict.getDaysInYear(y) <= no) {
                n += this.dict.getDaysInYear(y);
                y += 1;
            }
            // Increment month
            m = 1;
            while (n + this.dict.getDaysInMonth(y, m) <= no && m < 12) {
                n += this.dict.getDaysInMonth(y, m);
                m += 1;
            }
            // Increment day
            d = 1;
            d += no - n;
        } else {
            // Get number of days 'n' till end of month
            n = this.dict.getDaysInMonth(y, m) - d + 1;
            // If 'no' exceeds number of days in current month
            if (n <= no) {
                // Increment month
                m += 1;
                while (n + this.dict.getDaysInMonth(y, m) <= no) {
                    n += this.dict.getDaysInMonth(y, m);
                    m += 1;
                }
                // Increment day
                d = no - n + 1;
            } else {
                // Get day
                d += no;
            }
        }

        return new Miti(y, m, d, this.dict);
    };

    public subtractDays = (no: number) => {
        if (no === 0) {
            return new Miti(this.getYear(), this.getMonth(), this.getDay(), this.dict);
        }

        let y = this.getYear();
        let m = this.getMonth();
        let d = this.getDay();

        // Get number of days 'n' till beginning of year
        // 1. get number of days elapsed in current month
        let n = d;
        // 2. get number of days elapsed in previous months
        for (let i = m - 1; i >= 1; i -= 1) {
            n += this.dict.getDaysInMonth(y, i);
        }

        // If 'no' exceeds number of days elapsed in current year
        if (n <= no) {
            // Decrement year
            y -= 1;
            while (n + this.dict.getDaysInYear(y) <= no) {
                n += this.dict.getDaysInYear(y);
                y -= 1;
            }
            // Decrement month
            m = 12;
            while (n + this.dict.getDaysInMonth(y, m) <= no && m > 1) {
                n += this.dict.getDaysInMonth(y, m);
                m -= 1;
            }
            // Decrement date
            d = this.dict.getDaysInMonth(y, m) - (no - n);
        } else {
            // Get number of days elapsed in current month
            n = d;
            // If 'no' exceeds number of days elapsed in current month
            if (n <= no) {
                // Decrement month
                m -= 1;
                while (n + this.dict.getDaysInMonth(y, m) <= no) {
                    n += this.dict.getDaysInMonth(y, m);
                    m -= 1;
                }
                // Decrement date
                d = this.dict.getDaysInMonth(y, m) - (no - n);
            } else {
                // Get date
                d -= no;
            }
        }
        return new Miti(y, m, d, this.dict);
    };

    public convertTo = (dict: Dictionary) => {
        const minYmd = dict.getMinYmd();
        const newMiti = new Miti(minYmd.getYear(), minYmd.getMonth(), minYmd.getDay(), dict);
        return newMiti.addDays(this.totalDays);
    };
}

export const AD: Dictionary = (() => {
    const minDate = new Ymd(1944, 1, 1);
    const maxDate = new Ymd(2034, 4, 12);

    const data = [
        [365, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        [366, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    ];

    const isLeapYear = (year: number) => (
        (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    );

    const getDaysInYear = (year: number) => (
        isLeapYear(year) ? 366 : 365
    );

    const getDaysInMonth = (year: number, month: number) => {
        if (month < 1 || month > 12) {
            const error = new Error('Year out of bounds');
            throw error;
        }
        const index = isLeapYear(year) ? 1 : 0;
        return data[index][month];
    };

    const isValidDate = (ymd: Ymd): [boolean, string?] => {
        if (ymd.getYear() < minDate.getYear() || ymd.getYear() > maxDate.getYear()) {
            return [false, 'Year out of bounds'];
        }
        if (ymd.getMonth() < 0 || ymd.getMonth() > 12) {
            return [false, 'Month out of bounds'];
        }
        if (ymd.getDay() < 0 || ymd.getDay() > getDaysInMonth(ymd.getYear(), ymd.getMonth())) {
            return [false, 'Day out of bounds'];
        }

        // NOTE: can be inside min/max year but still be out of bounds for conversion
        if (ymd.isGreaterThan(maxDate) || ymd.isLessThan(minDate)) {
            return [false, 'Miti out of bounds'];
        }
        return [true];
    };

    return {
        getMinYmd: () => minDate,
        getMaxYmd: () => maxDate,
        isValidDate,
        isLeapYear,
        getDaysInYear,
        getDaysInMonth,
    };
})();

export const BS: Dictionary = (() => {
    const minDate = new Ymd(2000, 9, 17);
    const maxDate = new Ymd(2090, 12, 30);

    const data = [
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

    const getDaysInYear = (year: number) => {
        if (year < minDate.getYear() || year > maxDate.getYear()) {
            const error = new Error('Year out of bounds');
            throw error;
        }
        const index = year - minDate.getYear();
        return data[index][0];
    };

    const getDaysInMonth = (year: number, month: number) => {
        if (year < minDate.getYear() || year > maxDate.getYear()) {
            const error = new Error('Year out of bounds');
            throw error;
        }
        if (month < 1 || month > 12) {
            const error = new Error('Month out of bounds');
            throw error;
        }

        const index = year - minDate.getYear();
        return data[index][month];
    };

    const isLeapYear = (year: number) => (
        getDaysInYear(year) === 366
    );

    const isValidDate = (ymd: Ymd): [boolean, string?] => {
        if (ymd.getYear() < minDate.getYear() || ymd.getYear() > maxDate.getYear()) {
            return [false, 'Year out of bounds'];
        }
        if (ymd.getMonth() < 0 || ymd.getMonth() > 12) {
            return [false, 'Month out of bounds'];
        }
        if (ymd.getDay() < 0 || ymd.getDay() > getDaysInMonth(ymd.getYear(), ymd.getMonth())) {
            return [false, 'Day out of bounds'];
        }

        // NOTE: can be inside min/max year but still be out of bounds for conversion
        if (ymd.isGreaterThan(maxDate) || ymd.isLessThan(minDate)) {
            return [false, 'Miti out of bounds'];
        }
        return [true];
    };

    return {
        getMinYmd: () => minDate,
        getMaxYmd: () => maxDate,
        isValidDate,
        isLeapYear,
        getDaysInYear,
        getDaysInMonth,
    };
})();
