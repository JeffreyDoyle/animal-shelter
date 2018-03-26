import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------

// export const GET_SPECIES = 'GET_SPECIES'
// export const GET_BREEDS = 'GET_BREEDS'

export const QUERY = 'QUERY'
export const GET_ALL = 'GET_ALL'

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
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  results: [
    {
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
    {
      "imgUrl": "https://image.ibb.co/cQ9YEn/7.jpg",
      "birthdate": "2014-08-01T00:00:00.000Z",
      "animalId": 7,
      "weight": 9,
      "animalName": "Sloth",
      "specialNeeds": "none",
      "intakeDate": "2016-01-01T00:00:00.000Z",
      "sex": "m",
      "price": 150
    },
    {
      "imgUrl": "https://image.ibb.co/hADJEn/13.jpg",
      "birthdate": "2017-08-05T00:00:00.000Z",
      "animalId": 13,
      "weight": 10,
      "animalName": "Loafy",
      "specialNeeds": "none",
      "intakeDate": "2018-01-14T00:00:00.000Z",
      "sex": "f",
      "price": 150
    },
    {
      "imgUrl": "https://image.ibb.co/eBuVS7/14.jpg",
      "birthdate": "2018-01-22T00:00:00.000Z",
      "animalId": 14,
      "weight": 9,
      "animalName": "Furball",
      "specialNeeds": "none",
      "intakeDate": "2017-12-27T00:00:00.000Z",
      "sex": "m",
      "price": 150
    },
    {
      "imgUrl": "https://image.ibb.co/iRkC77/1.jpg",
      "birthdate": "2010-01-14T00:00:00.000Z",
      "animalId": 1,
      "weight": 11,
      "animalName": "Fluffy",
      "specialNeeds": "none",
      "intakeDate": "2018-01-09T00:00:00.000Z",
      "sex": "m",
      "price": 100
    },
    {
      "imgUrl": "https://image.ibb.co/bv6Kn7/6.jpg",
      "birthdate": "2013-02-17T00:00:00.000Z",
      "animalId": 6,
      "weight": 9,
      "animalName": "Euronymous",
      "specialNeeds": "no kids",
      "intakeDate": "2018-03-10T00:00:00.000Z",
      "sex": "m",
      "price": 100
    },
    {
      "imgUrl": "https://image.ibb.co/hqwifS/11.jpg",
      "birthdate": "2016-09-15T00:00:00.000Z",
      "animalId": 11,
      "weight": 8,
      "animalName": "Fenriz",
      "specialNeeds": "none",
      "intakeDate": "2018-03-24T00:00:00.000Z",
      "sex": "m",
      "price": 100
    },
    {
      "imgUrl": "https://image.ibb.co/gtz3fS/12.jpg",
      "birthdate": "2015-12-03T00:00:00.000Z",
      "animalId": 12,
      "weight": 7,
      "animalName": "Erik",
      "specialNeeds": "none",
      "intakeDate": "2018-03-23T00:00:00.000Z",
      "sex": "m",
      "price": 100
    },
    {
      "imgUrl": "https://preview.ibb.co/mJ9B0S/3.jpg",
      "birthdate": "2015-02-11T00:00:00.000Z",
      "animalId": 3,
      "weight": 20,
      "animalName": "Big Boned",
      "specialNeeds": "overweight",
      "intakeDate": "2017-12-20T00:00:00.000Z",
      "sex": "m",
      "price": 200
    },
    {
      "imgUrl": "https://image.ibb.co/hNqUn7/8.jpg",
      "birthdate": "2016-09-11T00:00:00.000Z",
      "animalId": 8,
      "weight": 10,
      "animalName": "Sticky",
      "specialNeeds": "no cats",
      "intakeDate": "2017-11-11T00:00:00.000Z",
      "sex": "f",
      "price": 200
    },
    {
      "imgUrl": "https://image.ibb.co/dzh3En/4.jpg",
      "birthdate": "2016-05-04T00:00:00.000Z",
      "animalId": 4,
      "weight": 9,
      "animalName": "Pinky",
      "specialNeeds": "none",
      "intakeDate": "2018-01-10T00:00:00.000Z",
      "sex": "m",
      "price": 100
    },
    {
      "imgUrl": "https://preview.ibb.co/kbxELS/9.jpg",
      "birthdate": "2010-06-06T00:00:00.000Z",
      "animalId": 9,
      "weight": 8,
      "animalName": "Teacup",
      "specialNeeds": "none",
      "intakeDate": "2017-12-24T00:00:00.000Z",
      "sex": "m",
      "price": 100
    },
    {
      "imgUrl": "https://image.ibb.co/ctMkS7/5.jpg",
      "birthdate": "2007-09-11T00:00:00.000Z",
      "animalId": 5,
      "weight": 4,
      "animalName": "Eeyore",
      "specialNeeds": "none",
      "intakeDate": "2017-12-01T00:00:00.000Z",
      "sex": "f",
      "price": 300
    },
    {
      "imgUrl": "https://image.ibb.co/fvYAun/10.jpg",
      "birthdate": "2006-06-06T00:00:00.000Z",
      "animalId": 10,
      "weight": 6,
      "animalName": "Ebony",
      "specialNeeds": "none",
      "intakeDate": "2017-12-13T00:00:00.000Z",
      "sex": "m",
      "price": 300
    },
    {
      "imgUrl": "https://image.ibb.co/d4ALS7/15.jpg",
      "birthdate": "2018-03-14T00:00:00.000Z",
      "animalId": 15,
      "weight": 1,
      "animalName": "Hammy",
      "specialNeeds": "none",
      "intakeDate": "2018-03-25T00:00:00.000Z",
      "sex": "m",
      "price": 10
    }
  ]
}

export default function searchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
