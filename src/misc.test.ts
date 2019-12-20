import { checkVersion } from './misc';

test('check check version', () => {
    expect(checkVersion(undefined, 1)).toEqual({ shouldSetValue: true, isValueOverriden: false });
    expect(checkVersion(1, 2)).toEqual({ shouldSetValue: true, isValueOverriden: true });
    expect(checkVersion(1, 1)).toEqual({ shouldSetValue: false, isValueOverriden: false });
});
