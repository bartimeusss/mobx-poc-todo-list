import { TodoItemStatus } from '../../../../models/TodoItemStatus';
import { IActionTodoStatusFilterSelected } from './types';
import { TODO_STATUS_FILTER_SELECTED } from './constants';

export const todoStatusFilterSelected = (newFilter: TodoItemStatus | undefined): IActionTodoStatusFilterSelected => ({
    type: TODO_STATUS_FILTER_SELECTED,
    payload: newFilter,
});
