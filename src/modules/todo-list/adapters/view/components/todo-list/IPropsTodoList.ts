import { ITodoUseCases } from '../../connect/ITodoUseCases';
import { IUseCasesHooks } from '../../../../../../common/connector/IUseCasesHooks';

export type IPropsTodoList = Pick<IUseCasesHooks<ITodoUseCases>, 'useFilterTodoListByStatus' | 'useLoadTodoList'>
