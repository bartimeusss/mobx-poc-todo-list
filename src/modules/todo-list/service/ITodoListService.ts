import { TodoItemEntity, TodoStatusEnum } from '../../../entities/todo';

export interface ITodoListService {
    readonly filteredTodoList: TodoItemEntity[];
    readonly currentFilterStatus: TodoStatusEnum | undefined;
    readonly isAddModalOpen: boolean;
    readonly isListLoading: boolean;
    readonly isAddItemLoading: boolean;

    setFilter(newFilterStatus?: TodoStatusEnum): void;
    openAddingModal(): void;
    closeAddingModal(): void;
    loadItems(): void;
    addItem(newItem: TodoItemEntity): void;
}
