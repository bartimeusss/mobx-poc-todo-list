import { Select } from 'antd';
import React from 'react';

import './styles.css';
import { useFilterTodoListByStatus } from '../../context';
import { TodoItemStatus } from '../../../../models/TodoItemStatus';

export const TodoListFilter: React.FC = () => {
    const { setFilter } = useFilterTodoListByStatus();

    return (
        <div className="todo-list_filter">
            <span>Filter:</span>
            <Select
                className="todo-list_filter-select"
                defaultActiveFirstOption
                onChange={setFilter}
            >
                <Select.Option key={"asdad"} value={undefined}>All</Select.Option>
                {
                    Object.keys(TodoItemStatus).map(status =>
                        <Select.Option key={status} value={status}>{status}</Select.Option>
                    )
                }
            </Select>
        </div>
    );
};
