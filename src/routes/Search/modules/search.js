import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------

// export const GET_SPECIES = 'GET_SPECIES'
// export const GET_BREEDS = 'GET_BREEDS'

export const QUERY = 'QUERY'
export const GET_ALL = 'GET_ALL'
export const POPULAR = 'POPULAR'
export const UNPOPULAR = 'UNPOPULAR'

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
  const request = axios.post('/animal/popular', {
  })

  return {
    type: POPULARITY,
    payload: request
  }
}

export const popular = () => {
  const request = axios.post('/animal/popular', {
  })

  return {
    type: POPULAR,
    payload: request
  }
}

export const unpopular = () => {
  const request = axios.post('/animal/unpopular', {
  })

  return {
    type: UNPOPULAR,
    payload: request
  }
}

export const actions = {
  query,
  getAll,
  popular,
  unpopular
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
  [POPULAR] : (state, action) => ({
    ...state,
    popularName: action.payload.data ? action.payload.data[0].breed : initialState.popularName,
    popularCount: action.payload.data ? action.payload.data[0].avgApplication : initialState.popularCount,
  }),
  [UNPOPULAR] : (state, action) => ({
    ...state,
    unpopularName: action.payload.data ? action.payload.data[0].breed  : initialState.unpopularName,
    unpopularCount: action.payload.data ? action.payload.data[0].avgApplication : initialState.unpopularCount,
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  results: [],
  popularName: '',
  popularCount: '',
  unpopularName: '',
  unpopularCount: '',
}

export default function searchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
