import { AddNewTodoItem } from './use-cases/AddNewTodoItem';
import { LoadTodoList } from './use-cases/LoadTodoList';
import { FilterTodoListByStatus } from './use-cases/FilterTodoListByStatus';
import { TodoStatusFilterMobXRepository } from './adapters/repository/TodoStatusFilterMobXRepository';
import { TodoEntityRepository } from '../../entities/todo/repository/TodoEntityRepository';
import { TodoRequester } from '../../entities/todo/api/requester/TodoRequester';
import { TodoApiMapper } from '../../entities/todo/api/mapper/TodoApiMapper';
import { IAddNewTodoItem } from './ports/in/IAddNewTodoItem';
import { ILoadTodoList } from './ports/in/ILoadTodoList';
import { IFilterTodoListByStatus } from './ports/in/IFilterTodoListByStatus';

const todoEntityRepository = new TodoEntityRepository();
const todoStatusFilterRepository = new TodoStatusFilterMobXRepository();
const todoAdapter = new TodoApiMapper();
const todoRequester = new TodoRequester(todoAdapter);

export const addNewTodoItem: IAddNewTodoItem = new AddNewTodoItem(todoEntityRepository, todoRequester);
export const loadTodoList: ILoadTodoList = new LoadTodoList(todoEntityRepository, todoRequester);
export const filterTodoListByStatus: IFilterTodoListByStatus = new FilterTodoListByStatus(todoEntityRepository, todoStatusFilterRepository);
