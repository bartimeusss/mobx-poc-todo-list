import { ITodoListFactory } from './ITodoListFactory';
import { ITodoListConnector } from '../adapters/view/connect/ITodoListConnector';
import { AsyncUseCase } from '../../../common/async-operation';
import { ModalUseCase } from '../../../common/modal';
import { TodoRequester } from '../../../entities/todo/api/requester/TodoRequester';
import { ITodoUseCases } from '../adapters/view/connect/ITodoUseCases';
import { AddNewTodoItem } from '../use-cases/AddNewTodoItem';
import { LoadTodoList } from '../use-cases/LoadTodoList';
import { FilterTodoListByStatus } from '../use-cases/FilterTodoListByStatus';
import { IAsyncOperationRepository } from '../../../common/async-operation/use-case/IAsyncOperationRepository';
import { IModalRepository } from '../../../common/modal/use-case/IModalRepository';
import { ITodoListRepository } from '../ports/out/ITodoListRepository';
import { ITodoStatusFilterRepository } from '../ports/out/ITodoStatusFilterRepository';
import { ITodoApiMapper } from '../../../entities/todo/api/requester/ITodoApiMapper';

export abstract class BaseTodoListFactory implements ITodoListFactory {
    abstract asyncOperationRepository(): IAsyncOperationRepository
    abstract modalRepository(): IModalRepository
    abstract todoEntityRepository(): ITodoListRepository;
    abstract todoStatusFilterRepository(): ITodoStatusFilterRepository;
    abstract todoApiMapper(): ITodoApiMapper;
    abstract todoRequester(todoApiMapper: ITodoApiMapper): TodoRequester;
    abstract connector(useCases: ITodoUseCases): ITodoListConnector;

    create(): ITodoListConnector {
        AsyncUseCase.repositoryFactory = this.asyncOperationRepository;
        ModalUseCase.repositoryFactory = this.modalRepository;

        const todoEntityRepository = this.todoEntityRepository();
        const todoStatusFilterRepository = this.todoStatusFilterRepository();
        const todoAdapter = this.todoApiMapper();
        const todoRequester = this.todoRequester(todoAdapter);

        const useCases: ITodoUseCases = {
            useAddNewTodoItem: new AddNewTodoItem(todoEntityRepository, todoRequester),
            useLoadTodoList: new LoadTodoList(todoEntityRepository, todoRequester),
            useFilterTodoListByStatus: new FilterTodoListByStatus(todoEntityRepository, todoStatusFilterRepository),
        };

        return this.connector(useCases);
    }
}
