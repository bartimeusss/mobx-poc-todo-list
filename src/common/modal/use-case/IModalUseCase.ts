export interface IModalUseCase {
    isOpen: boolean;

    open(): void;
    close(): void;
}
