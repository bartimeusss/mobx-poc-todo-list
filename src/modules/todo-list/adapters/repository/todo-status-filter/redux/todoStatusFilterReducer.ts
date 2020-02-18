import { IActionTodoStatusFilterSelected, IStoreTodoStatusFilter } from './types';
import { AnyAction } from 'redux';
import { TODO_STATUS_FILTER_SELECTED } from './constants';

const initialState = {
    filter: undefined,
};

export const todoStatusFilterReducer = (
    state: IStoreTodoStatusFilter = initialState,
    action: IActionTodoStatusFilterSelected | AnyAction
): IStoreTodoStatusFilter => {
    switch (action.type) {
        case TODO_STATUS_FILTER_SELECTED:
            return { ...state, filter: action.payload };

        default:
            return state;
    }
};
