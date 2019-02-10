export function isList(item: unknown): item is unknown[] {
    return Array.isArray(item);
}

export function isObject(item: unknown): item is object {
    return item !== null && typeof item === 'object' && !isList(item);
};

export function isInteger(value: unknown) : value is number {
    return typeof value === 'number' && value % 1 === 0
};
