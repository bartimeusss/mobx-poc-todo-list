import { BaseConnector } from '../BaseConnector';
import { IReduxStore } from '../../../modules/todo-list/infrastructure/redux/IReduxStore';
import { useSelector, Provider } from 'react-redux';
import React from 'react';
import { IUseCasesHooks } from '../IUseCasesHooks';

export abstract class ReduxBaseConnector<T> extends BaseConnector<T> {
    protected constructor(
        hooks: IUseCasesHooks<T>,
        private store: IReduxStore
    ) {
        super(hooks);
    }

    static connectUseCase<T>(useCase: T, ...selectors: (keyof T)[]): T {
        return selectors.reduceRight<T>((acc, curr) => ({
            ...acc,
            [curr]: useSelector(() => useCase[curr])
        }), useCase);
    }

    Provider: React.FC = ({ children }) => (<Provider store={this.store}>{children}</Provider>)
}
