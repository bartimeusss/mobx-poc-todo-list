import { IAddNewTodoItem } from '../../ports/in/IAddNewTodoItem';
import { ITodoItem } from '../../models/ITodoItem';
import { getModal } from '../../../../../common/modal/getModal';
import { ADD_NEW_TODO_ITEM } from './AddNewTodoItemConstants';
import { ITodoListRepository } from '../../ports/out/ITodoListRepository';
import { IAddTodoItemRequester } from '../../ports/out/IAddTodoItemRequester';
import { AsyncUseCase } from '../../../../../common/async-operation/AsyncUseCase';

export class AddNewTodoItem extends AsyncUseCase implements IAddNewTodoItem {
    constructor(
        private repository: ITodoListRepository,
        private requester: IAddTodoItemRequester
    ) {
        super();
    }

    addNewItemAsync = async (newItem: ITodoItem) => {
        const createdItem = await this.requester.addItem(newItem);
        this.repository.addTodoItem(createdItem);
        getModal(ADD_NEW_TODO_ITEM).close();
    };

    addNewItem = this.async(this.addNewItemAsync);
}
