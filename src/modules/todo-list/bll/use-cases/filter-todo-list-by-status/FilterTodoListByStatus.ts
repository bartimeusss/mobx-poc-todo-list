import { IFilterTodoListByStatus } from '../../ports/in/IFilterTodoListByStatus';
import { TodoItemStatus } from '../../models/TodoItemStatus';
import { ITodoItem } from '../../models/ITodoItem';
import { ITodoStatusFilterRepository } from '../../ports/out/ITodoStatusFilterRepository';
import { ITodoListRepository } from '../../ports/out/ITodoListRepository';

export class FilterTodoListByStatus implements IFilterTodoListByStatus {
    constructor(
        private todoListRepository: ITodoListRepository,
        private todoStatusFilterRepository: ITodoStatusFilterRepository,
    ) {}

    get filteredTodoList(): ITodoItem[] {
        const { todoList } = this.todoListRepository;
        const { filter } = this.todoStatusFilterRepository;

        if (filter === undefined) {
            return todoList;
        }

        return todoList.filter(it => it.status === filter);
    }

    setFilter = (newStatus: TodoItemStatus | undefined): void => {
        this.todoStatusFilterRepository.setFilter(newStatus);
    };

    get filter() {
        return this.todoStatusFilterRepository.filter;
    }
}
