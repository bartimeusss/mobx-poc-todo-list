import { TodoItemEntity, TodoStatusEnum } from '../../../entities/todo';
import { ITodoListRepository } from './ITodoListRepository';
import { ITodoListService } from './ITodoListService';
import { ITodoEntityRepository } from '../../../entities/todo/repository/ITodoEntityRepository';

export class TodoListService implements ITodoListService {

    constructor(
        private todoRepository: ITodoEntityRepository,
        private todoListRepository: ITodoListRepository
    ) {}

    get filteredTodoList(): TodoItemEntity[] {
        return this.todoRepository.todoList.filter(it => it.status === (this.currentFilterStatus ?? it.status));
    };

    get currentFilterStatus(): TodoStatusEnum | undefined {
        return this.todoListRepository.currentFilterStatus
    }

    get isAddModalOpen(): boolean {
        return this.todoListRepository.isAddModalOpen;
    }

    get isListLoading(): boolean {
        return this.todoRepository.isListLoading;
    }

    get isAddItemLoading(): boolean {
        return this.todoRepository.isAddItemLoading;
    }

    setFilter = (newFilterStatus?: TodoStatusEnum) =>
       this.todoListRepository.setFilter(newFilterStatus);

    openAddingModal = () =>
        this.todoListRepository.openAddingModal();

    closeAddingModal = () =>
        this.todoListRepository.closeAddingModal();

    loadItems = async () => {
        await this.todoRepository.loadItems();
    };

    addItem = async (newItem: TodoItemEntity) => {
        await this.todoRepository.addItem(newItem);
        this.closeAddingModal();
    };
}
