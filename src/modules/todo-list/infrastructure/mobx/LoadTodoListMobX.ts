import { decorate, flow, observable } from 'mobx';

import { LoadTodoList } from '../../bll/use-cases/load-todo-list/LoadTodoList';

export class LoadTodoListMobX extends LoadTodoList {
    loadTodoList = () => flow(super.loadTodoListImpl.bind(this))();
}

decorate(LoadTodoListMobX, {
   isLoading: observable,
   error: observable,
});

