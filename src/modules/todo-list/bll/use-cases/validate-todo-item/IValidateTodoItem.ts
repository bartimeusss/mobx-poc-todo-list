import { ITodoItem } from '../../models/ITodoItem';
import { ITodoItemValidationErrors } from '../../models/ITodoItemValidationErrors';

export interface IValidateTodoItem {
    validate(item: ITodoItem): ITodoItemValidationErrors;
}
