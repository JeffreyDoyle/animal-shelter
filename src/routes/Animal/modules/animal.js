import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------

export const GET_ANIMAL = 'GET_ANIMAL'


// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const getAnimal = (id) => {
  const request = axios.post('/animal/getAnimal', {
    id: id
  })

  return {
    type: GET_ANIMAL,
    payload: request
  }
}


export const actions = {
  getAnimal,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_ANIMAL]    : (state, action) => ({
    ...state,
    animal: action.payload.data,
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  animal: null,
}

export default function animalReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
