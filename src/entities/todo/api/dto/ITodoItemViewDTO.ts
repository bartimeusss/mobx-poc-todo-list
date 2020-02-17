import { TodoItemStatus } from '../../../../modules/todo-list/bll/models/TodoItemStatus';

export interface ITodoItemViewDTO {
    id: string;
    item_name: string;
    item_description: string;
    item_status: TodoItemStatus;
}
