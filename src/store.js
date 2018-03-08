// Modules
import { createStore as reactCreateStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducer
import reducers from './reducers';

const createStore = () => reactCreateStore(reducers, applyMiddleware(thunk))
export default createStore;
