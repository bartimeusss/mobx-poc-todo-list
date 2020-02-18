import { IAsyncOperationRepository } from '../../use-case/IAsyncOperationRepository';
import { IReduxStore } from '../../../../modules/todo-list/infrastructure/redux/IReduxStore';
import {
    asyncOperationFailed,
    asyncOperationFinished,
    asyncOperationInit,
    asyncOperationStarted
} from './actions';

export class AsyncOperationReduxRepository implements IAsyncOperationRepository {
    private readonly name: string;

    constructor(
        private store: IReduxStore
    ) {
        this.name = 'asyncOperation__' + Math.random().toString();
        this.store.dispatch(asyncOperationInit(this.name));
    }

    get isLoading(): boolean {
        return this.store.getState().commons.asyncOperations[this.name].isLoading;
    }

    get error(): string | undefined {
        return this.store.getState().commons.asyncOperations[this.name].error;
    }

    startLoading = (): void => {
        this.store.dispatch(asyncOperationStarted(this.name));
    };

    finishLoading = (): void => {
        this.store.dispatch(asyncOperationFinished(this.name));
    };

    failLoading = (e: Error): void => {
        this.store.dispatch(asyncOperationFailed(this.name, e.message));
    };
}
