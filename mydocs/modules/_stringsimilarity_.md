[@togglecorp/fujs](../README.md) › [Globals](../globals.md) › ["stringSimilarity"](_stringsimilarity_.md)

# External module: "stringSimilarity"

## Index

### Functions

* [getTrigramSimilarity](_stringsimilarity_.md#gettrigramsimilarity)
* [getTrigrams](_stringsimilarity_.md#gettrigrams)

## Functions

###  getTrigramSimilarity

▸ **getTrigramSimilarity**(`foo`: string, `bar`: string): *number*

*Defined in [stringSimilarity.ts:29](https://github.com/toggle-corp/fujs/blob/e17c407/src/stringSimilarity.ts#L29)*

Get trigram similarity between two sentences

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`foo` | string | first string |
`bar` | string | second string  |

**Returns:** *number*

___

###  getTrigrams

▸ **getTrigrams**(`sentence`: string): *Set‹string›*

*Defined in [stringSimilarity.ts:7](https://github.com/toggle-corp/fujs/blob/e17c407/src/stringSimilarity.ts#L7)*

Get trigrams from a sentence

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sentence` | string |   |

**Returns:** *Set‹string›*
