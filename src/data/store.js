import initial from './initial';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;