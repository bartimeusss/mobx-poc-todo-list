import { action, observable } from 'mobx';

import { ITodoStatusFilterRepository } from '../bll/ports/out/ITodoStatusFilterRepository';
import { TodoItemStatus } from '../bll/models/TodoItemStatus';

export class TodoStatusFilterMobXRepository implements ITodoStatusFilterRepository {
    @observable
    filter: TodoItemStatus | undefined;

    @action
    setFilter(value: TodoItemStatus | undefined): void {
        this.filter = value;
    }
}
