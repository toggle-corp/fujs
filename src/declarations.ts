export type Maybe<T> = T | undefined | null;
export type Obj<T> = { [key: string]: T };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Parameters<T> = T extends (...args: infer T) => any ? T : undefined[];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
