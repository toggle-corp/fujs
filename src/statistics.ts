export function sum(values: number[]) {
    return values.reduce(
        (acc, b) => acc + b,
        0,
    );
}

export function mean(values: number[]) {
    if (values.length <= 0) {
        return 0;
    }
    return sum(values) / values.length;
}

export function median(values: number[]) {
    if (values.length <= 0) {
        return undefined;
    }

    const sortedValues = [...values].sort();

    const centerIndex = Math.floor(sortedValues.length / 2);

    return sortedValues.length % 2
        ?  sortedValues[centerIndex]
        : (sortedValues[centerIndex - 1] + sortedValues[centerIndex]) / 2.0;
};

// min, max, output
type Bucket<T> = [number, number, T];

export function bucket<T>(value: number, buckets: Bucket<T>[]): T | undefined {
    const currentBucket = buckets.find(
        ([min, max]) => (value >= min && value < max)
    );
    return currentBucket && currentBucket[2];
};

export function bound(value: number, a: number, b: number): number {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    return Math.max(min, Math.min(max, value));
};

export function normalize(value: number, max: number, min: number) {
    return (value - min) / (max - min);
};

export function getNumbers(start: number, end: number): number[] {
    const list = [];
    for (let i = start; i < end; i += 1) {
        list.push(i);
    }
    return list;
};
