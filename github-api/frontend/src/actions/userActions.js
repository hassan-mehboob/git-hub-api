import axios from "axios"
import {
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
} from "../constants/userDetailConstants"

export const detailUser = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAIL_REQUEST })

    const { data } = await axios.get(`https://api.github.com/users/${keyword}`)
    dispatch({ type: USER_DETAIL_SUCCESS, payload: data })
  } catch (error) {
    console.log(error)
  }
}

