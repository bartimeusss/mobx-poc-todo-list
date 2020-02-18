import {
    IActionAsyncOperationFailed,
    IActionAsyncOperationFinished,
    IActionAsyncOperationInit,
    IActionAsyncOperationStarted
} from './types';
import {
    ASYNC_OPERATION_FAILED,
    ASYNC_OPERATION_FINISHED,
    ASYNC_OPERATION_INIT,
    ASYNC_OPERATION_STARTED
} from './constants';

export const asyncOperationInit = (name: string): IActionAsyncOperationInit => ({
    type: ASYNC_OPERATION_INIT,
    payload: { name }
});

export const asyncOperationStarted = (name: string): IActionAsyncOperationStarted => ({
    type: ASYNC_OPERATION_STARTED,
    payload: { name }
});

export const asyncOperationFinished = (name: string): IActionAsyncOperationFinished => ({
    type: ASYNC_OPERATION_FINISHED,
    payload: { name }
});

export const asyncOperationFailed = (name: string, error: string): IActionAsyncOperationFailed => ({
    type: ASYNC_OPERATION_FAILED,
    payload: { name, error }
});
