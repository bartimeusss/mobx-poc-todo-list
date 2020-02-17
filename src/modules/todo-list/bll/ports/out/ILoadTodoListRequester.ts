import { ITodoItem } from '../../models/ITodoItem';

export interface ILoadTodoListRequester {
    load(): Promise<ITodoItem[]>;
}
