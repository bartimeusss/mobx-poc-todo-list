import { ITodoUseCases } from '../../connect/ITodoUseCases';
import { IUseCasesHooks } from '../../../../../../common/connector/IUseCasesHooks';

export type IPropsTodoListFilter = Pick<IUseCasesHooks<ITodoUseCases>, 'useFilterTodoListByStatus'>
