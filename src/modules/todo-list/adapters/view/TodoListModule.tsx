import React from 'react';

import { TodoProvider, todoUseCases } from './context';
import { TodoList } from './components/todo-list/TodoList';

export const TodoListModule = () => (
    <TodoProvider value={todoUseCases}>
        <TodoList />
    </TodoProvider>
);
