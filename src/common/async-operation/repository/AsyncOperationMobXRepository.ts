import { IAsyncOperationRepository } from '../use-case/IAsyncOperationRepository';
import { action, observable } from 'mobx';

export class AsyncOperationMobXRepository implements IAsyncOperationRepository {
    @observable
    private error: string | undefined;

    @observable
    private isLoading: boolean = false;

    get data() {
        return {
            isLoading: this.isLoading,
            error: this.error,
        }
    }

    @action
    setError = (value: string | undefined): void => {
        this.error = value;
    };

    @action
    setIsLoading = (value: boolean): void => {
        this.isLoading = value;
    }
}
