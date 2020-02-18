import { IAsyncOperationRepositoryFactory } from '../use-case/IAsyncOperationRepositoryFactory';
import { IAsyncOperationRepository } from '../use-case/IAsyncOperationRepository';
import { AsyncOperationMobXRepository } from './AsyncOperationMobXRepository';

export class AsyncOperationMobxRepositoryFactory implements IAsyncOperationRepositoryFactory {
    create = (): IAsyncOperationRepository => new AsyncOperationMobXRepository();
}
