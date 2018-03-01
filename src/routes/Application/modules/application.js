import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------

export const GET_APPLICATION = 'GET_APPLICATION'
export const UPDATE_APPLICATION = 'UPDATE_APPLICATION'
export const CREATE_APPLICATION = 'CREATE_APPLICATION'
export const DELETE_APPLICATION = 'DELETE_APPLICATION'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const getApplication = (applicationID) => {
  const request = axios.post('/application/getone', {
    applicationID: applicationID
  })

  return {
    type: GET_APPLICATION,
    payload: request
  }
}

export const updateApplication = (application) => {
  const request = axios.post('/application/update', {
    ...application
  })

  return {
    type: UPDATE_APPLICATION,
    payload: request
  }
}

export const createApplication = (application) => {
  const request = axios.post('/application/create', {
    ...application
  })

  return {
    type: CREATE_APPLICATION,
    payload: request
  }
}

export const deleteApplication = (applicationId) => {
  const request = axios.post('/application/delete', {
    applicationID: applicationId
  })

  return {
    type: DELETE_APPLICATION,
    payload: request
  }
}

export const actions = {
  getApplication,
  updateApplication,
  createApplication,
  deleteApplication,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_APPLICATION]    : (state, action) => ({
    ...state,
    application: action.payload.data
  }),
  [DELETE_APPLICATION] : (state, action) => ({
    ...state,
    application: action.payload.data,
  }),
  [UPDATE_APPLICATION] : (state, action) => ({
    ...state,
    application: action.payload.data,
  }),
  [CREATE_APPLICATION] : (state, action) => ({
    ...state,
    application: action.payload.data,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  application: null,
}

export default function searchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
