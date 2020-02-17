import { IModal } from './IModal';
import { IModalRepository } from './IModalRepository';

export class Modal implements IModal {
    constructor(
        private repository: IModalRepository
    ) {
    }

    get isOpen(): boolean {
        return this.repository.isOpen;
    }

    close = () => {
        this.repository.setIsOpen(false);
    };

    open = () => {
        this.repository.setIsOpen(true);
    }
}
