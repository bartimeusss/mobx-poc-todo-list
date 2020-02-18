export type IUseCasesHooks<T> = {[P in keyof T]: () => T[P]};
