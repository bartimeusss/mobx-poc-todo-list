import React from 'react';
import { Button, Modal, Spin } from 'antd';
import { observer } from 'mobx-react';
import { useFormik } from 'formik';

import { EMPTY_TODO_ITEM } from '../../constants';
import { TodoItemEntity } from '../../../../../entities/todo/TodoItemEntity';
import { useAddNewTodoItem } from '../../context';

const TodoAddNewItemFormComponent: React.FC = () => {
    const {
        isLoading,
        addNewItem,
        isModalOpen,
        openModal,
        closeModal
    } = useAddNewTodoItem();

    const {
        handleSubmit,
        handleChange,
        values,
    } = useFormik<TodoItemEntity>({
        initialValues: EMPTY_TODO_ITEM,
        onSubmit: addNewItem
    });

    return (
        <>
            <Button onClick={openModal}>Add new item</Button>
            <Modal
                visible={isModalOpen}
                onCancel={closeModal}
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

export const TodoAddNewItemForm = observer(TodoAddNewItemFormComponent);
