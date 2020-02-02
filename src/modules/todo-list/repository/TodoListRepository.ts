import { action, observable } from 'mobx';
import { TodoStatusEnum } from '../../../entities/todo';
import { ITodoListRepository } from '../service/ITodoListRepository';

export class TodoListRepository implements ITodoListRepository {

    @observable
    currentFilterStatus?: TodoStatusEnum;

    @observable
    isAddModalOpen: boolean = false;

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
}
