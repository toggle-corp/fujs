export function isList(item: unknown): item is unknown[] {
    return Array.isArray(item);
}

export function isObject(item: unknown): item is object {
    return item !== null && typeof item === 'object' && !isList(item);
};

export function isInteger(value: unknown) : value is number {
    return typeof value === 'number' && value % 1 === 0
};

export const basicTypes: string[] = [
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
];

// Mapping to hold javascript class to custom type
const classToType = basicTypes.reduce(
    (acc, type: string) => ({
        ...acc,
        [`[object ${type}]`]: type.toLowerCase(),
    }),
    {},
);

export const typeOf = (obj: unknown): string => {
    if (obj == null) {
        return 'null';
    }

    const simpleType = typeof obj;
    return (simpleType === 'object' || simpleType === 'function')
        ? (classToType[classToType.toString.call(obj)] || 'object')
        : simpleType;
};

export function isValidEmail(value: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
};

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
        '^' +
        // protocol identifier
        '(?:(?:https?|ftp)://)' +
        // user:pass authentication
        '(?:\\S+(?::\\S*)?@)?' +
        '(?:' +
          // IP address exclusion
          // private & local networks
          '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +
          '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
          '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
          // IP address dotted notation octets
          // excludes loopback network 0.0.0.0
          // excludes reserved space >= 224.0.0.0
          // excludes network & broacast addresses
          // (first & last IP address of each class)
          '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
          '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
          '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
        '|' +
          // host name
          '(?:(?:[_a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
          // domain name
          '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
          // TLD identifier
          '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
          // TLD may end with dot
          '\\.?' +
        ')' +
        // port number
        '(?::\\d{2,5})?' +
        // resource path
        '(?:[/?#]\\S*)?' +
        '$',
        'i',
    );
    return re.test(value);
}
