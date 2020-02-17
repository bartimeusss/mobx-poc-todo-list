import { flow } from 'mobx';
import { IAsyncOperation } from './IAsyncOperation';
import { IAsyncOperationRepository } from './IAsyncOperationRepository';

export class AsyncOperation implements IAsyncOperation {
    constructor(
        private repository: IAsyncOperationRepository
    ) {}

    get data() {
        return this.repository.data;
    }

    *performOperationGenerator<T>(operation: () => Promise<T>): Generator<any, T | undefined, any> {
        console.log('performOperationGenerator');
        this.repository.setIsLoading(true);

        try {
            return yield operation();
        } catch (e) {
            this.repository.setError(e.toString());
        } finally {
            this.repository.setIsLoading(false);
        }
    }

    performOperation = flow(this.performOperationGenerator)
}
