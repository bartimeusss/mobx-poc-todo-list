export type IUseCasesDataToSelect<T> = {[P in keyof T]: (keyof T[P])[]};
