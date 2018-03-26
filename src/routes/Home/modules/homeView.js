import axios from 'axios'
import {browserHistory} from 'react-router';

// ------------------------------------
// Constants
// ------------------------------------

export const LOGIN = 'LOGIN'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const login = (emailId, userType) => (dispatch) => {
  dispatch(_login(emailId, userType)).then(
    response => {
      console.log('email: ' + emailId + ", userType: " + userType);
      console.log(response);
      if (response.payload.data) {
        browserHistory.push('/search');
      } else {
        browserHistory.push('/search');
      }
    }
  );
};

export const _login = (emailId, userType) => {
  const request = axios.post('/profile', {
    emailId: emailId,
    userType: userType
  })

  console.log(emailId, userType);

  return {
    type: LOGIN,
    payload: request
  }
}

export const actions = {
  _login
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGIN]    : (state, action) => ({
    ...state,
    email: action.payload.data ? action.payload.data.email : "",
    userType: action.payload.data ? action.payload.data.userType : "",
    phone: action.payload.data ? action.payload.data.phone : "",
    name: action.payload.data ? action.payload.data.name : "",
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  email: '',
  userType: '',
  phone: '',
  name: ''
}

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
