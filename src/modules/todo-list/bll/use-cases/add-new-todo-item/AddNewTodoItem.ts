import { IAddNewTodoItem } from './IAddNewTodoItem';
import { ITodoItem } from '../../models/ITodoItem';
import { IAddNewTodoItemRepository } from '../../repositories/IAddNewTodoItemRepository';

export abstract class AddNewTodoItem implements IAddNewTodoItem {
    isModalOpen = false;
    isLoading = false;
    error: string | undefined = undefined;

    constructor(
        private repository: IAddNewTodoItemRepository
    ) {}

    abstract addNewItem(newTodoItem: ITodoItem): void;

    *addNewItemImpl(newItem: ITodoItem) {
        this.isLoading = true;

        try {
            yield this.repository.addNewTodoItem(newItem);
            this.closeModal();
        } catch (e) {
            this.error = e.toString();
        } finally {
            this.isLoading = false;
        }
    };

    closeModal = (): void => {
        this.isModalOpen = false;
    };

    openModal = (): void => {
        this.isModalOpen = true;
    };
}
