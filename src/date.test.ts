import { getDifferenceInDays, encodeDate, decodeDate } from './date';

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
