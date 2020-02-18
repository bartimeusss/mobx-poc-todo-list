import { ILoadTodoList } from '../../../ports/in/ILoadTodoList';
import { IFilterTodoListByStatus } from '../../../ports/in/IFilterTodoListByStatus';
import { IAddNewTodoItem } from '../../../ports/in/IAddNewTodoItem';

export interface ITodoUseCases {
    useLoadTodoList: ILoadTodoList;
    useFilterTodoListByStatus: IFilterTodoListByStatus;
    useAddNewTodoItem: IAddNewTodoItem;
}
