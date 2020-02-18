import { combineReducers } from 'redux';
import { todoEntityReducer } from '../../../../entities/todo/repository/redux/todoEntityReducer';
import { todoStatusFilterReducer } from '../../adapters/repository/todo-status-filter/redux/todoStatusFilterReducer';
import { asyncOperationsReducer } from '../../../../common/async-operation/repository/redux/asyncOperationsReducer';
import { modalReducer } from '../../../../common/modal/repository/redux/modalReducer';

export const rootReducer = combineReducers({
    entities: combineReducers({
        todo: todoEntityReducer,
    }),
    modules: combineReducers({
        todoList: combineReducers({
            todoStatusFilter: todoStatusFilterReducer,
        })
    }),
    commons: combineReducers({
        asyncOperations: asyncOperationsReducer,
        modals: modalReducer,
    })
});
