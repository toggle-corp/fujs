[@togglecorp/fujs](../README.md) > ["transform"](../modules/_transform_.md)

# External module: "transform"

## Index

### Functions

* [listToGroupList](_transform_.md#listtogrouplist)
* [listToMap](_transform_.md#listtomap)
* [mapToList](_transform_.md#maptolist)
* [mapToMap](_transform_.md#maptomap)

---

## Functions

<a id="listtogrouplist"></a>

###  listToGroupList

▸ **listToGroupList**<`T`>(list: *[Maybe](_declarations_.md#maybe)<`T`[]>*, keySelector: *`KeySelector`<`T`>*): [Obj](_declarations_.md#obj)<`T`>

▸ **listToGroupList**<`T`,`Q`>(list: *[Maybe](_declarations_.md#maybe)<`T`[]>*, keySelector: *`KeySelector`<`T`>*, modifier: *`Modifier`<`T`, `Q`>*): [Obj](_declarations_.md#obj)<`Q`>

*Defined in [transform.ts:93](https://github.com/toggle-corp/fujs/blob/ade87ee/src/transform.ts#L93)*

Group list into object of list. Items in list are grouped by key returned by keySelector

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| list | [Maybe](_declarations_.md#maybe)<`T`[]> |  \- |
| keySelector | `KeySelector`<`T`> |  get key for item in list |

**Returns:** [Obj](_declarations_.md#obj)<`T`>

*Defined in [transform.ts:94](https://github.com/toggle-corp/fujs/blob/ade87ee/src/transform.ts#L94)*

**Type parameters:**

#### T 
#### Q 
**Parameters:**

| Name | Type |
| ------ | ------ |
| list | [Maybe](_declarations_.md#maybe)<`T`[]> |
| keySelector | `KeySelector`<`T`> |
| modifier | `Modifier`<`T`, `Q`> |

**Returns:** [Obj](_declarations_.md#obj)<`Q`>

___
<a id="listtomap"></a>

###  listToMap

▸ **listToMap**<`T`>(list: *[Maybe](_declarations_.md#maybe)<`T`[]>*, keySelector: *`KeySelector`<`T`>*): [Obj](_declarations_.md#obj)<`T`>

▸ **listToMap**<`T`,`Q`>(list: *[Maybe](_declarations_.md#maybe)<`T`[]>*, keySelector: *`KeySelector`<`T`>*, modifier: *`Modifier`<`T`, `Q`>*): [Obj](_declarations_.md#obj)<`Q`>

*Defined in [transform.ts:24](https://github.com/toggle-corp/fujs/blob/ade87ee/src/transform.ts#L24)*

Transform list to object

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| list | [Maybe](_declarations_.md#maybe)<`T`[]> |  \- |
| keySelector | `KeySelector`<`T`> |  get key from item in list |

**Returns:** [Obj](_declarations_.md#obj)<`T`>

*Defined in [transform.ts:25](https://github.com/toggle-corp/fujs/blob/ade87ee/src/transform.ts#L25)*

**Type parameters:**

#### T 
#### Q 
**Parameters:**

| Name | Type |
| ------ | ------ |
| list | [Maybe](_declarations_.md#maybe)<`T`[]> |
| keySelector | `KeySelector`<`T`> |
| modifier | `Modifier`<`T`, `Q`> |

**Returns:** [Obj](_declarations_.md#obj)<`Q`>

___
<a id="maptolist"></a>

###  mapToList

▸ **mapToList**<`T`>(obj: *[Maybe](_declarations_.md#maybe)<[Obj](_declarations_.md#obj)<`T`>>*): `T`[]

▸ **mapToList**<`T`,`Q`>(obj: *[Maybe](_declarations_.md#maybe)<[Obj](_declarations_.md#obj)<`T`>>*, modifier: *`ListModifier`<`T`, `Q`>*): `Q`[]

*Defined in [transform.ts:47](https://github.com/toggle-corp/fujs/blob/ade87ee/src/transform.ts#L47)*

Transform object to list

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| obj | [Maybe](_declarations_.md#maybe)<[Obj](_declarations_.md#obj)<`T`>> |  \- |

**Returns:** `T`[]

*Defined in [transform.ts:48](https://github.com/toggle-corp/fujs/blob/ade87ee/src/transform.ts#L48)*

**Type parameters:**

#### T 
#### Q 
**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | [Maybe](_declarations_.md#maybe)<[Obj](_declarations_.md#obj)<`T`>> |
| modifier | `ListModifier`<`T`, `Q`> |

**Returns:** `Q`[]

___
<a id="maptomap"></a>

###  mapToMap

▸ **mapToMap**<`T`>(obj: *[Maybe](_declarations_.md#maybe)<[Obj](_declarations_.md#obj)<`T`>>*, keySelector?: *`NewKeySelector`<`T`>*): [Obj](_declarations_.md#obj)<`T`>

▸ **mapToMap**<`T`,`Q`>(obj: *[Maybe](_declarations_.md#maybe)<[Obj](_declarations_.md#obj)<`T`>>*, keySelector: *`NewKeySelector`<`T`> \| `undefined`*, modifier: *`Modifier`<`T`, `Q`>*): [Obj](_declarations_.md#obj)<`Q`>

*Defined in [transform.ts:69](https://github.com/toggle-corp/fujs/blob/ade87ee/src/transform.ts#L69)*

Transform object to object

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| obj | [Maybe](_declarations_.md#maybe)<[Obj](_declarations_.md#obj)<`T`>> |  \- |
| `Optional` keySelector | `NewKeySelector`<`T`> |  get new key for item in object |

**Returns:** [Obj](_declarations_.md#obj)<`T`>

*Defined in [transform.ts:70](https://github.com/toggle-corp/fujs/blob/ade87ee/src/transform.ts#L70)*

**Type parameters:**

#### T 
#### Q 
**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | [Maybe](_declarations_.md#maybe)<[Obj](_declarations_.md#obj)<`T`>> |
| keySelector | `NewKeySelector`<`T`> \| `undefined` |
| modifier | `Modifier`<`T`, `Q`> |

**Returns:** [Obj](_declarations_.md#obj)<`Q`>

___

