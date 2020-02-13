import { observable } from 'mobx';

import { ITodoItemDTOCreateOrUpdate, ITodoItemDTOView } from './types';
import { performRequest } from '../../mocks/fetch';
import { fromDTO, toCreateDTO } from './adapter';
import { TodoItemEntity } from './TodoItemEntity';
import { IReadTodoListRepository } from '../../modules/todo-list/bll/repositories/IReadTodoListRepository';
import { IAddNewTodoItemRepository } from '../../modules/todo-list/bll/repositories/IAddNewTodoItemRepository';
import { ILoadTodoListRepository } from '../../modules/todo-list/bll/repositories/ILoadTodoListRepository';

export class TodoEntityRepository implements IReadTodoListRepository, IAddNewTodoItemRepository, ILoadTodoListRepository {
    @observable
    todoList: TodoItemEntity[] = [];

    loadTodoList = async () => {
        const response = await performRequest<undefined, Array<ITodoItemDTOView>>('load');
        this.todoList = response.map(fromDTO);
    };

    addNewTodoItem = async (newItem: TodoItemEntity) => {
        const dto = toCreateDTO(newItem);

        const viewDto = await performRequest<ITodoItemDTOCreateOrUpdate, ITodoItemDTOView>('create', dto);

        this.todoList.push(fromDTO(viewDto));
    };
}
