/**
 * Get `a` modulo `b`
 *
 * @param a dividend
 * @param b divisor
 * @remarks
 * Return a positive modulo
 */
export function modulo(a: number, b: number) {
    const value = a % b;
    if (value < 0) {
        return b + value;
    }
    // NOTE: -0 is not less than 0, so we need to take absolute value
    return Math.abs(value);
}

/**
 * Get sum of all elements in a list
 *
 * @param list of numbers
 *
 * @remarks
 * Return a positive modulo
 */
export function sum(values: number[]) {
    return values.reduce(
        (acc, b) => acc + b,
        0,
    );
}

/**
 * Get mean of all elements in a list
 *
 * @param list of numbers
 */
export function mean(values: number[]) {
    if (values.length <= 0) {
        return 0;
    }
    return sum(values) / values.length;
}

/**
 * Get median of all elements in a list
 *
 * @param list of numbers
 */
export function median(values: number[]) {
    if (values.length <= 0) {
        return undefined;
    }

    const sortedValues = [...values].sort();

    const centerIndex = Math.floor(sortedValues.length / 2);

    return sortedValues.length % 2
        ? sortedValues[centerIndex]
        : (sortedValues[centerIndex - 1] + sortedValues[centerIndex]) / 2.0;
}

// min, max, output
type Bucket<T> = [number, number, T];

/**
 * Get the bucket for a given number
 *
 * @param value
 * @param buckets
 */
export function bucket<T>(value: number, buckets: Bucket<T>[]): T | undefined {
    const currentBucket = buckets.find(
        ([min, max]) => (value >= min && value < max),
    );
    return currentBucket && currentBucket[2];
}

/**
 * Get number bounded on two sides
 *
 * @param value
 * @param a upper or lower bound
 * @param b upper or lower bound
 */
export function bound(value: number, a: number, b: number): number {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    return Math.max(min, Math.min(max, value));
}

/**
 * Get normalized value for a number
 *
 * @param value
 * @param max max value
 * @param min min value
 */
export function normalize(value: number, max: number, min: number) {
    return (value - min) / (max - min);
}

/**
 * Get list of numbers from `start` to `end`
 *
 * @param start number from where list starts
 * @param end number where list ends
 */
export function getNumbers(start: number, end: number): number[] {
    const list = [];
    for (let i = start; i < end; i += 1) {
        list.push(i);
    }
    return list;
}
