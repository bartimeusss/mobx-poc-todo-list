import { AsyncUseCase } from './use-case/AsyncUseCase';
import { AsyncOperationMobxRepositoryFactory } from './repository/AsyncOperationMobxRepositoryFactory';

AsyncUseCase.repositoryFactory = new AsyncOperationMobxRepositoryFactory();

export { AsyncUseCase };
