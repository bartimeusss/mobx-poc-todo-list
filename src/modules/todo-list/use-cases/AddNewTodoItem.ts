import { IAddNewTodoItem } from '../ports/in/IAddNewTodoItem';
import { ITodoItem } from '../models/ITodoItem';
import { ITodoListRepository } from '../ports/out/ITodoListRepository';
import { IAddTodoItemRequester } from '../ports/out/IAddTodoItemRequester';
import { AsyncUseCase } from '../../../common/async-operation';
import { ModalUseCase } from '../../../common/modal';

export class AddNewTodoItem extends AsyncUseCase implements IAddNewTodoItem {
    modal = new ModalUseCase();

    constructor(
        private repository: ITodoListRepository,
        private requester: IAddTodoItemRequester
    ) {
        super();
    }

    addNewItemAsync = async (newItem: ITodoItem) => {
        const { repository, requester, modal } = this;

        const createdItem = await requester.addItem(newItem);
        repository.addTodoItem(createdItem);
        modal.close();
    };

    addNewItem = this.async(this.addNewItemAsync);
}
