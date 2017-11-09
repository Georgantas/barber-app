
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import reducers from './index';
import { createLogger } from 'redux-logger';

export default configurestore = () => {
    const NODE_ENV = 'production';

    const middlewares = [thunk];

    if(NODE_ENV = !== 'production'){
        middlewares.push(createLogger());
    }

    return createStore(reducers, {}, applyMiddleware(...middlewares));
}
