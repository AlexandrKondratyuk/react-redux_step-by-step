import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './redux/rootReducer'

const loggerMiddleware = store => next => action => {
    const result = next(action)
    console.log('Middleware ', store.getState());

    return result
}

const store = createStore(rootReducer, applyMiddleware(
    loggerMiddleware,
    reduxThunk
));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
