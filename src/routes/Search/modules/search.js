import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------

export const GET_SPECIES = 'GET_SPECIES'
export const GET_BREEDS = 'GET_BREEDS'

export const QUERY = 'QUERY'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const getSpecies = () => {
  const request = axios.post('/query/getSpecies', {
  })

  return {
    type: GET_SPECIES,
    payload: request
  }
}

export const getBreeds = (breed) => {
  const request = axios.post('/query/getSpecies', {
    breed: breed
  })

  return {
    type: GET_BREEDS,
    payload: request
  }
}

export const query = () => {

}

export const actions = {
  query,
  getSpecies,
  getBreeds,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_SPECIES]    : (state, action) => ({
    ...state,
    species: action.payload.data,
  }),
  [GET_BREEDS] : (state, action) => ({
    ...state,
    breeds: action.payload.data,
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  breeds: [],
  species: [],
  results: []
}

export default function searchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
