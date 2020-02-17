import { action, observable } from 'mobx';

import { IModalRepository } from '../use-case/IModalRepository';

export class ModalMobXRepository implements IModalRepository {
    @observable
    isOpen = false;

    @action
    setIsOpen = (value: boolean): void => {
        this.isOpen = value
    };
}
