import { ILoadTodoList } from './ILoadTodoList';
import { ILoadTodoListRepository } from '../../repositories/ILoadTodoListRepository';

export abstract class LoadTodoList implements ILoadTodoList {
    isLoading = false;
    error: string | undefined = undefined;

    constructor(
        private repository: ILoadTodoListRepository
    ) {}

    abstract loadTodoList(): void;

    *loadTodoListImpl() {
        this.isLoading = true;

        try {
            yield this.repository.loadTodoList();
        } catch (e) {
            this.error = e.toString();
        } finally {
            this.isLoading = false;
        }
    }
}
