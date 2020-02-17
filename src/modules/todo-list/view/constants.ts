import { TodoItemStatus } from '../bll/models/TodoItemStatus';
import { ITodoItem } from '../bll/models/ITodoItem';

export const EMPTY_TODO_ITEM: ITodoItem = {
    id: '',
    name: '',
    description: '',
    status: TodoItemStatus.OPEN
};
