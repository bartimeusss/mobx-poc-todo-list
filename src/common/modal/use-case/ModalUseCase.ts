import { IModalRepository } from './IModalRepository';
import { IModalUseCase } from './IModalUseCase';

export class ModalUseCase implements IModalUseCase {
    private repository: IModalRepository = ModalUseCase.repositoryFactory();

    static repositoryFactory: () => IModalRepository;

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
