import { Select } from 'antd';
import React from 'react';

import './styles.css';
import { TodoItemStatus } from '../../../../models/TodoItemStatus';
import { connector } from '../../connect';
import { IPropsTodoListFilter } from './IPropsTodoListFilter';

export const TodoListFilterComponent: React.FC<IPropsTodoListFilter> = ({ useFilterTodoListByStatus }) => {
    const { setFilter } = useFilterTodoListByStatus();

    return (
        <div className="todo-list_filter">
            <span>Filter:</span>
            <Select
                className="todo-list_filter-select"
                defaultActiveFirstOption
                onChange={setFilter}
            >
                <Select.Option key={"asd"} value={undefined}>All</Select.Option>
                {
                    Object.keys(TodoItemStatus).map(status =>
                        <Select.Option key={status} value={status}>{status}</Select.Option>
                    )
                }
            </Select>
        </div>
    );
};

export const TodoListFilter = connector.connect(TodoListFilterComponent, 'useFilterTodoListByStatus');
