import React from 'react';
import { pick } from 'lodash';
import { IUseCasesHooks } from './IUseCasesHooks';

export abstract class BaseConnector<TUseCases> {
    abstract Provider: React.FC;

    protected constructor(
        private hooks: IUseCasesHooks<TUseCases>
    ) {}

    connect<T extends Partial<IUseCasesHooks<TUseCases>> | {}>(Component: React.FC<T>, ...useCases: (keyof TUseCases)[]): React.FC<Omit<T, keyof IUseCasesHooks<TUseCases>>> {
        const props = pick(this.hooks, ...useCases) as T;

        return (ownProps) => <Component {...props} {...ownProps}/>;
    }
}
