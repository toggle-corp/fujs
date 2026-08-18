# Fujs

[![Install Size](https://packagephobia.now.sh/badge?p=@togglecorp/fujs)](https://packagephobia.now.sh/result?p=@togglecorp/fujs@2.1.0)
[![Build Status](https://travis-ci.com/toggle-corp/fujs.svg?branch=develop)](https://travis-ci.com/toggle-corp/fujs)
[![Maintainability](https://api.codeclimate.com/v1/badges/a48a61764483bcb17971/maintainability)](https://codeclimate.com/github/toggle-corp/fujs)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a48a61764483bcb17971/test_coverage)](https://codeclimate.com/github/toggle-corp/fujs)
[![codecov](https://codecov.io/gh/toggle-corp/fujs/branch/develop/graph/badge.svg)](https://codecov.io/gh/toggle-corp/fujs)
[![NPM Package](https://img.shields.io/npm/v/@togglecorp/fujs.svg?style=flat-square)](https://www.npmjs.com/package/@togglecorp/fujs)

[![Codecov](https://codecov.io/gh/toggle-corp/fujs/branch/develop/graphs/tree.svg)](https://codecov.io/gh/toggle-corp/fujs)

**Friendly Utility for JavaScript / TypeScript**. A collection of small helper functions for everyday coding.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Function Reference](#function-reference)
  - [Core](#core)
  - [Type checking](#type-checking)
  - [Collection / Data structure](#collection--data-structure)
  - [String](#string)
  - [Number / Math / Statistics](#number--math--statistics)
  - [Object](#object)
  - [Date / Calendar](#date--calendar)
  - [Color](#color)
  - [Comparison](#comparison)
  - [Route](#route)
  - [Misc](#misc)
  - [UI helpers](#ui-helpers)
  - [Type declarations](#type-declarations)
- [Development](#development)
- [License](#license)

## Install

```bash
npm install @togglecorp/fujs
# or
yarn add @togglecorp/fujs
```

## Usage

```js
import { isDefined, listToMap, addSeparator, getHexFromString } from '@togglecorp/fujs';

isDefined(42); // true
```

---

## Function Reference

### Core

Null-safe existence, set operations, and value resolution helpers.

```js
import { difference, intersection, isDefined, isFalsy, isFalsyString, isNaN, isNotDefined, isTruthy, isTruthyString, noOp, resolve, union } from '@togglecorp/fujs';

noOp(); // does nothing
union(new Set([1, 2]), new Set([2, 3])); // Set {1, 2, 3}
intersection(new Set([1, 2]), new Set([2, 3])); // Set {2}
difference(new Set([1, 2]), new Set([2, 3])); // Set {1}
isNaN(NaN); // true
isNotDefined(null); // true
isDefined(0); // true
isFalsy(''); // true
isTruthy('hello'); // true
isTruthyString(''); // false
resolve((x) => x * 2, 5); // 10
resolve(42); // 42
```

### Type checking

Guards and type probes.

```js
import { isInteger, isList, isObject, isValidEmail, isValidUrl, typeOf } from '@togglecorp/fujs';

isList([1, 2, 3]); // true
isObject({ a: 1 }); // true
isInteger(4); // true
typeOf(new Date()); // "date"
isValidEmail('hi@example.com'); // true
isValidUrl('https://example.com'); // true
```

### Collection / Data structure

Array/object conversions, lookups, and list operations.

```js
import { findDifferenceInList, getDefinedElementAround, getDuplicates, getElementAround, getLinkedListNode, getRandomFromList, isListEqual, listToGroupList, listToMap, mapToList, mapToMap, max, min, unique } from '@togglecorp/fujs';

isListEqual([1, 2], [1, 2]); // true
getRandomFromList(['a', 'b', 'c']); // 'a', 'b' or 'c'
getElementAround(['a', 'b', 'c'], 2); // "c"
getDefinedElementAround([null, 'b', undefined, 'd'], 2); // "b"
getDuplicates([{ id: 1 }, { id: 1 }], (d) => d.id); // ["1"]
findDifferenceInList([{ id: 1 }], [{ id: 1, name: 'x' }], (d) => d.id); // { added: [], modified: [...], removed: [], unmodified: [] }
unique([1, 2, 2, 3]); // [1, 2, 3]
max([{ v: 1 }, { v: 3 }], (d) => d.v); // { v: 3 }
min([{ v: 1 }, { v: 3 }], (d) => d.v); // { v: 1 }

listToMap([{ id: 'a', name: 'Alice' }], (d) => d.id);
// { a: { id: 'a', name: 'Alice' } }

mapToList({ a: 1, b: 2 }); // [1, 2]

mapToMap({ a: 1, b: 2 }, (key) => key.toUpperCase(), (val) => val * 2);
// { A: 2, B: 4 }

listToGroupList([{ type: 'x', v: 1 }, { type: 'y', v: 2 }, { type: 'x', v: 3 }], (d) => d.type);
// { x: [{ type: 'x', v: 1 }, { type: 'x', v: 3 }], y: [{ type: 'y', v: 2 }] }

const head = { value: 1, next: { value: 2, next: null } };
getLinkedListNode(head, 1, (node) => node?.next);
// { value: 2, next: null }
```

### String

Text formatting helpers and trigram similarity.

```js
import { camelToKebab, camelToNormal, camelToSnake, capitalize, caseInsensitiveSubmatch, formatPdfText, getRatingForContentInString, getTrigramSimilarity, getTrigrams, padStart, randomString, splitInWhitespace, trimWhitespace } from '@togglecorp/fujs';

padStart(5, 3); // "005"
capitalize('hello world'); // "Hello World"
formatPdfText('hello  \n  world'); // tidy text
randomString(8); // e.g. "a1b2c3d4"
camelToNormal('helloWorld'); // "hello world"
camelToSnake('helloWorld'); // "hello_world"
camelToKebab('helloWorld'); // "hello-world"
splitInWhitespace('  a  b  '); // ["a", "b"]
trimWhitespace('  a  b  '); // "a b"
caseInsensitiveSubmatch('Hello World', 'world'); // true
getRatingForContentInString('Hello World', 'world'); // 6

getTrigrams('hello'); // Set of trigrams
getTrigramSimilarity('hello world', 'hello there'); // 0..1
```

### Number / Math / Statistics

Formatting, normalization, and numeric helpers.

```js
import { addSeparator, bound, bucket, formattedNormalize, getNumbers, mean, median, modulo, normalize, sum } from '@togglecorp/fujs';

addSeparator(1234567); // "1,234,567"
formattedNormalize(2500000); // { number: 2.5, normalizeSuffix: 'M' }
modulo(-1, 5); // 4
sum([1, 2, 3]); // 6
mean([1, 2, 3]); // 2
median([1, 2, 3, 4]); // 2.5
bucket(7, [[0, 5, 'low'], [5, 10, 'high']]); // "high"
bound(15, 0, 10); // 10
normalize(75, 100, 0); // 0.75
getNumbers(0, 5); // [0, 1, 2, 3, 4]
```

### Object

Object manipulation and emptiness checks.

```js
import { doesObjectHaveNoData, getFirstKeyByValue, pick, removeKey } from '@togglecorp/fujs';

pick({ a: 1, b: 2 }, ['a']); // { a: 1 }
removeKey({ a: 1, b: 2 }, 'a'); // { b: 2 }
getFirstKeyByValue({ a: 1, b: 2 }, 2); // "b"
doesObjectHaveNoData({}); // true
```

### Date / Calendar

Date formatting, validation, and Bikram Sambat / A.D. calendar arithmetic.

```js
import { MIN_YEAR, addDaysInDate, addMonthsInDate, addYearsInDate, convertDate, decodeDate, encodeDate, formatDateToString, getDate, getDateDifference, getDateDifferenceHumanReadable, getDaysInMonth, getDaysInYear, getErrorForDateValues, getErrorForTimeValues, getNumDaysInMonth, getNumDaysInMonthX, getWeekFromDate, isDateEqual, isDateGreaterThan, isDateGreaterThanOrEqual, isDateLessThan, isDateLessThanOrEqual, isDateValuesComplete, isLeapYear, isTimeValuesComplete, isValidDate, prepareDate, subtractDaysInDate, toDateString } from '@togglecorp/fujs';

formatDateToString(new Date('2024-01-15'), 'yyyy-MM-dd'); // "2024-01-15"
getDate('2024-01-15'); // timestamp at midnight, local time
getDifferenceInDays('2024-01-10', '2024-01-05'); // 5
getDateDifferenceHumanReadable('2024-01-16', '2024-01-15'); // "After 1 days"
encodeDate(new Date('2024-01-15')); // "2024-01-15"
decodeDate('2024-01-15'); // Date instance
isDateValuesComplete({ yearValue: 2024, monthValue: 1, dayValue: 15 }); // true
getErrorForDateValues({ yearValue: 1800, monthValue: 1, dayValue: 15 }); // "Year should be greater than or equal to 1990"

const ad = prepareDate(2024, 1, 15, 'AD');
const bs = convertDate(ad, 'BS'); // e.g. { y: 2080, m: 10, d: 1, cal: 'BS' }
addDaysInDate(ad, 5);
getDaysInMonth(2080, 1, 'BS');
isLeapYear(2024, 'AD'); // true
toDateString(bs); // "2080-10-01"
```

### Color

Color calculations and conversions.

```js
import { getColorOnBgColor, getContrastYIQ, getHashFromString, getHexFromCode, getHexFromRgb, getHexFromRgbRaw, getHexFromString, getRgbFromHex, getRgbRawFromHex, interpolateRgb, isValidHexColor } from '@togglecorp/fujs';

getHexFromCode(12345); // "$003039"
getHashFromString('Toggle'); // number
getHexFromString(' Toggle Corp '); // e.g. "#B6E53A"
getHexFromRgbRaw([255, 0, 0]); // "#ff0000"
getHexFromRgb('rgb(255, 0, 0)'); // "#ff0000"
getRgbRawFromHex('#ff0000'); // [255, 0, 0]
getRgbFromHex('#ff0000'); // "rgb(255, 0, 0)"
getContrastYIQ('#ffffff'); // ~1
isValidHexColor('#fff'); // true
getColorOnBgColor('#ffffff'); // "#212121"
interpolateRgb([255, 0, 0], [0, 0, 255], 0.5); // [128, 0, 128]
```

### Comparison

Comparator builders for sorting. All comparators handle null/undefined values safely and accept an optional `direction` argument (`1` ascending, `-1` descending).

```js
import {
  compareBoolean,
  compareDate,
  compareLength,
  compareNumber,
  compareString,
  compareStringAsNumber,
  compareStringByWordCount,
  compareStringSearch,
} from '@togglecorp/fujs';

// Sort primitives
[true, false, true].sort(compareBoolean); // [false, true, true]
['banana', 'apple', 'cherry'].sort(compareString); // ['apple', 'banana', 'cherry']
[3, 1, 2].sort(compareNumber); // [1, 2, 3]

// Sort objects by a field
const users = [
  { name: 'Zoe', age: 30 },
  { name: 'Anna', age: 25 },
  { name: 'Bob', age: 35 },
];
users.sort((a, b) => compareString(a.name, b.name));
// [{ name: 'Anna' ... }, { name: 'Bob' ... }, { name: 'Zoe' ... }]
users.sort((a, b) => compareNumber(a.age, b.age));
// [{ name: 'Anna', age: 25 }, { name: 'Zoe', age: 30 }, { name: 'Bob', age: 35 }]

// Dates
[
  new Date('2024-01-15'),
  new Date('2024-01-01'),
].sort(compareDate);

// Descending
[1, 2, 3].sort((a, b) => compareNumber(a, b, -1)); // [3, 2, 1]

// Specialized comparators
['item-2', 'item-10', 'item-1'].sort(compareStringAsNumber); // ['item-1', 'item-2', 'item-10']
['short', 'a very long sentence', 'medium'].sort(compareLength); // ['short', 'medium', 'a very long sentence']
['one', 'one two', 'one two three'].sort(compareStringByWordCount); // ['one', 'one two', 'one two three']

// Rank strings by how close they match a search term
const items = ['apply', 'banana', 'apple'];
items.sort((a, b) => compareStringSearch(a, b, 'app'));
// ['apple', 'apply', 'banana']
```

### Route

Route parameter substitution.

```js
import { isParamRequired, reverseRoute } from '@togglecorp/fujs';

reverseRoute('/users/:id/posts/:postId?', { id: 1, postId: 42 }); // "/users/1/posts/42"
isParamRequired('/users/:id', 'id'); // true
```

### Misc

Versioning helper.

```js
import { checkVersion } from '@togglecorp/fujs';

checkVersion(1, 2); // { shouldSetValue: true, isValueOverriden: true }
```

### UI helpers

```js
import { _cs } from '@togglecorp/fujs';

_cs('btn', false, 'active', undefined); // "btn active"
```

### Type declarations

Exported TypeScript helpers.

- `FirstArgument<T>`
- `KeySelector<T, K>`
- `Maybe<T>` — `T | undefined | null`
- `Obj<T>` — `Record<string, T>`
- `OptionKey` — `string | number`
- `Parameters<T>`
- `ReturnType<T>`

---

## Development

```bash
yarn install
yarn test
yarn build
```

## License

ISC
