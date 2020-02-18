import { ITodoItem } from '../../models/ITodoItem';

export type ITodoListRepository = Readonly<{
    todoList: ITodoItem[];

    saveTodoList(todoList: ITodoItem[]): void;
    addTodoItem(todoItem: ITodoItem): void;
}>;
