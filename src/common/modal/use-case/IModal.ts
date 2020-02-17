export type IModal = Readonly<{
    isOpen: boolean;

    open(): void;
    close(): void;
}>;
