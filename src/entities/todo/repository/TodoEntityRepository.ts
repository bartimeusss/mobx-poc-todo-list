import { observable } from 'mobx';
import { actionAsync } from 'mobx-utils';

import { ITodoRequester } from './ITodoRequester';
import { TodoItemEntity } from '..';
import { ITodoEntityRepository } from './ITodoEntityRepository';

export class TodoEntityRepository implements ITodoEntityRepository {
    constructor(
        private requester: ITodoRequester
   ) {}

    @observable.shallow
    todoList: TodoItemEntity[] = [];

    @observable
    isListLoading: boolean = false;

    @observable
    isAddItemLoading: boolean = false;

    @actionAsync
    loadItems = async () => {
        this.isListLoading = true;

        try {
            this.todoList = await this.requester.load();
        } finally {
            this.isListLoading = false;
        }
    };

    @actionAsync
    addItem = async (newItem: TodoItemEntity) => {
        this.isAddItemLoading = true;

        try {
            const createdItem = await this.requester.create(newItem);
            this.todoList.push(createdItem);
        } finally {
            this.isAddItemLoading = false;
        }
    };
}
