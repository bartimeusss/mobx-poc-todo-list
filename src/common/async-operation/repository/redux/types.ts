import {
    ASYNC_OPERATION_FAILED,
    ASYNC_OPERATION_FINISHED,
    ASYNC_OPERATION_INIT,
    ASYNC_OPERATION_STARTED
} from './constants';

export interface IActionAsyncOperationInit {
    type: typeof ASYNC_OPERATION_INIT,
    payload: {
        name: string;
    }
}

export interface IActionAsyncOperationStarted {
    type: typeof ASYNC_OPERATION_STARTED,
    payload: {
        name: string;
    }
}

export interface IActionAsyncOperationFinished {
    type: typeof ASYNC_OPERATION_FINISHED,
    payload: {
        name: string;
    }
}

export interface IActionAsyncOperationFailed {
    type: typeof ASYNC_OPERATION_FAILED,
    payload: {
        name: string;
        error: string;
    }
}

export type IStoreAsyncOperations = Record<string, IStoreAsyncOperation>;
export interface IStoreAsyncOperation {
    isLoading: boolean;
    error: string | undefined;
}
