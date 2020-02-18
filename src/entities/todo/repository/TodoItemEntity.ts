import { observable } from 'mobx';
import { ITodoItem } from '../../../modules/todo-list/models/ITodoItem';
import { TodoItemStatus } from '../../../modules/todo-list/models/TodoItemStatus';

export class TodoItemEntity implements ITodoItem {
    @observable id: string;
    @observable name: string;
    @observable description: string;
    @observable status: TodoItemStatus;

    constructor(id: string, name: string, description: string, status: TodoItemStatus) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
    }
}
