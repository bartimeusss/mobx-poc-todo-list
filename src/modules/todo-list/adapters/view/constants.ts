import { TodoItemStatus } from '../../models/TodoItemStatus';
import { ITodoItem } from '../../models/ITodoItem';

export const EMPTY_TODO_ITEM: ITodoItem = {
    id: '',
    name: '',
    description: '',
    status: TodoItemStatus.OPEN
};
