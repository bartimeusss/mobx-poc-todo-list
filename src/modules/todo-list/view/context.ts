import { createContext, useContext, Provider } from 'react';
import { addNewTodoItem, loadTodoList, filterTodoListByStatus } from '../ioc';
import { getModal } from '../../../common/modal/getModal';
import { ADD_NEW_TODO_ITEM } from '../bll/use-cases/add-new-todo-item/AddNewTodoItemConstants';


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
    addNewTodoItemModal: getModal(ADD_NEW_TODO_ITEM),
    loadTodoList,
    filterTodoListByStatus,
};


const todoContext = getUseCaseContext(todoUseCases);

export const TodoProvider = todoContext.Provider;

export const useAddNewTodoItemModal = () => todoContext.useCase().addNewTodoItemModal;
export const useLoadTodoList = () => todoContext.useCase().loadTodoList;
export const useFilterTodoListByStatus = () => todoContext.useCase().filterTodoListByStatus;
export const useAddNewTodoItem = () => todoContext.useCase().addNewTodoItem;

