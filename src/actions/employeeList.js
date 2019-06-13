import {
  REQUESTED_EMPLOYEE_LIST,
  GET_EMPLOYEE_LIST,
  CLEAR_EMPLOYEE_LIST,
  REQUEST_ERROR_EMPLOYEE_LIST
} from '../constants/actionTypes'
import request from 'superagent'

const { REACT_APP_API_BASE_URL } = process.env

export function getEmployeeList(payload) {
  return { type: GET_EMPLOYEE_LIST, payload }
}

export function clearEmployeeList() {
  return { type: CLEAR_EMPLOYEE_LIST }
}

export function requestErrorEmployeeList(payload) {
  return { type: REQUEST_ERROR_EMPLOYEE_LIST, payload }
}

export function requestEmployeeList() {
  return (dispatch, getState) => {
    dispatch({ type: REQUESTED_EMPLOYEE_LIST })

    const apiURL = `${REACT_APP_API_BASE_URL}/employees`
    return request
      .get(apiURL)
      .then(response => {
        // convert array response to object
        // required in case where response is of type array
        dispatch(
          getEmployeeList({
            data: response.body
          })
        )
      })
      .catch(error => {
        dispatch(
          requestErrorEmployeeList({
            error: true,
            statusCode: error.status,
            statusText: error.body.message
          })
        )
      })
  }
}
