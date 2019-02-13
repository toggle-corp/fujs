import {
    getDifferenceInDays,
    encodeDate,
    decodeDate,
    breakFormat,
    populateFormat,
    getErrorForDateValues,
} from './date';

test('break format', () => {
    expect(breakFormat('')).toEqual([]);
    expect(breakFormat('date')).toEqual([
        { value: 'date' }
    ]);
    expect(breakFormat('yyyy')).toEqual([
        { value: 'yyyy', type: 'date' }
    ]);
    expect(breakFormat('mm')).toEqual([
        { value: 'mm', type: 'time' }
    ]);
    expect(breakFormat('yyyy MM dd')).toEqual([
        { value:'yyyy MM dd', type: 'date' },
    ]);
    expect(breakFormat('date: yyyy-MM-dd time: hh:mm?')).toEqual([
        { value:'date: ' },
        { value:'yyyy-MM-dd', type: 'date' },
        { value:' time: ' },
        { value:'hh:mm', type: 'time' },
        { value:'?' },
    ]);
    expect(breakFormat('time: hh:mm date: yyyy-MM-dd?')).toEqual([
        { value:'time: ' },
        { value:'hh:mm', type: 'time' },
        { value:' date: ' },
        { value:'yyyy-MM-dd', type: 'date' },
        { value:'?' },
    ]);
});

test('populate format', () => {
    const date = new Date(1550115533512);
    expect(populateFormat(breakFormat('Date: MM/dd hh:mm'), date).map(v => v.value).join('')).toBe('Date: 02/14 09:23');
});

test('get difference in days', () => {
    const a = new Date();
    a.setHours(10);
    const b = (new Date());
    b.setHours(23);
    b.setMinutes(2);
    b.setDate(a.getDate() - 1);
    expect(getDifferenceInDays(a.getTime(), b.getTime())).toEqual(1);
});

test('encode date to string', () => {
    const date = new Date(2016, 11, 13);
    const dateStr = '2016-12-13';
    expect(encodeDate(date)).toEqual(dateStr);
});


test('decode date from string and timestamp', () => {
    const date = new Date(2016, 11, 13);
    const dateStr = '2016-12-13';
    const dateIso = date.toISOString();
    const dateTimestamp = date.getTime();

    expect(decodeDate(dateStr)).toEqual(date);
    expect(decodeDate(dateIso)).toEqual(date);
    expect(decodeDate(dateTimestamp)).toEqual(date);
});

test('get error for date values', () => {
    expect(getErrorForDateValues({})).toEqual(undefined);
    expect(getErrorForDateValues({ yearValue: 2000 })).toEqual('Date values incomplete');
    expect(getErrorForDateValues({ yearValue: 100 })).toEqual('Date values incomplete');
    expect(getErrorForDateValues({ monthValue: 12 })).toEqual('Date values incomplete');
    expect(getErrorForDateValues({ dayValue: 100 })).toEqual('Date values incomplete');
    expect(getErrorForDateValues({ yearValue: 100, monthValue: 1, dayValue: 1 })).toEqual('Year should be greater than or equal to 1990');
    expect(getErrorForDateValues({ yearValue: 2000, monthValue: 13, dayValue: 1 })).toEqual('Month should be between 1 and 12');
    expect(getErrorForDateValues({ yearValue: 2000, monthValue: 0, dayValue: 1 })).toEqual('Month should be between 1 and 12');
    expect(getErrorForDateValues({ yearValue: 2000, monthValue: 12, dayValue: 32 })).toEqual('Invalid day for this month');
});
