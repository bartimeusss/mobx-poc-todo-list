import { ITodoListConnector } from '../../adapters/view/connect/ITodoListConnector';
import { TodoApiMapper } from '../../../../entities/todo/api/mapper/TodoApiMapper';
import { TodoRequester } from '../../../../entities/todo/api/requester/TodoRequester';
import { ITodoUseCases } from '../../adapters/view/connect/ITodoUseCases';
import { TodoEntityMobXRepository } from '../../../../entities/todo/repository/mobx/TodoEntityMobXRepository';
import { TodoStatusFilterMobXRepository } from '../../adapters/repository/todo-status-filter/mobx/TodoStatusFilterMobXRepository';
import { TodoListMobXConnector } from '../../adapters/view/connect/mobx/TodoListMobXConnector';
import { AsyncOperationMobXRepository } from '../../../../common/async-operation/repository/mobx/AsyncOperationMobXRepository';
import { ModalMobXRepository } from '../../../../common/modal/repository/mobx/ModalMobXRepository';
import { BaseTodoListFactory } from '../BaseTodoListFactory';
import { IAsyncOperationRepository } from '../../../../common/async-operation/use-case/IAsyncOperationRepository';
import { IModalRepository } from '../../../../common/modal/use-case/IModalRepository';
import { ITodoListRepository } from '../../ports/out/ITodoListRepository';
import { ITodoStatusFilterRepository } from '../../ports/out/ITodoStatusFilterRepository';
import { ITodoApiMapper } from '../../../../entities/todo/api/requester/ITodoApiMapper';

export class TodoListMobXFactory extends BaseTodoListFactory {
    connector = (useCases: ITodoUseCases): ITodoListConnector =>
        new TodoListMobXConnector(useCases);

    asyncOperationRepository = (): IAsyncOperationRepository =>
        new AsyncOperationMobXRepository();

    modalRepository = (): IModalRepository =>
        new ModalMobXRepository();

    todoApiMapper = (): ITodoApiMapper =>
        new TodoApiMapper();

    todoEntityRepository = (): ITodoListRepository =>
        new TodoEntityMobXRepository();

    todoRequester = (todoApiMapper: ITodoApiMapper): TodoRequester =>
        new TodoRequester(todoApiMapper);

    todoStatusFilterRepository = (): ITodoStatusFilterRepository =>
        new TodoStatusFilterMobXRepository();
}
