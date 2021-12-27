import {
  USER_REPO_REQUEST,
  USER_REPO_SUCCESS,
} from "../constants/userRepoConstants"
import axios from "axios"
export const repoUser = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: USER_REPO_REQUEST })

    const { data } = await axios.get(
      `https://api.github.com/users/${keyword}/repos?per_page=10`
    )
    dispatch({ type: USER_REPO_SUCCESS, payload: data })
  } catch (error) {
    console.log(error)
  }
}
