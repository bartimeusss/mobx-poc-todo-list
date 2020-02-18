import { ITodoUseCases } from '../ITodoUseCases';
import { IReduxStore } from '../../../../infrastructure/redux/IReduxStore';
import { ReduxBaseConnector } from '../../../../../../common/connector/redux/ReduxBaseConnector';

export class TodoListReduxConnector extends ReduxBaseConnector<ITodoUseCases>  {
    constructor(
        useCases: ITodoUseCases,
        store: IReduxStore
    ) {
        super(TodoListReduxConnector.getHooks(useCases), store);
    }

    static getHooks = (useCases: ITodoUseCases) => {
        const { connectUseCase } = TodoListReduxConnector;
        const { useLoadTodoList, useFilterTodoListByStatus, useAddNewTodoItem } = useCases;

        return {
            useLoadTodoList: () => connectUseCase(useLoadTodoList, 'isLoading'),
            useFilterTodoListByStatus: () => connectUseCase(useFilterTodoListByStatus, 'filter', 'filteredTodoList'),
            useAddNewTodoItem: () => ({
                ...connectUseCase(useAddNewTodoItem, 'isLoading'),
                modal: connectUseCase(useAddNewTodoItem.modal, 'isOpen')
            }),
        }
    };
}

