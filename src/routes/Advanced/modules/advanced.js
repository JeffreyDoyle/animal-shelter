import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------

export const GET_ALL_APPLICATIONS = 'GET_ALL_APPLICATIONS'
export const GET_OVERSEEN_APPLICATIONS = 'GET_OVERSEEN_APPLICATIONS'
export const GET_APPLICANT_APPLICATIONS = 'GET_APPLICANT_APPLICATIONS'

export const GET_LOCATIONS_WITH_ALL_ANIMALS = 'GET_LOCATIONS_WITH_ALL_ANIMALS'
export const GET_LOCATIONS_WITH_CITY = 'GET_LOCATIONS_WITH_CITY'
export const GET_LOCATIONS_WITH_ALL_BREEDS = 'GET_LOCATIONS_WITH_ALL_BREEDS'
export const RESEED_DB = 'RESEED_DB'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const getLocationsWithAllBreeds = () => {
  const request = axios.post('/locations/allBreeds', {
  })

  return {
    type: GET_LOCATIONS_WITH_ALL_BREEDS,
    payload: request
  }
}

export const getLocationsWithAllAnimals = () => {
  const request = axios.post('/locations/allAnimals', {
  })

  return {
    type: GET_LOCATIONS_WITH_ALL_ANIMALS,
    payload: request
  }
}

export const getLocationsWithCity = (city) => {
  const request = axios.post('/locations/query', {
    input: city
  })

  return {
    type: GET_LOCATIONS_WITH_CITY,
    payload: request
  }
}

export const reseedDB = () => {
  const request = axios.post('/reseed', {
  })

  return {
    type: RESEED_DB,
    payload: request
  }
}

export const actions = {
  getLocationsWithAllBreeds,
  getLocationsWithAllAnimals,
  getLocationsWithCity,
  reseedDB
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_LOCATIONS_WITH_ALL_ANIMALS]    : (state, action) => ({
    ...state,
    locationsWithAllAnimals: action.payload.data,
  }),
  [GET_LOCATIONS_WITH_CITY] : (state, action) => ({
    ...state,
    locationsWithCity: action.payload.data,
  }),
  [GET_LOCATIONS_WITH_ALL_BREEDS] : (state, action) => ({
    ...state,
    locationsWithAllBreeds: action.payload.data,
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  locationsWithAllAnimals: [],
  locationsWithAllBreeds: [],
  locationsWithCity: []
}

export default function searchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
