import { IValidateTodoItem } from './IValidateTodoItem';
import { ITodoItem } from '../../models/ITodoItem';
import { ITodoItemValidationErrors } from '../../models/ITodoItemValidationErrors';

export abstract class ValidateTodoItem implements IValidateTodoItem {
    validate(item: ITodoItem): ITodoItemValidationErrors {
        return {
            id: undefined,
            name: undefined,
            description: undefined,
            status: undefined,
        };
    }
}
