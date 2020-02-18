import { ITodoUseCases } from '../ITodoUseCases';
import { MobXBaseConnector } from '../../../../../../common/connector/mobx/MobXBaseConnector';

export class TodoListMobXConnector extends MobXBaseConnector<ITodoUseCases> {
    constructor(
        useCases: ITodoUseCases
    ) {
        super(useCases);
    }
}

