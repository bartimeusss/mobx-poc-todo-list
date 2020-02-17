import { TodoItemStatus } from '../../models/TodoItemStatus';

export type ITodoStatusFilterRepository = Readonly<{
    filter: TodoItemStatus | undefined;

    setFilter(value: TodoItemStatus | undefined): void;
}>;
