import { flow, observable } from 'mobx';
import { actionAsync, task } from 'mobx-utils';

import { ITodoItemDTOCreateOrUpdate, ITodoItemDTOView } from './types';
import { performRequest } from '../../mocks/fetch';
import { fromDTO, toCreateDTO } from './adapter';
import { TodoItemEntity } from './TodoItemEntity';

export class TodoEntityStore {

    @observable
    todoList: TodoItemEntity[] = [];

    @observable
    isListLoading: boolean = false;

    @observable
    isAddItemLoading: boolean = false;

    @actionAsync
    loadItems = async () => {
        this.isListLoading = true;

        try {
            const response = await task(performRequest<undefined, Array<ITodoItemDTOView>>('load'));
            this.todoList = response.map(fromDTO);
        } finally {
            this.isListLoading = false;
        }
    };

    *loadItemsGenerator() {
        this.isListLoading = true;

        try {
            const response = yield performRequest<undefined, Array<ITodoItemDTOView>>('load');
            this.todoList = response.map(fromDTO);
        } finally {
            this.isListLoading = false;
        }
    };

    loadItems1 = flow(this.loadItemsGenerator);

    @actionAsync
    addItem = async (newItem: TodoItemEntity) => {
        const dto = toCreateDTO(newItem);

        this.isAddItemLoading = true;

        try {
            const viewDto = await performRequest<ITodoItemDTOCreateOrUpdate, ITodoItemDTOView>('create', dto);
            this.todoList.push(fromDTO(viewDto));
        } finally {
            this.isAddItemLoading = false;
        }
    };
}

export const todoEntityStore = new TodoEntityStore();
