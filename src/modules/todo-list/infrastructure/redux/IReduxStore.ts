import { IStoreTodoList } from '../../../../entities/todo/repository/redux/types';
import { Store } from 'redux';
import { IStoreTodoStatusFilter } from '../../adapters/repository/todo-status-filter/redux/types';
import { IStoreAsyncOperations } from '../../../../common/async-operation/repository/redux/types';
import { IStoreModals } from '../../../../common/modal/repository/redux/types';

export interface IReduxStoreStructure {
    entities: {
        todo: IStoreTodoList;
    },
    modules: {
        todoList: {
            todoStatusFilter: IStoreTodoStatusFilter;
        }
    },
    commons: {
        asyncOperations: IStoreAsyncOperations,
        modals: IStoreModals,
    }
}

export type IReduxStore = Store<IReduxStoreStructure>;
