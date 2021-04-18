import * as actionTypes from '../actionTypes/carListActionTypes'

export const carListReducer = (state = { cars: [] }, action) => {
  switch (action.type) {
    case actionTypes.CAR_LIST_REQUEST:
      return { loading: true, cars: [] }
    case actionTypes.CAR_LIST_SUCCESS:
      return {
        loading: false,
        cars: action.payload.cars,
      }
    case actionTypes.CAR_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const carCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CAR_CREATE_REQUEST:
      return { loading: true }
    case actionTypes.CAR_CREATE_SUCCESS:
      return { loading: false, success: true, car: action.payload }
    case actionTypes.CAR_CREATE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
