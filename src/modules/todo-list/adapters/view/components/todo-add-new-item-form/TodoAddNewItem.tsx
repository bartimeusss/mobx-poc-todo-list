import React from 'react';
import { Button, Modal, Spin } from 'antd';
import { useFormik } from 'formik';

import { EMPTY_TODO_ITEM } from '../../constants';
import { ITodoItem } from '../../../../models/ITodoItem';
import { IPropsTodoAddNewItem } from './IPropsTodoAddNewItem';
import { connector } from '../../connect';

const TodoAddNewItemFormComponent: React.FC<IPropsTodoAddNewItem> = ({ useAddNewTodoItem }) => {
    const {
        isLoading,
        addNewItem,
        modal,
    } = useAddNewTodoItem();

    const {
        handleSubmit,
        handleChange,
        values,
    } = useFormik<ITodoItem>({
        initialValues: EMPTY_TODO_ITEM,
        onSubmit: addNewItem,
    });

    return (
        <>
            <Button onClick={modal.open}>Add new item</Button>
            <Modal
                visible={modal.isOpen}
                onCancel={modal.close}
                okButtonProps={{
                    htmlType: 'submit',
                    formTarget: 'form'
                }}
            >
                <form id="form" onSubmit={handleSubmit} className="todo-new-item_form">
                    <div className="todo-new-item_name">
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={handleChange}
                            value={values.name}
                        />
                    </div>
                    <div className="todo-new-item_description">
                        <label htmlFor="description">Description:</label>
                        <input
                            id="description"
                            name="description"
                            type="description"
                            onChange={handleChange}
                            value={values.description}
                        />
                    </div>
                    {
                        isLoading
                            ? (<Spin />)
                            : (<button type="submit">Submit</button>)
                    }
                </form>
            </Modal>
        </>
    )
};

export const TodoAddNewItemForm = connector.connect(TodoAddNewItemFormComponent, 'useAddNewTodoItem');
