import { Maybe } from './declarations';
import { isFalsy, isTruthy } from './core';

// should check if new object should be set
// and should the message of overriden shown
export function checkVersion(oldVersionId: Maybe<number>, newVersionId: number) {
    return {
        shouldSetValue: isFalsy(oldVersionId) || oldVersionId < newVersionId,
        isValueOverriden: isTruthy(oldVersionId) && oldVersionId < newVersionId,
    };
}
