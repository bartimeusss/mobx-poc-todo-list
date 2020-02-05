import { observable } from 'mobx';
import { TodoStatusEnum } from './types';

export class TodoItemEntity {
    @observable id: string | null;
    @observable name: string;
    @observable description: string;
    @observable status: TodoStatusEnum;

    constructor(id: string | null, name: string, description: string, status: TodoStatusEnum) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
    }
}
