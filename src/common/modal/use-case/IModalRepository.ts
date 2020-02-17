export type IModalRepository = Readonly<{
    isOpen: boolean;

    setIsOpen(value: boolean): void;
}>;
