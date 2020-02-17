import { AsyncOperationMobXRepository } from './repository/AsyncOperationMobXRepository';
import { AsyncOperation } from './use-case/AsyncOperation';
import { CommonInstanceManager } from '../CommonInstanceManager';

const createAsyncOperation = () => new AsyncOperation(new AsyncOperationMobXRepository());

const asyncOperationsManager = new CommonInstanceManager(createAsyncOperation);

export const getAsyncOperation = (name: string) =>
    asyncOperationsManager.getInstance(name);
