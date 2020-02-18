import React, { useEffect } from 'react';
import { Spin } from 'antd';
import { observer } from 'mobx-react';

import { TodoItem } from '../todo-item/TodoItem';
import { TodoListFilter } from '../todo-list-filter/TodoListFilter';
import { TodoAddNewItemForm } from '../todo-add-new-item-form/TodoAddNewItem';
import { useFilterTodoListByStatus, useLoadTodoList } from '../../context';

const TodoListComponent: React.FC = () => {
    const { loadTodoList, isLoading } = useLoadTodoList();
    const { filteredTodoList } = useFilterTodoListByStatus();

    useEffect(loadTodoList, []);

    if (isLoading) {
        return (<Spin />);
    }

    return (
        <>
            <TodoListFilter />
            {
                filteredTodoList.map(it => (
                    <TodoItem key={ it.name } todoItem={ it }/>
                ))
            }
            <TodoAddNewItemForm />
        </>
    );
};

export const TodoList = observer(TodoListComponent);
