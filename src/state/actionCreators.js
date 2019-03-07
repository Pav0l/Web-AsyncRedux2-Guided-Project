import uuid from 'uuid';
import * as types from './actionTypes';


// create an async action creator login, that takes username and password,
// and hits the login api, and triggers a LOGIN_SUCCESS action with the userToken as payload.

export const login = (username, password) => dispatch => {
  dispatch(spinnerOn());
  fetch(`http://gabe.mockable.io/quotes/login?username=${username}&password=${password}`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: data.userToken });
      dispatch(spinnerOff());
    });
};


export const deleteQuoteAsync = id => dispatch => {
  dispatch(spinnerOn());
  fetch(`http://gabe.mockable.io/quotes/${id}`, { method: 'DELETE' })
    .then(res => res.json())
    .then(data => {
      dispatch(deleteQuote(data.id));
      dispatch(spinnerOff());
    });
};

export const getQuotesAsync = () => dispatch => {
  dispatch(spinnerOn());
  fetch('http://gabe.mockable.io/quotes')
    .then(res => res.json())
    .then(quotes => {
      dispatch({ type: types.ADD_QUOTES, payload: quotes });
      dispatch(spinnerOff());
    });
};

export const addQuoteAsync = quote => dispatch => {
  dispatch(spinnerOn());
  fetch(`http://gabe.mockable.io/quotes`, { method: 'POST', body: JSON.stringify(quote) })
    .then(res => res.json())
    .then(quote => {
      dispatch({ type: types.ADD_QUOTE, payload: quote });
      dispatch(spinnerOff());
    });
};

export function spinnerOn() {
  return {
    type: types.SPINNER_ON,
  };
}

export function spinnerOff() {
  return {
    type: types.SPINNER_OFF,
  };
}

export function deleteQuote(id) {
  return {
    type: types.DELETE_QUOTE,
    payload: id,
  };
}

export function addQuote(author, text) {
  return {
    type: types.ADD_QUOTE,
    payload: {
      id: uuid(),
      author,
      text,
    },
  };
}

export function makeQuoteOfTheDay(id) {
  return {
    type: types.MAKE_QUOTE_OF_THE_DAY,
    payload: id,
  };
}
