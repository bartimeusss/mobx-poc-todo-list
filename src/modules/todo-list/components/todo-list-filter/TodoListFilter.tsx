import { Select } from 'antd';
import React from 'react';

import './styles.css';
import { useTodoListStore } from '../../context';
import { TodoStatusEnum } from '../../../../entities/todo/types';

export const TodoListFilter: React.FC = () => {
    const { setFilter } = useTodoListStore();

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
                    Object.keys(TodoStatusEnum).map(status =>
                        <Select.Option key={status} value={status}>{status}</Select.Option>
                    )
                }
            </Select>
        </div>
    );
};
