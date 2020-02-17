import { ITodoItem } from '../../models/ITodoItem';

export interface IAddTodoItemRequester {
    addItem(item: ITodoItem): Promise<ITodoItem>;
}
