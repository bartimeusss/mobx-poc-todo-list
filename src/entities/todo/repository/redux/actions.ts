import { ITodoItem } from '../../../../modules/todo-list/models/ITodoItem';
import { TODO_ITEM_CREATED, TODO_LIST_LOADED } from './constants';
import { IActionTodoItemCreated, IActionTodoListLoaded } from './types';

export const todoListLoaded = (data: ITodoItem[]): IActionTodoListLoaded => ({
    type: TODO_LIST_LOADED,
    payload: data,
});

export const todoItemCreated = (item: ITodoItem): IActionTodoItemCreated => ({
    type: TODO_ITEM_CREATED,
    payload: item,
});
