> **[@togglecorp/fujs](../README.md)**

[Globals](../globals.md) / ["comparision"](_comparision_.md) /

# External module: "comparision"

## Index

### Variables

* [compareBoolean](_comparision_.md#const-compareboolean)
* [compareDate](_comparision_.md#const-comparedate)
* [compareLength](_comparision_.md#const-comparelength)
* [compareNumber](_comparision_.md#const-comparenumber)
* [compareString](_comparision_.md#const-comparestring)
* [compareStringAsNumber](_comparision_.md#const-comparestringasnumber)
* [compareStringByWordCount](_comparision_.md#const-comparestringbywordcount)

### Functions

* [compareStringSearch](_comparision_.md#const-comparestringsearch)

## Variables

### `Const` compareBoolean

• **compareBoolean**: *`(Anonymous function)`* =  comparision((x: boolean) => x, (a, b) => (Number(a) - Number(b)))

*Defined in [comparision.ts:25](https://github.com/toggle-corp/fujs/blob/6346fe3/src/comparision.ts#L25)*

___

### `Const` compareDate

• **compareDate**: *`(Anonymous function)`* =  comparision((x: Date | string | number) => x, (a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getTime() - dateB.getTime();
})

*Defined in [comparision.ts:28](https://github.com/toggle-corp/fujs/blob/6346fe3/src/comparision.ts#L28)*

___

### `Const` compareLength

• **compareLength**: *`(Anonymous function)`* =  comparision((x: string | unknown[]) => x.length, (a, b) => (a - b))

*Defined in [comparision.ts:35](https://github.com/toggle-corp/fujs/blob/6346fe3/src/comparision.ts#L35)*

___

### `Const` compareNumber

• **compareNumber**: *`(Anonymous function)`* =  comparision((x: number) => x, (a, b) => (a - b))

*Defined in [comparision.ts:27](https://github.com/toggle-corp/fujs/blob/6346fe3/src/comparision.ts#L27)*

___

### `Const` compareString

• **compareString**: *`(Anonymous function)`* =  comparision((x: string) => x, (a, b) => a.localeCompare(b))

*Defined in [comparision.ts:26](https://github.com/toggle-corp/fujs/blob/6346fe3/src/comparision.ts#L26)*

___

### `Const` compareStringAsNumber

• **compareStringAsNumber**: *`(Anonymous function)`* =  comparision((x: string) => Number(x), (a, b) => a - b)

*Defined in [comparision.ts:34](https://github.com/toggle-corp/fujs/blob/6346fe3/src/comparision.ts#L34)*

___

### `Const` compareStringByWordCount

• **compareStringByWordCount**: *`(Anonymous function)`* =  comparision((x: string) => x.split(/\s+/).length, (a, b) => a - b)

*Defined in [comparision.ts:36](https://github.com/toggle-corp/fujs/blob/6346fe3/src/comparision.ts#L36)*

## Functions

### `Const` compareStringSearch

▸ **compareStringSearch**(`x`: [Maybe](_declarations_.md#maybe)‹*string*›, `y`: [Maybe](_declarations_.md#maybe)‹*string*›, `z`: [Maybe](_declarations_.md#maybe)‹*string*›, `d?`: undefined | number): *number*

*Defined in [comparision.ts:38](https://github.com/toggle-corp/fujs/blob/6346fe3/src/comparision.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [Maybe](_declarations_.md#maybe)‹*string*› |
`y` | [Maybe](_declarations_.md#maybe)‹*string*› |
`z` | [Maybe](_declarations_.md#maybe)‹*string*› |
`d?` | undefined \| number |

**Returns:** *number*