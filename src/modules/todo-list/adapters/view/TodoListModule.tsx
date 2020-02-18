import React from 'react';

import { TodoList } from './components/todo-list/TodoList';
import { connector } from './connect';

export const TodoListModule: React.FC = () => (
    <connector.Provider>
        <TodoList />
    </connector.Provider>
);
