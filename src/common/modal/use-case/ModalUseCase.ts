import { IModalRepository } from './IModalRepository';
import { IModalRepositoryFactory } from './IModalRepositoryFactory';

export class ModalUseCase {
    private repository: IModalRepository = ModalUseCase.repositoryFactory.create();

    static repositoryFactory: IModalRepositoryFactory;

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
