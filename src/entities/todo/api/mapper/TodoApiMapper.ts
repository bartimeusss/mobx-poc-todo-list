import { ITodoItem } from '../../../../modules/todo-list/models/ITodoItem';
import { ITodoApiMapper } from '../requester/ITodoApiMapper';
import { ITodoItemViewDTO } from '../dto/ITodoItemViewDTO';
import { ITodoItemCreateDTO } from '../dto/ITodoItemCreateDTO';

export class TodoApiMapper implements ITodoApiMapper {
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
