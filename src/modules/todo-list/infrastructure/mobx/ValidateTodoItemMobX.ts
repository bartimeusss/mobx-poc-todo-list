import { observable } from 'mobx';

import { ValidateTodoItem } from '../../bll/use-cases/validate-todo-item/ValidateTodoItem';
import { ITodoItem } from '../../bll/models/ITodoItem';
import { ITodoItemValidationErrors } from '../../bll/models/ITodoItemValidationErrors';

export class ValidateTodoItemMobX extends ValidateTodoItem {
    validate = (item: ITodoItem): ITodoItemValidationErrors =>
        observable(super.validate(item))
}
