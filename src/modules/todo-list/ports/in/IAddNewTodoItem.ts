import { ITodoItem } from '../../models/ITodoItem';
import { ModalUseCase } from '../../../../common/modal/use-case/ModalUseCase';
import { IModalUseCase } from '../../../../common/modal/use-case/IModalUseCase';

export type IAddNewTodoItem = Readonly<{
    isLoading: boolean;
    error: string | undefined;
    modal: IModalUseCase;

    addNewItem(newItem: ITodoItem): void;
}>;
