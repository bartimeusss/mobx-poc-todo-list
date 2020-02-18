import React, { useEffect } from 'react';
import { Spin } from 'antd';

import { TodoItem } from '../todo-item/TodoItem';
import { TodoListFilter } from '../todo-list-filter/TodoListFilter';
import { TodoAddNewItemForm } from '../todo-add-new-item-form/TodoAddNewItem';
import { IPropsTodoList } from './IPropsTodoList';
import { connector } from '../../connect';

const TodoListComponent: React.FC<IPropsTodoList> = ({ useFilterTodoListByStatus, useLoadTodoList }) => {
    const { loadTodoList, isLoading } = useLoadTodoList();
    const { filteredTodoList } = useFilterTodoListByStatus();

    useEffect(() => { loadTodoList() }, []);

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

export const TodoList = connector.connect(TodoListComponent, 'useFilterTodoListByStatus', 'useLoadTodoList');
