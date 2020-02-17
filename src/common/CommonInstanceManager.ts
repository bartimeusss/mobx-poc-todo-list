export class CommonInstanceManager<T> {
    private instances: Record<string, T> = {};

    constructor(
        private instanceCreator: () => T
    ) {}

    getInstance = (name: string): T => {
        if (!this.instances[name]) {
            this.instances[name] = this.instanceCreator();
        }

        return this.instances[name];
    }
}
