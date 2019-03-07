import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Container from './components/Container';
import { quotes, quoteOfTheDay, spinner } from './state/reducers';
import * as types from './state/actionTypes';

// create custom middleware to save 'userToken' to local storage on LOGIN_SUCCESS
// makes sence to define it here (or in external file) since you need to plug this custom middleware
// into the createStores applyMiddleware method
const customMiddlewareToSaveUserToken = store => next => action => {
  if (action.type === types.LOGIN_SUCCESS) {
    localStorage.setItem('userToken', action.payload);
  }
  // don't forget to call next!
  next(action);
};


const rootReducer = combineReducers({
  quotes,
  quoteOfTheDay,
  spinner,
});

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk, customMiddlewareToSaveUserToken),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector('#target'),
);
