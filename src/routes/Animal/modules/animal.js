import axios from 'axios'
import {browserHistory} from 'react-router';
// ------------------------------------
// Constants
// ------------------------------------

export const GET_ANIMAL = 'GET_ANIMAL'
export const DELETE_ANIMAL = 'DELETE_ANIMAL'


// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const getAnimal = (id) => {
  const request = axios.post('/animal/getAnimal', {
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
  const request = axios.post('/animal/delete', {
    animalId: animal.animalId,
    imgUrl: animal.imgUrl,
    birthdate: animal.birthdate,
    weight: animal.weight,
    animalName: animal.animalName,
    specialNeeds: animal.specialNeeds,
    intakeDate: animal.intakeDate,
    sex: animal.sex,
  })

  browserHistory.push('/search');

  return {
    type: DELETE_ANIMAL,
    payload: request
  }
}


export const actions = {
  getAnimal,
  deleteAnimal
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
