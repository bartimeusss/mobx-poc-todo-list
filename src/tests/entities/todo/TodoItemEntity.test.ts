import { isObservableProp } from 'mobx';
import { TodoItemEntity } from '../../../entities/todo/TodoItemEntity';
import { TodoStatusEnum } from '../../../entities/todo/types';

describe('TodoItemEntity tests', () => {
    it.each([
        'id',
        'name',
        'description',
        'status'
    ])('%s should be observable', (fieldName: string) => {
        const todoItem = new TodoItemEntity('', '', '', TodoStatusEnum.OPEN);

        expect(isObservableProp(todoItem, fieldName)).toBeTruthy();
    });

    it('ctor test', () => {
        const todoItem = new TodoItemEntity('id', 'name', 'description', TodoStatusEnum.OPEN);

        expect(todoItem.id).toEqual('id');
        expect(todoItem.name).toEqual('name');
        expect(todoItem.description).toEqual('description');
        expect(todoItem.status).toEqual(TodoStatusEnum.OPEN);
    })
});
