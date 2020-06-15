[@togglecorp/fujs](../README.md) › [Globals](../globals.md) › ["route"](_route_.md)

# External module: "route"

## Index

### Functions

* [isParamRequired](_route_.md#isparamrequired)
* [reverseRoute](_route_.md#reverseroute)

## Functions

###  isParamRequired

▸ **isParamRequired**(`route`: string, `param`: string): *boolean*

*Defined in [route.ts:48](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/route.ts#L48)*

Identify if param is required in certain route

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`route` | string | route template |
`param` | string | parameter name  |

**Returns:** *boolean*

___

###  reverseRoute

▸ **reverseRoute**(`route`: string, `params`: [Obj](_declarations_.md#obj)‹string | number›): *string*

*Defined in [route.ts:8](https://github.com/toggle-corp/fujs/blob/25ba3d4/src/route.ts#L8)*

Fill parameters in route url

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`route` | string | route template |
`params` | [Obj](_declarations_.md#obj)‹string &#124; number› | map of values  |

**Returns:** *string*
