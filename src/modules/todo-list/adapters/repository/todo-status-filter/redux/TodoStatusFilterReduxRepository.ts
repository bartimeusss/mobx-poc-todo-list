import { ITodoStatusFilterRepository } from '../../../../ports/out/ITodoStatusFilterRepository';
import { TodoItemStatus } from '../../../../models/TodoItemStatus';
import { IReduxStore } from '../../../../infrastructure/redux/IReduxStore';
import { todoStatusFilterSelected } from './actions';

export class TodoStatusFilterReduxRepository implements ITodoStatusFilterRepository {
    constructor(
        private store: IReduxStore
    ) {}

    get filter(): TodoItemStatus | undefined {
        return this.store.getState().modules.todoList.todoStatusFilter.filter;
    }

    setFilter(value: TodoItemStatus | undefined): void {
        this.store.dispatch(todoStatusFilterSelected(value));
    }
}
