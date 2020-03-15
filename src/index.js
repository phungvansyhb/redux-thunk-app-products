import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware ,compose} from 'redux'
import { Provider } from 'react-redux'
import allReducer from './Reducers'
import thunk from 'redux-thunk';

// var store = createStore( 
//     allReducer,applyMiddleware(thunk)
//     )

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);
const store = createStore(allReducer, enhancer);

ReactDOM.render(<Provider store ={store}> <App /></Provider>,  document.getElementById('root'));
serviceWorker.unregister();
