import { Maybe } from './declarations';
import { isFalsy, isTruthy } from './core';

/**
 * Check if new object should be set
 * and should the message of overriden shown
 *
 * @param oldVersionId
 * @param newVersionId
 */
export function checkVersion(oldVersionId: Maybe<number>, newVersionId: number) {
    return {
        shouldSetValue: isFalsy(oldVersionId) || oldVersionId < newVersionId,
        isValueOverriden: isTruthy(oldVersionId) && oldVersionId < newVersionId,
    };
}
