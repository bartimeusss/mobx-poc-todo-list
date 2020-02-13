import { TodoItemStatus } from './TodoItemStatus';

export interface ITodoItem {
    id: string,
    name: string,
    description: string,
    status: TodoItemStatus,
}
