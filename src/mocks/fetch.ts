import uuid from 'uuid/v4';

import {
    ITodoItemDTOCreateOrUpdate,
    ITodoItemDTOView,
} from '../entities/todo/types';
import { TodoItemStatus } from '../modules/todo-list/bll/models/TodoItemStatus';

const mock: ITodoItemDTOView[] = [
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

export const loadItems = (): ITodoItemDTOView[] => mock;

export const addItem = (newItem: ITodoItemDTOCreateOrUpdate): ITodoItemDTOView => ({
    id: uuid(),
    item_name: newItem.item_name,
    item_description: newItem.item_description,
    item_status: TodoItemStatus.OPEN
});

export const getResponse = (url: string, body?: any): any => {
    switch (url) {
        case 'load': return loadItems();
        case 'create': return addItem(body as ITodoItemDTOCreateOrUpdate);
        default: throw Error('404 NotFound');
    }
};
