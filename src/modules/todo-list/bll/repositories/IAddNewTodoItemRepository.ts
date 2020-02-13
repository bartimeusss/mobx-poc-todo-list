import { ITodoItem } from '../models/ITodoItem';

export interface IAddNewTodoItemRepository {
    addNewTodoItem(newTodoItem: ITodoItem): Promise<void>;
}
