import axios from 'axios'
import {browserHistory} from 'react-router';
// ------------------------------------
// Constants
// ------------------------------------

export const GET_ANIMAL = 'GET_ANIMAL'
export const DELETE_ANIMAL = 'DELETE_ANIMAL'
export const UPDATE_ANIMAL = 'UPDATE_ANIMAL'
export const SET_ANIMAL_ID = 'SET_ANIMAL_ID'


// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const setAnimalId = (id) => {
  return {
    type: SET_ANIMAL_ID,
    id: id
  }
}

export const getAnimal = (id) => {
  const request = axios.post('/animal/getone', {
    animalId: id
  })

  return {
    type: GET_ANIMAL,
    payload: request
  }
}

export const deleteAnimal = (id) => {
  const request = axios.post('/animal/delete', {
    animalId: id
  })

  browserHistory.push('/search');

  return {
    type: DELETE_ANIMAL,
    payload: request
  }
}

export const updateAnimal = (animal) => {
  const request = axios.post('/animal/update', {
    ...animal
  })

  return {
    type: UPDATE_ANIMAL,
    payload: request
  }
}


export const actions = {
  getAnimal,
  deleteAnimal,
  setAnimalId
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_ANIMAL]    : (state, action) => ({
    ...state,
    animal: action.payload.data,
  }),
  [SET_ANIMAL_ID]    : (state, action) => ({
    ...state,
    animalId: action.id,
  }),
  [UPDATE_ANIMAL]    : (state, action) => ({
    ...state,
    animal: action.payload.data ? action.payload.data : state.animal ,
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  animal: {
    "imgUrl": "https://image.ibb.co/kua6Zn/2.jpg",
    "birthdate": "2014-07-22T00:00:00.000Z",
    "animalId": 2,
    "weight": 8,
    "animalName": "Abbath",
    "specialNeeds": "diabetic",
    "intakeDate": "2018-02-10T00:00:00.000Z",
    "sex": "f",
    "price": 150
  },
}

export default function animalReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
