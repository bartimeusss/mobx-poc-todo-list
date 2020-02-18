import { IActionModalInit, IActionSetIsModalOpen, IStoreModals } from './types';
import { MODAL_INIT, SET_IS_MODAL_OPEN, } from './constants';

const initialState = {};

export const modalReducer = (
    state: IStoreModals = initialState,
    action: IActionModalInit | IActionSetIsModalOpen
): IStoreModals => {
    switch (action.type) {
        case MODAL_INIT:
            return {
                ...state,
                [action.payload.name]: false
            };

        case SET_IS_MODAL_OPEN:
            return {
                ...state,
                [action.payload.name]: action.payload.isOpen
            };

        default:
            return state;
    }
};
