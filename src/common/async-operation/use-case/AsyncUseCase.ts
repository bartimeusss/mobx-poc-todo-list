import { IAsyncOperationRepository } from './IAsyncOperationRepository';

export abstract class AsyncUseCase {
    private operationRepository: IAsyncOperationRepository = AsyncUseCase.repositoryFactory();

    static repositoryFactory: () => IAsyncOperationRepository;

    get isLoading() {
        return this.operationRepository.isLoading;
    }

    get error() {
        return this.operationRepository.error;
    }

    protected async = <TArgs extends any[], TResult>(method: (...args: TArgs) => Promise<TResult>) => async (...args: TArgs): Promise<TResult | undefined> => {
        this.operationRepository.startLoading();

        try {
            const result = await method(...args);
            this.operationRepository.finishLoading();

            return result;
        } catch (e) {
            this.operationRepository.failLoading(e);
        }
    }
}
