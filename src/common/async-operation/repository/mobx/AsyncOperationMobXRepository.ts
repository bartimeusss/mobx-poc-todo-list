import { IAsyncOperationRepository } from '../../use-case/IAsyncOperationRepository';
import { action, observable } from 'mobx';

export class AsyncOperationMobXRepository implements IAsyncOperationRepository {
    @observable
    error: string | undefined;

    @observable
    isLoading: boolean = false;

    @action
    startLoading = (): void => {
        this.error = undefined;
        this.isLoading = true;
    };

    @action
    finishLoading = (): void => {
        this.isLoading = false;
    };

    @action
    failLoading = (e: Error): void => {
        this.isLoading = false;
        this.error = e.message;
    };
}
