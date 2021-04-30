[@togglecorp/fujs](../README.md) › [Globals](../globals.md) › ["calendar"](_calendar_.md)

# External module: "calendar"

## Index

### Classes

* [Miti](../classes/_calendar_.miti.md)
* [Ymd](../classes/_calendar_.ymd.md)

### Interfaces

* [Dictionary](../interfaces/_calendar_.dictionary.md)

### Variables

* [AD](_calendar_.md#const-ad)
* [BS](_calendar_.md#const-bs)

## Variables

### `Const` AD

• **AD**: *[Dictionary](../interfaces/_calendar_.dictionary.md)* = (() => {
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
})()

*Defined in [calendar.ts:291](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L291)*

___

### `Const` BS

• **BS**: *[Dictionary](../interfaces/_calendar_.dictionary.md)* = (() => {
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
})()

*Defined in [calendar.ts:345](https://github.com/toggle-corp/fujs/blob/e17c407/src/calendar.ts#L345)*
