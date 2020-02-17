import { IAsyncOperationData } from './IAsyncOperationData';

export interface IAsyncOperationRepository {
    data: IAsyncOperationData;

    setIsLoading(value: boolean): void;
    setError(value: string | undefined): void;
}
