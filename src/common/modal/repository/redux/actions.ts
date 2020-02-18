import { IActionModalInit, IActionSetIsModalOpen, } from './types';
import { MODAL_INIT, SET_IS_MODAL_OPEN, } from './constants';

export const modalInit = (name: string): IActionModalInit => ({
    type: MODAL_INIT,
    payload: { name }
});

export const setIsModalOpen = (name: string, isOpen: boolean): IActionSetIsModalOpen => ({
    type: SET_IS_MODAL_OPEN,
    payload: { name, isOpen }
});

