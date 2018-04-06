import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
    reducer, /* preloadedState, */
    composeEnhancers(
        applyMiddleware(thunkMiddleware)
    ));// toDo understand better

export default store;