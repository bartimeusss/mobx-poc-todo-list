import { AddNewTodoItem } from './bll/use-cases/add-new-todo-item/AddNewTodoItem';
import { LoadTodoList } from './bll/use-cases/load-todo-list/LoadTodoList';
import { FilterTodoListByStatus } from './bll/use-cases/filter-todo-list-by-status/FilterTodoListByStatus';
import { TodoStatusFilterMobXRepository } from './repository/TodoStatusFilterMobXRepository';
import { TodoEntityRepository } from '../../entities/todo/repository/TodoEntityRepository';
import { TodoRequester } from '../../entities/todo/api/requester/TodoRequester';
import { TodoApiAdapter } from '../../entities/todo/api/adapter/TodoApiAdapter';

const todoEntityRepository = new TodoEntityRepository();
const todoStatusFilterRepository = new TodoStatusFilterMobXRepository();
const todoAdapter = new TodoApiAdapter();
const todoRequester = new TodoRequester(todoAdapter);

export const addNewTodoItem = new AddNewTodoItem(todoEntityRepository, todoRequester);
export const loadTodoList = new LoadTodoList(todoEntityRepository, todoRequester);
export const filterTodoListByStatus = new FilterTodoListByStatus(todoEntityRepository, todoStatusFilterRepository);
