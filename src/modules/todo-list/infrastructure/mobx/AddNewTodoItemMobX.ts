import { action, decorate, flow, observable } from 'mobx';

import { AddNewTodoItem } from '../../bll/use-cases/add-new-todo-item/AddNewTodoItem';
import { ITodoItem } from '../../bll/models/ITodoItem';

export class AddNewTodoItemMobX extends AddNewTodoItem {
    addNewItem = (newTodoItem: ITodoItem) => flow(super.addNewItemImpl.bind(this))(newTodoItem);
}

decorate(AddNewTodoItemMobX, {
    isModalOpen: observable,
    isLoading: observable,
    error: observable,
    closeModal: action,
    openModal: action,
});
