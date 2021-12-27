import {
  USER_DETAIL_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
} from "../constants/userDetailConstants"

export const userDetailReducer = (state = { detail: {} }, action) => {
  switch (action.type) {
    case USER_DETAIL_REQUEST:
      return { loading: true, detail: {} }
    case USER_DETAIL_SUCCESS:
      return { loading: false, detail: action.payload }
    case USER_DETAIL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
