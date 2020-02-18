import { TodoListMobXFactory } from '../../../infrastructure/mobx/TodoListMobXFactory';
import { TodoListReduxFactory } from '../../../infrastructure/redux/TodoListReduxFactory';
import { ITodoListConnector } from './ITodoListConnector';

export const connector: ITodoListConnector = new TodoListReduxFactory().create();
