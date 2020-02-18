import {
    MODAL_INIT,
    SET_IS_MODAL_OPEN
} from './constants';

export interface IActionSetIsModalOpen {
    type: typeof SET_IS_MODAL_OPEN,
    payload: {
        name: string;
        isOpen: boolean;
    }
}

export interface IActionModalInit {
    type: typeof MODAL_INIT,
    payload: {
        name: string;
    }
}

export type IStoreModals = Record<string, boolean>;
