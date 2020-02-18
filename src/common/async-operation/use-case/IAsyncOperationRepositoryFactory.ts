import { IAsyncOperationRepository } from './IAsyncOperationRepository';

export interface IAsyncOperationRepositoryFactory {
    create(): IAsyncOperationRepository;
}
