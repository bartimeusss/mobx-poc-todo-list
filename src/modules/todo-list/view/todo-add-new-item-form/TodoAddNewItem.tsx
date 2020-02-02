import React from 'react';
import { Button, Modal, Spin } from 'antd';
import { observer } from 'mobx-react';
import { useFormik } from 'formik';

import { useTodoListService } from '../../context';
import { TodoItemEntity, TodoStatusEnum } from '../../../../entities/todo';

const TodoAddNewItemFormComponent: React.FC = () => {
    const { isAddModalOpen, isAddItemLoading, addItem, openAddingModal, closeAddingModal } = useTodoListService();

    const {
        handleSubmit,
        handleChange,
        values,
    } = useFormik<TodoItemEntity>({
        initialValues: {
            id: undefined,
            name: '',
            description: '',
            status: TodoStatusEnum.OPEN
        },
        onSubmit: addItem
    });

    return (
        <>
            <Button onClick={openAddingModal}>Add new item</Button>
            <Modal
                visible={isAddModalOpen}
                onCancel={closeAddingModal}
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
                        isAddItemLoading
                            ? (<Spin />)
                            : (<button type="submit">Submit</button>)
                    }
                </form>
            </Modal>
        </>
    )
};


export const TodoAddNewItemForm = observer(TodoAddNewItemFormComponent);
