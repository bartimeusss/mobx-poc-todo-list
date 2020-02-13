import { TodoItemStatus } from '../../modules/todo-list/bll/models/TodoItemStatus';

export interface ITodoItemDTOCreateOrUpdate {
    item_name: string,
    item_description: string
}

export interface ITodoItemDTOView {
    id: string,
    item_name: string,
    item_description: string,
    item_status: TodoItemStatus
}
