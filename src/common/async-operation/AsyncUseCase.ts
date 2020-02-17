import { getAsyncOperation } from './getAsyncOperation';
import { IAsyncOperation } from './use-case/IAsyncOperation';

export abstract class AsyncUseCase {
    private asyncOp: IAsyncOperation = getAsyncOperation(this.constructor.name);

    get isLoading() {
        return this.asyncOp.data.isLoading;
    }

    get error() {
        return this.asyncOp.data.error;
    }

    protected async = <TArgs extends any[]>(method: (...args: TArgs) => Promise<void>) => async (...args: TArgs): Promise<void> =>
        this.asyncOp.performOperation(() => method(...args));
}
