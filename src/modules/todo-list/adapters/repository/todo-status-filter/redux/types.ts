import { TODO_STATUS_FILTER_SELECTED } from './constants';
import { TodoItemStatus } from '../../../../models/TodoItemStatus';

export interface IActionTodoStatusFilterSelected {
    type: typeof TODO_STATUS_FILTER_SELECTED,
    payload: TodoItemStatus | undefined,
}

export interface IStoreTodoStatusFilter {
    filter: TodoItemStatus | undefined;
}
