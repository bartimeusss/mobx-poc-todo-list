import { TodoAdapter } from './entities/todo/api/adapter/TodoAdapter';
import { TodoRequester } from './entities/todo/api/requester/TodoRequester';
import { FetchTodoMock } from './mocks/FetchTodoMock';
import { TodoListService } from './modules/todo-list/service/TodoListService';
import { TodoListRepository } from './modules/todo-list/repository/TodoListRepository';
import { TodoEntityRepository } from './entities/todo/repository/TodoEntityRepository';

const todoAdapter = new TodoAdapter();
const fetchTodoMock = new FetchTodoMock();
const todoRequester = new TodoRequester(todoAdapter, fetchTodoMock);

export const todoRepository = new TodoEntityRepository(todoRequester);
export const todoListRepository = new TodoListRepository();
export const todoListService = new TodoListService(todoRepository, todoListRepository);
