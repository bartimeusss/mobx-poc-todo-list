import { IActionTodoItemCreated, IActionTodoListLoaded, IStoreTodoList } from './types';
import { TODO_ITEM_CREATED, TODO_LIST_LOADED } from './constants';
import { AnyAction } from 'redux';

const initialState = {
    todoList: [],
};

export const todoEntityReducer = (state: IStoreTodoList = initialState, action: IActionTodoListLoaded | IActionTodoItemCreated | AnyAction): IStoreTodoList => {
    switch (action.type) {
        case TODO_LIST_LOADED:
            return { ...state, todoList: action.payload };

        case TODO_ITEM_CREATED:
            return { ...state, todoList: [...state.todoList, action.payload] };

        default:
            return state;
    }
};
