import {
    IActionAsyncOperationFailed,
    IActionAsyncOperationFinished,
    IActionAsyncOperationInit,
    IActionAsyncOperationStarted,
    IStoreAsyncOperations
} from './types';
import {
    ASYNC_OPERATION_FAILED,
    ASYNC_OPERATION_FINISHED,
    ASYNC_OPERATION_INIT,
    ASYNC_OPERATION_STARTED
} from './constants';

const initialState = {};

export const asyncOperationsReducer = (
    state: IStoreAsyncOperations = initialState,
    action: IActionAsyncOperationStarted | IActionAsyncOperationFinished | IActionAsyncOperationFailed | IActionAsyncOperationInit
): IStoreAsyncOperations => {
    switch (action.type) {
        case ASYNC_OPERATION_STARTED:
            return {
                ...state,
                [action.payload.name]: {
                    isLoading: true,
                    error: undefined
                }
            };

        case ASYNC_OPERATION_INIT:
            return {
                ...state,
                [action.payload.name]: {
                    isLoading: false,
                    error: undefined
                }
            };

        case ASYNC_OPERATION_FINISHED:
            return {
                ...state,
                [action.payload.name]: {
                    ...state[action.payload.name],
                    isLoading: false,
                }
            };

        case ASYNC_OPERATION_FAILED:
            return {
                ...state,
                [action.payload.name]: {
                    isLoading: false,
                    error: action.payload.error
                }
            };

        default:
            return state;
    }
};
