export type IAsyncOperationRepository = Readonly<{
    isLoading: boolean;
    error: string | undefined;

    startLoading(): void;
    finishLoading(): void;
    failLoading(e: Error): void;
}>;
