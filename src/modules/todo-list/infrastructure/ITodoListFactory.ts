import { ITodoListConnector } from '../adapters/view/connect/ITodoListConnector';

export interface ITodoListFactory {
    create(): ITodoListConnector;
}
