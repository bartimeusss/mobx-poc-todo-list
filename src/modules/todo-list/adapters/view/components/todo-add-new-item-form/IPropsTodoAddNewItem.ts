import { ITodoUseCases } from '../../connect/ITodoUseCases';
import { IUseCasesHooks } from '../../../../../../common/connector/IUseCasesHooks';

export type IPropsTodoAddNewItem = Pick<IUseCasesHooks<ITodoUseCases>, 'useAddNewTodoItem'>
