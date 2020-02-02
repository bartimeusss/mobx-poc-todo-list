import { createContext, useContext } from 'react';

import { todoListService } from '../../ioc-container';
import { ITodoListService } from './service/ITodoListService';

export const TodoListContext = createContext<ITodoListService>(todoListService);
export const useTodoListService = (): ITodoListService => useContext(TodoListContext);
export const TodoListProvider = TodoListContext.Provider;
