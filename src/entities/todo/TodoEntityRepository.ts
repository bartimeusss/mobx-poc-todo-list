import { flow, observable } from 'mobx';

import { ITodoItemDTOCreateOrUpdate, ITodoItemDTOView } from './types';
import { performRequest } from '../../mocks/fetch';
import { fromDTO, toCreateDTO } from './adapter';
import { TodoItemEntity } from './TodoItemEntity';
import { IReadTodoListRepository } from '../../modules/todo-list/bll/repositories/IReadTodoListRepository';
import { IAddNewTodoItemRepository } from '../../modules/todo-list/bll/repositories/IAddNewTodoItemRepository';
import { ILoadTodoListRepository } from '../../modules/todo-list/bll/repositories/ILoadTodoListRepository';
import { ITodoItem } from '../../modules/todo-list/bll/models/ITodoItem';

export class TodoEntityRepository implements IReadTodoListRepository, IAddNewTodoItemRepository, ILoadTodoListRepository {
    @observable
    todoList: TodoItemEntity[] = [];

    *loadTodoListGenerator() {
        const response = yield performRequest<undefined, Array<ITodoItemDTOView>>('load');
        this.todoList = response.map(fromDTO);
    };

    loadTodoList = flow(this.loadTodoListGenerator);

    *addNewTodoItemGenerator(newItem: TodoItemEntity) {
        const dto = toCreateDTO(newItem);

        const viewDto = yield performRequest<ITodoItemDTOCreateOrUpdate, ITodoItemDTOView>('create', dto);

        this.todoList.push(fromDTO(viewDto));
    };

    addNewTodoItem = flow(this.addNewTodoItemGenerator);
}
