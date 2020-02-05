import { createContext, useContext } from 'react';
import { todoListStore, TodoListStore } from './TodoListStore';

export const TodoListContext = createContext<TodoListStore>(todoListStore);
export const useTodoListStore = (): TodoListStore => useContext(TodoListContext);
export const TodoListProvider = TodoListContext.Provider;
