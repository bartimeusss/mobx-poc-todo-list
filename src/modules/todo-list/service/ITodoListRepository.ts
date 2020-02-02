import { TodoStatusEnum } from '../../../entities/todo';

export interface ITodoListRepository {
    currentFilterStatus?: TodoStatusEnum;
    isAddModalOpen: boolean;

    setFilter(newFilterStatus?: TodoStatusEnum): void
    openAddingModal(): void
    closeAddingModal(): void
}
