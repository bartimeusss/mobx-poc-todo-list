import { action, observable } from 'mobx';

import { todoEntityStore } from '../../entities/todo/TodoEntityStore';
import { TodoStatusEnum } from '../../entities/todo/types';
import { TodoItemEntity } from '../../entities/todo/TodoItemEntity';

export class TodoListStore {
    @observable
    currentFilterStatus?: TodoStatusEnum;

    @observable
    isAddModalOpen: boolean = false;

    get filteredTodoList(): TodoItemEntity[] {
        return todoEntityStore.todoList.filter(it => it.status === (this.currentFilterStatus ?? it.status));
    };

    get isListLoading() {
        return todoEntityStore.isListLoading;
    }

    get isAddItemLoading() {
        return todoEntityStore.isAddItemLoading;
    }

    @action.bound
    setFilter(newFilterStatus?: TodoStatusEnum) {
        this.currentFilterStatus = newFilterStatus;
    };

    @action.bound
    openAddingModal() {
        this.isAddModalOpen = true;
    }

    @action.bound
    closeAddingModal() {
        this.isAddModalOpen = false;
    }

    loadItems = async () => {
        await todoEntityStore.loadItems();
    };

    addItem = async (newItem: TodoItemEntity) => {
        await todoEntityStore.addItem(newItem);
        this.closeAddingModal();
    };
}

export const todoListStore = new TodoListStore();
