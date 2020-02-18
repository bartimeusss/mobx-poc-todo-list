import { ITodoItem } from '../../models/ITodoItem';
import { ModalUseCase } from '../../../../common/modal/use-case/ModalUseCase';

export type IAddNewTodoItem = Readonly<{
    isLoading: boolean;
    error: string | undefined;
    modal: ModalUseCase;

    addNewItem(newItem: ITodoItem): void;
}>;
