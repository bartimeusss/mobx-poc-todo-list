import { ILoadTodoList } from '../ports/in/ILoadTodoList';
import { ILoadTodoListRequester } from '../ports/out/ILoadTodoListRequester';
import { ITodoListRepository } from '../ports/out/ITodoListRepository';
import { AsyncUseCase } from '../../../common/async-operation';

export class LoadTodoList extends AsyncUseCase implements ILoadTodoList {
    constructor(
        private repository: ITodoListRepository,
        private requester: ILoadTodoListRequester
    ) {
        super();
    }

    loadTodoListAsync = async () => {
        const todoItems = await this.requester.load();
        this.repository.saveTodoList(todoItems);
    };

    loadTodoList = this.async(this.loadTodoListAsync);
}
