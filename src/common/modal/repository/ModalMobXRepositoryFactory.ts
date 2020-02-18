import { IModalRepositoryFactory } from '../use-case/IModalRepositoryFactory';
import { IModalRepository } from '../use-case/IModalRepository';
import { ModalMobXRepository } from './ModalMobXRepository';

export class ModalMobXRepositoryFactory implements IModalRepositoryFactory {
    create = (): IModalRepository => new ModalMobXRepository();
}
