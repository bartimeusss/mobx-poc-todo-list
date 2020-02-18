import { ModalUseCase } from './use-case/ModalUseCase';
import { ModalMobXRepositoryFactory } from './repository/ModalMobXRepositoryFactory';

ModalUseCase.repositoryFactory = new ModalMobXRepositoryFactory();

export { ModalUseCase };
