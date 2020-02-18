import { ITodoItem } from '../../../../modules/todo-list/models/ITodoItem';
import { TODO_ITEM_CREATED, TODO_LIST_LOADED } from './constants';

export interface IActionTodoListLoaded {
    type: typeof TODO_LIST_LOADED;
    payload: ITodoItem[];
}

export interface IActionTodoItemCreated {
    type: typeof TODO_ITEM_CREATED;
    payload: ITodoItem;
}

export interface IStoreTodoList {
    todoList: ITodoItem[];
}
