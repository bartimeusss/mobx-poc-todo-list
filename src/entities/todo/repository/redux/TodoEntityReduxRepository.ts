import { ITodoListRepository } from '../../../../modules/todo-list/ports/out/ITodoListRepository';
import { ITodoItem } from '../../../../modules/todo-list/models/ITodoItem';
import { IReduxStore } from '../../../../modules/todo-list/infrastructure/redux/IReduxStore';
import { todoItemCreated, todoListLoaded } from './actions';

export class TodoEntityReduxRepository implements ITodoListRepository {
    constructor(
        private store: IReduxStore
    ) {}

    get todoList() {
        return this.store.getState().entities.todo.todoList;
    }

    addTodoItem = (todoItem: ITodoItem): void => {
        this.store.dispatch(todoItemCreated(todoItem));
    };

    saveTodoList = (todoList: ITodoItem[]): void => {
        this.store.dispatch(todoListLoaded(todoList));
    };
}
