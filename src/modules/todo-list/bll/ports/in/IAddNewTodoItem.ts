import { ITodoItem } from '../../models/ITodoItem';

export type IAddNewTodoItem = Readonly<{
    isLoading: boolean;
    error: string | undefined;

    addNewItem(newItem: ITodoItem): void;
}>;
