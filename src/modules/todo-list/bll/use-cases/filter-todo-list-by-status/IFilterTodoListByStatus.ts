import { ITodoItem } from '../../models/ITodoItem';
import { TodoItemStatus } from '../../models/TodoItemStatus';

export type IFilterTodoListByStatus = Readonly<{
    filter: TodoItemStatus | undefined;
    filteredTodoList: ITodoItem[];

    setFilter(newStatus: TodoItemStatus | undefined): void;
}>;
