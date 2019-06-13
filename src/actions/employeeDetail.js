import {
  REQUESTED_EMPLOYEE_DETAIL,
  GET_EMPLOYEE_DETAIL,
  CLEAR_EMPLOYEE_DETAIL,
  REQUEST_ERROR_EMPLOYEE_DETAIL
} from '../constants/actionTypes'
import request from 'superagent'

const { REACT_APP_API_BASE_URL } = process.env

export function getEmployeeDetail(payload) {
  return { type: GET_EMPLOYEE_DETAIL, payload }
}

export function clearEmployeeDetail() {
  return { type: CLEAR_EMPLOYEE_DETAIL }
}

export function requestErrorEmployeeDetail(payload) {
  return { type: REQUEST_ERROR_EMPLOYEE_DETAIL, payload }
}

export function requestEmployeeDetail(employeeId) {
  return (dispatch, getState) => {
    dispatch({ type: REQUESTED_EMPLOYEE_DETAIL })

    const apiURL = `${REACT_APP_API_BASE_URL}/employee/${employeeId}`
    return request
      .get(apiURL)
      .then(response => {
        dispatch(
          getEmployeeDetail({
            data: response.body
          })
        )
      })
      .catch(error => {
        dispatch(
          requestErrorEmployeeDetail({
            error: true,
            statusCode: error.status,
            statusText: error.body.message
          })
        )
      })
  }
}
