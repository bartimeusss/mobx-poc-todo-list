export type ILoadTodoList = Readonly<{
    isLoading: boolean;
    error: string | undefined;

    loadTodoList(): void;
}>;
