import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------

export const GET_ACCOUNT = 'GET_ACCOUNT'
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const getAccount = (phone, type) => {
  const request = axios.post('/profile', {
    phone: phone,
    userType: type
  })

  return {
    type: GET_ACCOUNT,
    payload: request
  }
}

export const updateAccount = (profile) => {
  const request = axios.post('/profile/update', {
    ...profile
  })

  return {
    type: UPDATE_ACCOUNT,
    payload: request
  }
}


export const actions = {
  getAccount,
  updateAccount,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_ACCOUNT]    : (state, action) => ({
    ...state,
    account: action.payload.data
  }),
  [UPDATE_ACCOUNT] : (state, action) => ({
    ...state,
    account: action.payload.data,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  account: null,
}

export default function searchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
