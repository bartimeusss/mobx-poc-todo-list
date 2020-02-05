import { ITodoItemDTOCreateOrUpdate, ITodoItemDTOView } from './types';
import { TodoItemEntity } from './TodoItemEntity';

export const fromDTO = (dto: ITodoItemDTOView): TodoItemEntity => new TodoItemEntity(
    dto.id,
    dto.item_name,
    dto.item_description,
    dto.item_status
);

export const toCreateDTO = (entity: TodoItemEntity): ITodoItemDTOCreateOrUpdate => ({
    item_name: entity.name,
    item_description: entity.description
});
