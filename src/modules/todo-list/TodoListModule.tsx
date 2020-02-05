import React from 'react';

import { TodoListProvider } from './context';
import { TodoList } from './components/todo-list/TodoList';
import { todoListStore } from './TodoListStore';

export const TodoListModule = () => (
    <TodoListProvider value={todoListStore}>
        <TodoList />
    </TodoListProvider>
);
