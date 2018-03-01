import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------

export const GET_PROFILE = 'GET_PROFILE'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const getProfile = (emailId, type) => {
  const request = axios.post('/profile', {
    emailId: emailId,
    type: type
  })

  return {
    type: GET_PROFILE,
    payload: request
  }
}

export const updateProfile = (profile) => {
  const request = axios.post('/profile/update', {
    ...profile
  })

  return {
    type: UPDATE_PROFILE,
    payload: request
  }
}


export const actions = {
  getProfile,
  updateProfile
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_PROFILE]    : (state, action) => ({
    ...state,
    profile: action.payload.data
  }),
  [UPDATE_PROFILE] : (state, action) => ({
    ...state,
    profile: action.payload.data,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  profile: null,
}

export default function searchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
