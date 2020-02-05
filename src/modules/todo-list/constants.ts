import { TodoItemEntity } from '../../entities/todo/TodoItemEntity';
import { TodoStatusEnum } from '../../entities/todo/types';

export const EMPTY_TODO_ITEM: TodoItemEntity = {
    id: null,
    name: '',
    description: '',
    status: TodoStatusEnum.OPEN
};
