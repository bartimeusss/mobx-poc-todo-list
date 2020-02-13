import { ITodoItem } from '../../models/ITodoItem';

export type IAddNewTodoItem = Readonly<{
    isModalOpen: boolean;
    isLoading: boolean;
    error: string | undefined;

    addNewItem(newItem: ITodoItem): void;
    openModal(): void;
    closeModal(): void;
}>;
