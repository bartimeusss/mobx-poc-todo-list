import { FilterTodoListByStatus } from '../../bll/use-cases/filter-todo-list-by-status/FilterTodoListByStatus';
import { action, decorate, observable } from 'mobx';

export class FilterTodoListByStatusMobX extends FilterTodoListByStatus {}

decorate(FilterTodoListByStatusMobX, {
    filter: observable,
    setFilter: action,
});
