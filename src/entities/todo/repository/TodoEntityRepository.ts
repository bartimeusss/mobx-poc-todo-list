import { action, observable } from 'mobx';

import { TodoItemEntity } from './TodoItemEntity';
import { ITodoListRepository } from '../../../modules/todo-list/ports/out/ITodoListRepository';

export class TodoEntityRepository implements ITodoListRepository {
    @observable
    todoList: TodoItemEntity[] = [];

    @action
    saveTodoList = (data: TodoItemEntity[]) => {
        this.todoList = data;
    };

    @action
    addTodoItem = (item: TodoItemEntity) => {
        this.todoList.push(item);
    };
}
