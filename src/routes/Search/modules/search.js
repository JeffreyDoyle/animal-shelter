import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------

// export const GET_SPECIES = 'GET_SPECIES'
// export const GET_BREEDS = 'GET_BREEDS'

export const QUERY = 'QUERY'
export const GET_ALL = 'GET_ALL'
export const POPULARITY = 'POPULARITY'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

// export const getSpecies = () => {
//   const request = axios.post('/query/getSpecies', {
//   })
//
//   return {
//     type: GET_SPECIES,
//     payload: request
//   }
// }
//
// export const getBreeds = (breed) => {
//   const request = axios.post('/query/getSpecies', {
//     breed: breed
//   })
//
//   return {
//     type: GET_BREEDS,
//     payload: request
//   }
// }

export const getAll = () => {
  const request = axios.post('/animal/getall', {
  })
  return {
    type: GET_ALL,
    payload: request
  }
}

export const query = (queryType) => {
  const request = axios.post('/animal/query', {
    query: queryType
  })

  return {
    type: QUERY,
    payload: request
  }
}

export const popularity = () => {
  const request = axios.post('/animals/popularity', {
  })

  return {
    type: POPULARITY,
    payload: request
  }
}

export const actions = {
  query,
  getAll
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [QUERY] : (state, action) => ({
    ...state,
    results: action.payload.data ? action.payload.data : initialState.results,
  }),
  [GET_ALL] : (state, action) => ({
    ...state,
    results: action.payload.data ? action.payload.data : initialState.results,
  }),
  [POPULARITY] : (state, action) => ({
    ...state,
    popular: action.payload.data ? action.payload.data.popular : initialState.popular,
    popularCount: action.payload.data ? action.payload.data.popularCount : initialState.popularCount,
    unpopular: action.payload.data ? action.payload.data.unpopular : initialState.unpopular,
    unpopularCount: action.payload.data ? action.payload.data.unpopularCount : initialState.unpopularCount,
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  results: [],
  popular: '',
  popularCount: -1,
  unpopular: '',
  unpopularCount: -1,
}

export default function searchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
