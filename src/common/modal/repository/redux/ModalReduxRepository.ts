import { IReduxStore } from '../../../../modules/todo-list/infrastructure/redux/IReduxStore';
import {
    setIsModalOpen,
    modalInit,
} from './actions';
import { IModalRepository } from '../../use-case/IModalRepository';

export class ModalReduxRepository implements IModalRepository {
    private readonly name: string;

    constructor(
        private store: IReduxStore
    ) {
        this.name = 'modal__' + Math.random().toString();
        this.store.dispatch(modalInit(this.name));
    }

    get isOpen(): boolean {
        return this.store.getState().commons.modals[this.name];
    }

    setIsOpen = (value: boolean): void => {
        this.store.dispatch(setIsModalOpen(this.name, value));
    };
}
