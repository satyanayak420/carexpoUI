import axios from 'axios'

import * as actionTypes from '../actionTypes/carListActionTypes'

export const listCars = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.CAR_LIST_REQUEST })
    const { data } = await axios.get(`/api/cars?keyword=${keyword}`)
    dispatch({
      type: actionTypes.CAR_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.CAR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createCar = (car) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.CAR_CREATE_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/cars/`, car, config)

    dispatch({ type: actionTypes.CAR_CREATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: actionTypes.CAR_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
