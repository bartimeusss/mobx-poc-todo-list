import { TodoEntityRepository } from '../../../entities/todo/TodoEntityRepository';
import { AddNewTodoItemMobX } from './mobx/AddNewTodoItemMobX';
import { LoadTodoListMobX } from './mobx/LoadTodoListMobX';
import { FilterTodoListByStatusMobX } from './mobx/FilterTodoListByStatusMobX';
import { ValidateTodoItemMobX } from './mobx/ValidateTodoItemMobX';

const todoEntityRepository = new TodoEntityRepository();

export const addNewTodoItem = new AddNewTodoItemMobX(todoEntityRepository);
export const loadTodoList = new LoadTodoListMobX(todoEntityRepository);
export const filterTodoListByStatus = new FilterTodoListByStatusMobX(todoEntityRepository);
export const validateTodoItem = new ValidateTodoItemMobX();
