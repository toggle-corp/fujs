[@togglecorp/fujs](../README.md) › [Globals](../globals.md) › ["misc"](_misc_.md)

# External module: "misc"

## Index

### Functions

* [checkVersion](_misc_.md#checkversion)

## Functions

###  checkVersion

▸ **checkVersion**(`oldVersionId`: [Maybe](_declarations_.md#maybe)‹number›, `newVersionId`: number): *object*

*Defined in [misc.ts:12](https://github.com/toggle-corp/fujs/blob/e17c407/src/misc.ts#L12)*

Check if new object should be set
and should the message of overriden shown

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`oldVersionId` | [Maybe](_declarations_.md#maybe)‹number› | - |
`newVersionId` | number |   |

**Returns:** *object*

* **isValueOverriden**: *boolean* = isTruthy(oldVersionId) && oldVersionId < newVersionId

* **shouldSetValue**: *boolean* = isFalsy(oldVersionId) || oldVersionId < newVersionId
