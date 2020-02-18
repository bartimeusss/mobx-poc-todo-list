import { IApiMapper } from '../../../../common/mapper/IApiMapper';
import { ITodoItem } from '../../../../modules/todo-list/models/ITodoItem';
import { ITodoItemViewDTO } from '../dto/ITodoItemViewDTO';
import { ITodoItemCreateDTO } from '../dto/ITodoItemCreateDTO';

export type ITodoApiMapper = IApiMapper<ITodoItem, ITodoItemViewDTO, ITodoItemCreateDTO>;
