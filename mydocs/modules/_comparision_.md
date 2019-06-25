[@togglecorp/fujs](../README.md) > ["comparision"](../modules/_comparision_.md)

# External module: "comparision"

## Index

### Variables

* [compareBoolean](_comparision_.md#compareboolean)
* [compareDate](_comparision_.md#comparedate)
* [compareLength](_comparision_.md#comparelength)
* [compareNumber](_comparision_.md#comparenumber)
* [compareString](_comparision_.md#comparestring)
* [compareStringAsNumber](_comparision_.md#comparestringasnumber)
* [compareStringByWordCount](_comparision_.md#comparestringbywordcount)

### Functions

* [compareStringSearch](_comparision_.md#comparestringsearch)

---

## Variables

<a id="compareboolean"></a>

### `<Const>` compareBoolean

**● compareBoolean**: *`(Anonymous function)`* =  comparision((x: boolean) => x, (a, b) => (Number(a) - Number(b)))

*Defined in [comparision.ts:25](https://github.com/toggle-corp/fujs/blob/ade87ee/src/comparision.ts#L25)*

___
<a id="comparedate"></a>

### `<Const>` compareDate

**● compareDate**: *`(Anonymous function)`* =  comparision((x: Date | string | number) => x, (a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getTime() - dateB.getTime();
})

*Defined in [comparision.ts:28](https://github.com/toggle-corp/fujs/blob/ade87ee/src/comparision.ts#L28)*

___
<a id="comparelength"></a>

### `<Const>` compareLength

**● compareLength**: *`(Anonymous function)`* =  comparision((x: string | unknown[]) => x.length, (a, b) => (a - b))

*Defined in [comparision.ts:35](https://github.com/toggle-corp/fujs/blob/ade87ee/src/comparision.ts#L35)*

___
<a id="comparenumber"></a>

### `<Const>` compareNumber

**● compareNumber**: *`(Anonymous function)`* =  comparision((x: number) => x, (a, b) => (a - b))

*Defined in [comparision.ts:27](https://github.com/toggle-corp/fujs/blob/ade87ee/src/comparision.ts#L27)*

___
<a id="comparestring"></a>

### `<Const>` compareString

**● compareString**: *`(Anonymous function)`* =  comparision((x: string) => x, (a, b) => a.localeCompare(b))

*Defined in [comparision.ts:26](https://github.com/toggle-corp/fujs/blob/ade87ee/src/comparision.ts#L26)*

___
<a id="comparestringasnumber"></a>

### `<Const>` compareStringAsNumber

**● compareStringAsNumber**: *`(Anonymous function)`* =  comparision((x: string) => Number(x), (a, b) => a - b)

*Defined in [comparision.ts:34](https://github.com/toggle-corp/fujs/blob/ade87ee/src/comparision.ts#L34)*

___
<a id="comparestringbywordcount"></a>

### `<Const>` compareStringByWordCount

**● compareStringByWordCount**: *`(Anonymous function)`* =  comparision((x: string) => x.split(/\s+/).length, (a, b) => a - b)

*Defined in [comparision.ts:36](https://github.com/toggle-corp/fujs/blob/ade87ee/src/comparision.ts#L36)*

___

## Functions

<a id="comparestringsearch"></a>

### `<Const>` compareStringSearch

▸ **compareStringSearch**(x: *[Maybe](_declarations_.md#maybe)<`string`>*, y: *[Maybe](_declarations_.md#maybe)<`string`>*, z: *[Maybe](_declarations_.md#maybe)<`string`>*, d?: *`undefined` \| `number`*): `number`

*Defined in [comparision.ts:38](https://github.com/toggle-corp/fujs/blob/ade87ee/src/comparision.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | [Maybe](_declarations_.md#maybe)<`string`> |
| y | [Maybe](_declarations_.md#maybe)<`string`> |
| z | [Maybe](_declarations_.md#maybe)<`string`> |
| `Optional` d | `undefined` \| `number` |

**Returns:** `number`

___

