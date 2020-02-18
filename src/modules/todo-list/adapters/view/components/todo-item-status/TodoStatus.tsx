import React from 'react';
import classNames from 'classnames';

import './styles.css';
import { IPropsTodoItemStatus } from './IPropsTodoItemStatus';

export const TodoStatus: React.FC<IPropsTodoItemStatus> = ({ status }) => {
    const className = classNames('todo-item_status', status);

    return (
        <i className={className} />
    )
};
