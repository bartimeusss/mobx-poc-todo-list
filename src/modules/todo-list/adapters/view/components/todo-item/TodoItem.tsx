import React from 'react';

import './styles.css';
import { IPropsTodoItem } from './types';
import { TodoStatus } from '../todo-item-status/TodoStatus';
import { connector } from '../../connect';

export const TodoItemComponent: React.FC<IPropsTodoItem> = ({ todoItem }) => (
    <div className="todo-item">
        <div className="todo-item_header">
            <TodoStatus status={todoItem.status} />
            <span className="todo-item_name">{todoItem.name}</span>
        </div>
        <p className="todo-item_description">{todoItem.description}</p>
    </div>
);

export const TodoItem = connector.connect(TodoItemComponent);
