import sinon from 'sinon';
import { autorun, comparer, observe, reaction, when } from 'mobx';

import { TodoEntityStore } from '../../../entities/todo/TodoEntityStore';
import { TodoItemEntity } from '../../../entities/todo/TodoItemEntity';
import { ITodoItemDTOView, TodoStatusEnum } from '../../../entities/todo/types';
import * as fetch from '../../../mocks/fetch';
import { performRequest } from '../../../mocks/fetch';

describe('TodoEntityStore tests', () => {
    let todoEntityStore: TodoEntityStore;

    beforeEach(() => {
       todoEntityStore = new TodoEntityStore();
       sinon.restore();
    });

    it('todoList should be empty by default', () => {
        expect(todoEntityStore.todoList).toEqual([]);
    });

    describe('observable tests', () => {
        it('todoList should be observable (check by observe)', () => {
            //Given
            let countObserveInvocations = 0;

            observe(todoEntityStore.todoList, () => countObserveInvocations++);

            //When
            todoEntityStore.todoList.push(new TodoItemEntity('id', 'name', 'description', TodoStatusEnum.OPEN));
            todoEntityStore.todoList.push(new TodoItemEntity('id2', 'name2', 'description2', TodoStatusEnum.OPEN));

            //Then
            expect(countObserveInvocations).toBe(2);
        });

        it('todoList should be observable (check by when)', () => {
            //Given
            let countWhenInvocations = 0;

            when(
                () => todoEntityStore.todoList.length !== 0,
                () => countWhenInvocations++,
            );

            //When
            todoEntityStore.todoList.push(new TodoItemEntity('id', 'name', 'description', TodoStatusEnum.OPEN));
            todoEntityStore.todoList.push(new TodoItemEntity('id2', 'name2', 'description2', TodoStatusEnum.OPEN));

            //Then
            expect(countWhenInvocations).toBe(1);
        });

        it('todoList should be observable (check by autorun)', () => {
            //Given
            let todoListSizes: number[] = [];

            const dispose = autorun(() => todoListSizes.push(todoEntityStore.todoList.length));

            //When
            todoEntityStore.todoList.push(new TodoItemEntity('id', 'name', 'description', TodoStatusEnum.OPEN));
            todoEntityStore.todoList.push(new TodoItemEntity('id2', 'name2', 'description2', TodoStatusEnum.OPEN));

            dispose();

            todoEntityStore.todoList.push(new TodoItemEntity('id3', 'name3', 'description3', TodoStatusEnum.OPEN));

            //Then
            expect(todoListSizes).toEqual([0, 1, 2]);
        });

        it('todoList should be observable (check by reaction)', () => {
            //Given
            let todoStatuses: TodoStatusEnum[][] = [];

            const isUnique = <T>(value: T, index: number, self: T[]): boolean =>
                self.indexOf(value) === index;

            const dispose = reaction(
                () => todoEntityStore.todoList.map(it => it.status).filter(isUnique),
                (uniqStatuses) => todoStatuses.push(uniqStatuses),
                { equals: comparer.structural }
            );

            //When
            todoEntityStore.todoList.push(new TodoItemEntity('id', 'name', 'description', TodoStatusEnum.OPEN));
            todoEntityStore.todoList.push(new TodoItemEntity('id2', 'name2', 'description2', TodoStatusEnum.OPEN));

            todoEntityStore.todoList.push(new TodoItemEntity('id3', 'name3', 'description3', TodoStatusEnum.IN_PROGRESS));
            todoEntityStore.todoList.push(new TodoItemEntity('id3', 'name3', 'description3', TodoStatusEnum.IN_PROGRESS));

            dispose();

            todoEntityStore.todoList.push(new TodoItemEntity('id3', 'name3', 'description3', TodoStatusEnum.DONE));

            //Then
            expect(todoStatuses).toEqual([
                [TodoStatusEnum.OPEN],
                [TodoStatusEnum.OPEN, TodoStatusEnum.IN_PROGRESS]
            ]);
        });
    });

    describe('loadItems tests', () => {
        it('loadItems should load todo items', async () => {
            //Given
            const expectedTodoList = [
                new TodoItemEntity('id', 'name', 'description', TodoStatusEnum.OPEN)
            ];

            const dtos: ITodoItemDTOView[] = [
                {
                    id: 'id',
                    item_name: 'name',
                    item_description: 'description',
                    item_status: TodoStatusEnum.OPEN
                }
            ];

            const performRequestStub = sinon.stub(fetch, 'performRequest').returns(new Promise(resolve => resolve(dtos)));

            //When
            await todoEntityStore.loadItems();

            //Then
            expect(performRequestStub.calledOnceWithExactly('load'));
            expect(todoEntityStore.todoList).toEqual(expectedTodoList);
        });

        it('loadItems should control observable values', async () => {
            //Given
            sinon.stub(fetch, 'performRequest').returns(new Promise(resolve => resolve([])));

            const states: ITestChange<TodoEntityStore>[] = [];
            const expectedStates: ITestChange<TodoEntityStore>[] = [
                {
                    name: 'isListLoading',
                    oldValue: false,
                    newValue: true,
                },
                {
                    name: 'todoList',
                    oldValue: [],
                    newValue: [],
                },
                {
                    name: 'isListLoading',
                    oldValue: true,
                    newValue: false,
                },
            ];

            observe(todoEntityStore, saveChange<TodoEntityStore>(states));

            //When
            await todoEntityStore.loadItems();

            //Then
            expect(states).toEqual(expectedStates);
        });

        it('loadItems should have actionAsync annotation', async () => {
            //Given
            const expectedTodoList = [
                new TodoItemEntity('id', 'name', 'description', TodoStatusEnum.OPEN)
            ];
            const dtos: ITodoItemDTOView[] = [
                {
                    id: 'id',
                    item_name: 'name',
                    item_description: 'description',
                    item_status: TodoStatusEnum.OPEN
                }
            ];

            sinon.stub(fetch, 'performRequest').returns(new Promise(resolve => resolve(dtos)));

            const reactions: Array<{ isLoading: boolean, todoList: Array<TodoItemEntity> }> = [];
            const expectedReactions: Array<{ isLoading: boolean, todoList: Array<TodoItemEntity> }> = [
                {
                    isLoading: true,
                    todoList: []
                },
                {
                    isLoading: false,
                    todoList: expectedTodoList,
                },
            ];

            reaction(
                () => ({
                    isLoading: todoEntityStore.isListLoading,
                    todoList: todoEntityStore.todoList,
                }),
                data => reactions.push(data)
            );

            //When
            await todoEntityStore.loadItems();

            //Then
            expect(reactions).toEqual(expectedReactions);
        });

        it('loadItemsGenerator should load todo items', () => {
        //Given
        const expectedTodoList = [
            new TodoItemEntity('id', 'name', 'description', TodoStatusEnum.OPEN)
        ];

        const dtos: ITodoItemDTOView[] = [
            {
                id: 'id',
                item_name: 'name',
                item_description: 'description',
                item_status: TodoStatusEnum.OPEN
            }
        ];
        expect(todoEntityStore.isListLoading).toBeFalsy();

        //When
        const generator = todoEntityStore.loadItemsGenerator();

        //Then
        expect(generator.next().value).toEqual(performRequest('load'));

        expect(todoEntityStore.isListLoading).toBeTruthy();

        expect(generator.next(dtos).done).toBeTruthy();

        expect(todoEntityStore.isListLoading).toBeFalsy();

        expect(todoEntityStore.todoList).toEqual(expectedTodoList);
    });
    });
});

const saveChange = <T>(states: ITestChange<T>[]) => (change: any) => {
    states.push({
        name: change.name,
        oldValue: change.oldValue,
        newValue: change.newValue
    })
};

interface ITestChange<T> {
    name: keyof T,
    oldValue: any,
    newValue: any
}
