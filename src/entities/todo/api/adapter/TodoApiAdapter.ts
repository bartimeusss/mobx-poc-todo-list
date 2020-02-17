import { ITodoItem } from '../../../../modules/todo-list/bll/models/ITodoItem';
import { ITodoApiAdapter } from '../requester/ITodoApiAdapter';
import { ITodoItemViewDTO } from '../dto/ITodoItemViewDTO';
import { ITodoItemCreateDTO } from '../dto/ITodoItemCreateDTO';

export class TodoApiAdapter implements ITodoApiAdapter {
    fromDTO = (dto: ITodoItemViewDTO): ITodoItem => ({
        id: dto.id,
        name: dto.item_name,
        description: dto.item_description,
        status: dto.item_status
    });

    toCreateDTO = (entity: ITodoItem): ITodoItemCreateDTO => ({
        item_name: entity.name,
        item_description: entity.description
    });

    toUpdateDTO = this.toCreateDTO;
}
