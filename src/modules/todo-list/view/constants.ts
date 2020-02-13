import { TodoItemEntity } from '../../../entities/todo/TodoItemEntity';
import { TodoItemStatus } from '../bll/models/TodoItemStatus';

export const EMPTY_TODO_ITEM: TodoItemEntity = {
    id: '',
    name: '',
    description: '',
    status: TodoItemStatus.OPEN
};
