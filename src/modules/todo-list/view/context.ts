import { createContext, useContext, Provider } from 'react';
import { addNewTodoItem, loadTodoList, filterTodoListByStatus, validateTodoItem } from '../infrastructure/ioc';


const getUseCaseContext = <T>(useCase: T): IConnectUseCase<T> => {
    const context = createContext<T>(useCase);

    return {
        useCase: () => useContext(context),
        Provider: context.Provider
    };
};

interface IConnectUseCase<T> {
    useCase: () => T,
    Provider: Provider<T>
}

export const todoUseCases = {
    addNewTodoItem,
    loadTodoList,
    filterTodoListByStatus,
    validateTodoItem,
};


const todoContext = getUseCaseContext(todoUseCases);

export const TodoProvider = todoContext.Provider;

export const useLoadTodoList = () => todoContext.useCase().loadTodoList;
export const useFilterTodoListByStatus = () => todoContext.useCase().filterTodoListByStatus;
export const useAddNewTodoItem = () => todoContext.useCase().addNewTodoItem;
export const useValidateTodoItem = () => todoContext.useCase().validateTodoItem;

