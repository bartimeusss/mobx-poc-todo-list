import { IMock } from 'typemoq/Api/IMock';
import * as TypeMoq from 'typemoq';

import { ITodoRequester } from '../../../../entities/todo/repository/ITodoRequester';
import { TodoItemEntity, TodoEntityRepository, TodoStatusEnum } from '../../../../entities/todo';
import { observe } from 'mobx';
import sinon from 'sinon';

describe('TodoRepository tests', () => {
    let requesterMock: IMock<ITodoRequester>;
    let repository: TodoEntityRepository;

    beforeEach(() => {
        requesterMock = TypeMoq.Mock.ofType<ITodoRequester>();
        repository = new TodoEntityRepository(requesterMock.object);
    });

    describe('todoList', () => {
        it('should be empty by default', () => {
            expect(repository.todoList).toHaveLength(0);
        });

        it('should be observable', () => {
            //Given
            const newItem = TypeMoq.Mock.ofType<TodoItemEntity>().object;
            const stub = sinon.stub();

            observe(repository, 'todoList', stub);

            //When
            repository.todoList.push(newItem);

            //Then
            expect(stub.calledOnce).toBeTruthy();
        });

        it('should be shallow', () => {
            //Given
            const newItem = new TodoItemEntity('id', '', '', TodoStatusEnum.OPEN);
            repository.todoList.push(newItem);

            observe(repository, 'todoList', () => {
                throw new Error('should not listen to changes inside items')
            });

            //When
            repository.todoList[0].description = 'assd';
        });
    });
});
