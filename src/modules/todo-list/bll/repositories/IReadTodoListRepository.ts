import { ITodoItem } from '../models/ITodoItem';

export interface IReadTodoListRepository {
    readonly todoList: ITodoItem[];
}
