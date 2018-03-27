import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------

export const GET_ALL_APPLICATIONS = 'GET_ALL_APPLICATIONS'
export const GET_OVERSEEN_APPLICATIONS = 'GET_OVERSEEN_APPLICATIONS'
export const GET_APPLICANT_APPLICATIONS = 'GET_APPLICANT_APPLICATIONS'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const getAllApplications = () => {
  const request = axios.post('/application/getAll', {
  })

  return {
    type: GET_ALL_APPLICATIONS,
    payload: request
  }
}

export const getOverseenApplications = (phone) => {
  const request = axios.post('/application/oversee', {
    phone: phone
  })

  return {
    type: GET_OVERSEEN_APPLICATIONS,
    payload: request
  }
}

export const getApplicantApplications = (phone) => {
  const request = axios.post('/application/applicant', {
    phone: phone
  })

  return {
    type: GET_APPLICANT_APPLICATIONS,
    payload: request
  }
}

export const actions = {
  getAllApplications,
  getApplicantApplications,
  getOverseenApplications,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_ALL_APPLICATIONS]    : (state, action) => ({
    ...state,
    applications: action.payload.data,
  }),
  [GET_OVERSEEN_APPLICATIONS] : (state, action) => ({
    ...state,
    applications: action.payload.data,
  }),
  [GET_APPLICANT_APPLICATIONS] : (state, action) => ({
    ...state,
    applications: action.payload.data,
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  applications: [],
}

export default function searchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
