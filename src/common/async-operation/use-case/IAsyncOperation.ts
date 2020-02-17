import { IAsyncOperationData } from './IAsyncOperationData';

export interface IAsyncOperation {
    data: IAsyncOperationData;
    performOperation: <T>(operation: () => Promise<T>) => Promise<T | undefined>;
}
