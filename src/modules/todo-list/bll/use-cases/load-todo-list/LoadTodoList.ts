import { ILoadTodoList } from '../../ports/in/ILoadTodoList';
import { ILoadTodoListRequester } from '../../ports/out/ILoadTodoListRequester';
import { ITodoListRepository } from '../../ports/out/ITodoListRepository';
import { AsyncUseCase } from '../../../../../common/async-operation/AsyncUseCase';

export class LoadTodoList extends AsyncUseCase implements ILoadTodoList {
    constructor(
        private repository: ITodoListRepository,
        private apiAdapter: ILoadTodoListRequester
    ) {
        super();
    }

    loadTodoListAsync = async () => {
        const todoItems = await this.apiAdapter.load();
        this.repository.saveTodoList(todoItems);
    };

    loadTodoList = this.async(this.loadTodoListAsync);
}
