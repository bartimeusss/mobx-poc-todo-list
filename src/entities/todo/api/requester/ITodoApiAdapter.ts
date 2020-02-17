import { IApiAdapter } from '../../../../common/adapter/IApiAdapter';
import { ITodoItem } from '../../../../modules/todo-list/bll/models/ITodoItem';
import { ITodoItemViewDTO } from '../dto/ITodoItemViewDTO';
import { ITodoItemCreateDTO } from '../dto/ITodoItemCreateDTO';

export type ITodoApiAdapter = IApiAdapter<ITodoItem, ITodoItemViewDTO, ITodoItemCreateDTO>;
