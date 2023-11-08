/**
 * Identifies if item is a list.
 * @param item anything
 */
export function isList(item: unknown): item is unknown[] {
    return Array.isArray(item);
}

/**
 * Identifies if item is an object.
 * `null` and `list` are not considered as object.
 * @param item anything
 */
export function isObject(item: unknown): item is object {
    return item !== null && typeof item === 'object' && !isList(item);
}

/**
 * Identifies if item is an integer.
 * Float values are not not considered as integer.
 * @param item anything
 */
export function isInteger(value: unknown): value is number {
    return typeof value === 'number' && value % 1 === 0;
}

export const basicTypes = [
    'Boolean',
    'Number',
    'String',
    'Function',
    'Array',
    'Date',
    'RegExp',
    'Object',
    'Error',
    'Symbol',
] as const;

// Mapping to hold javascript class to custom type
const classToType = basicTypes.reduce<{ [key in `[object ${typeof basicTypes[number]}]`]?: string }>(
    (acc, type: string) => ({
        ...acc,
        [`[object ${type}]`]: type.toLowerCase(),
    }),
    {},
);

/**
 * Get type of an item.
 * Valid types: null, boolean, number, string, function, array, date, regexp, object, error, symbol
 * @param item anything
 * @returns type of that item
 */
export const typeOf = (item: unknown): string => {
    if (item == null) {
        return 'null';
    }

    const simpleType = typeof item;
    return (simpleType === 'object' || simpleType === 'function')
        ? (classToType[classToType.toString.call(item) as keyof typeof classToType] ?? 'object')
        : simpleType;
};

/**
 * Identifies if string is a valid email.
 * @param item any string
 */
export function isValidEmail(value: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}

/**
 * Identifies if string is a valid url.
 * @param item any string
 */
export function isValidUrl(value: string) {
    //
    // Regular Expression for URL validation
    //
    // Author: Diego Perini
    // Updated: 2010/12/05
    // License: MIT
    //
    // Copyright (c) 2010-2013 Diego Perini (http://www.iport.it)
    //
    // Permission is hereby granted, free of charge, to any person
    // obtaining a copy of this software and associated documentation
    // files (the "Software"), to deal in the Software without
    // restriction, including without limitation the rights to use,
    // copy, modify, merge, publish, distribute, sublicense, and/or sell
    // copies of the Software, and to permit persons to whom the
    // Software is furnished to do so, subject to the following
    // conditions:
    //
    // The above copyright notice and this permission notice shall be
    // included in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    // EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    // OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    // NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    // HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    // WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    // FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    // OTHER DEALINGS IN THE SOFTWARE.
    //
    // the regular expression composed & commented
    // could be easily tweaked for RFC compliance,
    // it was expressly modified to fit & satisfy
    // these test for an URL shortener:
    //
    //   http://mathiasbynens.be/demo/url-regex
    //
    // Notes on possible differences from a standard/generic validation:
    //
    // - utf-8 char class take in consideration the full Unicode range
    // - TLDs have been made mandatory so single names like "localhost" fails
    // - protocols have been restricted to ftp, http and https only as requested
    //
    // Changes:
    //
    // - IP address dotted notation validation, range: 1.0.0.0 - 223.255.255.255
    //   first and last IP address of each class is considered invalid
    //   (since they are broadcast/network addresses)
    //
    // - Added exclusion of private, reserved and/or local networks ranges
    //
    // - Made starting path slash optional (http://example.com?foo=bar)
    //
    // - Allow a dot (.) at the end of hostnames (http://example.com.)
    //

    const re = new RegExp(
        '^'
        // protocol identifier
        + '(?:(?:https?|ftp)://)'
        // user:pass authentication
        + '(?:\\S+(?::\\S*)?@)?'
        + '(?:'
          // IP address exclusion
          // private & local networks
          + '(?!(?:10|127)(?:\\.\\d{1,3}){3})'
          + '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})'
          + '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})'
          // IP address dotted notation octets
          // excludes loopback network 0.0.0.0
          // excludes reserved space >= 224.0.0.0
          // excludes network & broacast addresses
          // (first & last IP address of each class)
          + '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])'
          + '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}'
          + '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))'
        + '|'
          // host name
          + '(?:(?:[_a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)'
          // domain name
          + '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*'
          // TLD identifier
          + '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))'
          // TLD may end with dot
          + '\\.?'
        + ')'
        // port number
        + '(?::\\d{2,5})?'
        // resource path
        + '(?:[/?#]\\S*)?'
        + '$',
        'i',
    );
    return re.test(value);
}
