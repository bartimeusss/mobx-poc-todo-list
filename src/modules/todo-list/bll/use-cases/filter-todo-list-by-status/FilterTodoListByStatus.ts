import { IFilterTodoListByStatus } from './IFilterTodoListByStatus';
import { TodoItemStatus } from '../../models/TodoItemStatus';
import { ITodoItem } from '../../models/ITodoItem';
import { IReadTodoListRepository } from '../../repositories/IReadTodoListRepository';

export abstract class FilterTodoListByStatus implements IFilterTodoListByStatus {
    filter: TodoItemStatus | undefined = undefined;

    constructor(
        private repository: IReadTodoListRepository
    ) {}

    get filteredTodoList(): ITodoItem[] {
        if (this.filter === undefined) {
            return this.repository.todoList;
        }

        return this.repository.todoList.filter(it => it.status === this.filter);
    }

    setFilter = (newStatus: TodoItemStatus | undefined): void => {
        this.filter = newStatus;
    }
}
