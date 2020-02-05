import React, { useEffect } from 'react';
import { Spin } from 'antd';
import { observer } from 'mobx-react';

import { useTodoListStore } from '../../context';
import { TodoItem } from '../todo-item/TodoItem';
import { TodoListFilter } from '../todo-list-filter/TodoListFilter';
import { TodoAddNewItemForm } from '../todo-add-new-item-form/TodoAddNewItem';

const TodoListComponent: React.FC = () => {
    const { filteredTodoList, loadItems, isListLoading } = useTodoListStore();

    useEffect(() => { loadItems() }, []);

    if (isListLoading) {
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
