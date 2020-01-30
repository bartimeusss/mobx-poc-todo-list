import React from 'react';

import { TodoListProvider } from '../context';
import { TodoList } from './components/todo-list/TodoList';
import { todoListService } from '../../../ioc-container';

export const TodoListModule = () => (
    <TodoListProvider value={todoListService}>
        <TodoList />
    </TodoListProvider>
);
