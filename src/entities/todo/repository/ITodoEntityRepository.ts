import { TodoItemEntity } from './models/TodoItemEntity';

export interface ITodoEntityRepository {
    readonly todoList: TodoItemEntity[];
    readonly isListLoading: boolean;
    readonly isAddItemLoading: boolean;

    loadItems(): void
    addItem(newItem: TodoItemEntity): void
}
