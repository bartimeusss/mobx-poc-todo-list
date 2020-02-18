import React, { Context, createContext, useContext } from 'react';
import { observer } from 'mobx-react';

import { BaseConnector } from '../BaseConnector';
import { IUseCasesHooks } from '../IUseCasesHooks';

export abstract class MobXBaseConnector<T> extends BaseConnector<T> {
    protected constructor(
        private useCases: T
    ) {
        super(MobXBaseConnector.getHooks(useCases, MobXBaseConnector.setContext(useCases)));
    }

    private static context: Context<any>;

    private static setContext<T>(useCases: T): Context<T> {
        MobXBaseConnector.context = createContext(useCases);

        return MobXBaseConnector.context;
    }

    private static getHooks<T>(useCases: T, context: Context<T>): IUseCasesHooks<T> {
        const keys = Object.keys(useCases) as (keyof T)[];

        return keys.reduceRight((acc, curr) => ({
            ...acc,
            [curr]: () => useContext(context)[curr],
        }), {}) as IUseCasesHooks<T>;
    };

    Provider: React.FC = ({ children }) =>
        (<MobXBaseConnector.context.Provider value={this.useCases}>{children}</MobXBaseConnector.context.Provider>);

    connect<TProps extends Partial<IUseCasesHooks<T>> | {}>(Component: React.FC<TProps>, ...useCases: (keyof T)[]): React.FC<Omit<TProps, keyof IUseCasesHooks<T>>> {
        return super.connect(observer(Component), ...useCases);
    }
}
