import uuid from 'uuid/v4';

import { TodoItemStatus } from '../modules/todo-list/models/TodoItemStatus';
import { ITodoItemViewDTO } from '../entities/todo/api/dto/ITodoItemViewDTO';
import { ITodoItemCreateDTO } from '../entities/todo/api/dto/ITodoItemCreateDTO';

const mock: ITodoItemViewDTO[] = [
    {
        id: uuid(),
        item_name: 'Item1',
        item_description: 'Item1 description',
        item_status: TodoItemStatus.OPEN,
    },
    {
        id: uuid(),
        item_name: 'Item2',
        item_description: 'Item2 description',
        item_status: TodoItemStatus.IN_PROGRESS,
    },
    {
        id: uuid(),
        item_name: 'Item3',
        item_description: 'Item3 description',
        item_status: TodoItemStatus.DONE,
    },
];

export const performRequest = <TRequest, TResponse>(url: string, body?: TRequest): Promise<TResponse> =>
    new Promise<TResponse>((resolve => {
        setTimeout(() => {
            resolve(getResponse(url, body));
        }, 2000);
    }));

export const loadItems = (): ITodoItemViewDTO[] => mock;

export const addItem = (newItem: ITodoItemCreateDTO): ITodoItemViewDTO => ({
    id: uuid(),
    item_name: newItem.item_name,
    item_description: newItem.item_description,
    item_status: TodoItemStatus.OPEN
});

export const getResponse = (url: string, body?: any): any => {
    switch (url) {
        case 'load': return loadItems();
        case 'create': return addItem(body as ITodoItemCreateDTO);
        default: throw Error('404 NotFound');
    }
};
