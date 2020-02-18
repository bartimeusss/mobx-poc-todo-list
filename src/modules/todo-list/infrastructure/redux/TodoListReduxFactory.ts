import { ITodoListConnector } from '../../adapters/view/connect/ITodoListConnector';
import { TodoApiMapper } from '../../../../entities/todo/api/mapper/TodoApiMapper';
import { TodoRequester } from '../../../../entities/todo/api/requester/TodoRequester';
import { ITodoUseCases } from '../../adapters/view/connect/ITodoUseCases';
import { createStore, compose } from 'redux';
import { TodoEntityReduxRepository } from '../../../../entities/todo/repository/redux/TodoEntityReduxRepository';
import { TodoStatusFilterReduxRepository } from '../../adapters/repository/todo-status-filter/redux/TodoStatusFilterReduxRepository';
import { TodoListReduxConnector } from '../../adapters/view/connect/redux/TodoListReduxConnector';
import { AsyncOperationReduxRepository } from '../../../../common/async-operation/repository/redux/AsyncOperationReduxRepository';
import { ModalReduxRepository } from '../../../../common/modal/repository/redux/ModalReduxRepository';
import { BaseTodoListFactory } from '../BaseTodoListFactory';
import { IAsyncOperationRepository } from '../../../../common/async-operation/use-case/IAsyncOperationRepository';
import { IModalRepository } from '../../../../common/modal/use-case/IModalRepository';
import { ITodoApiMapper } from '../../../../entities/todo/api/requester/ITodoApiMapper';
import { ITodoListRepository } from '../../ports/out/ITodoListRepository';
import { ITodoStatusFilterRepository } from '../../ports/out/ITodoStatusFilterRepository';
import { rootReducer } from './rootReducer';

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export class TodoListReduxFactory extends BaseTodoListFactory  {
    private store = createStore(rootReducer, composeEnhancers());

    connector = (useCases: ITodoUseCases): ITodoListConnector =>
        new TodoListReduxConnector(useCases, this.store);

    asyncOperationRepository = (): IAsyncOperationRepository =>
        new AsyncOperationReduxRepository(this.store);

    modalRepository = (): IModalRepository =>
        new ModalReduxRepository(this.store);

    todoApiMapper = (): ITodoApiMapper =>
        new TodoApiMapper();

    todoEntityRepository = (): ITodoListRepository =>
        new TodoEntityReduxRepository(this.store);

    todoRequester = (todoApiMapper: ITodoApiMapper): TodoRequester =>
        new TodoRequester(todoApiMapper);

    todoStatusFilterRepository = (): ITodoStatusFilterRepository =>
        new TodoStatusFilterReduxRepository(this.store);
}
