import { ModalMobXRepository } from './repository/ModalMobXRepository';
import { Modal } from './use-case/Modal';
import { CommonInstanceManager } from '../CommonInstanceManager';

const createModal = () => new Modal(new ModalMobXRepository());

const modalsManager = new CommonInstanceManager(createModal);

export const getModal = (name: string) =>
    modalsManager.getInstance(name);
