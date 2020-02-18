import { action, observable } from 'mobx';

import { ITodoStatusFilterRepository } from '../../ports/out/ITodoStatusFilterRepository';
import { TodoItemStatus } from '../../models/TodoItemStatus';

export class TodoStatusFilterMobXRepository implements ITodoStatusFilterRepository {
    @observable
    filter: TodoItemStatus | undefined;

    @action
    setFilter(value: TodoItemStatus | undefined): void {
        this.filter = value;
    }
}
