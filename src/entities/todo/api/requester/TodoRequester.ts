import { ILoadTodoListRequester } from '../../../../modules/todo-list/ports/out/ILoadTodoListRequester';
import { ITodoItem } from '../../../../modules/todo-list/models/ITodoItem';
import { performRequest } from '../../../../mocks/fetch';
import { IAddTodoItemRequester } from '../../../../modules/todo-list/ports/out/IAddTodoItemRequester';
import { ITodoApiMapper } from './ITodoApiMapper';
import { ITodoItemViewDTO } from '../dto/ITodoItemViewDTO';
import { ITodoItemCreateDTO } from '../dto/ITodoItemCreateDTO';

export class TodoRequester implements ILoadTodoListRequester, IAddTodoItemRequester {
    constructor(
        private adapter: ITodoApiMapper
    ) {}

    load = async (): Promise<ITodoItem[]> => {
        const response = await performRequest<undefined, Array<ITodoItemViewDTO>>('load');

        return response.map(this.adapter.fromDTO)
    };

    addItem = async (item: ITodoItem): Promise<ITodoItem> => {
        const dto = this.adapter.toCreateDTO(item);
        const viewDto = await performRequest<ITodoItemCreateDTO, ITodoItemViewDTO>('create', dto);

        return this.adapter.fromDTO(viewDto);
    }
}
