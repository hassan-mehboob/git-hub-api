import {
  USER_REPO_FAIL,
  USER_REPO_REQUEST,
  USER_REPO_SUCCESS,
} from "../constants/userRepoConstants"

export const userRepoReducer = (state = { repo: [] }, action) => {
  switch (action.type) {
    case USER_REPO_REQUEST:
      return { loading: true, repo: [] }
    case USER_REPO_SUCCESS:
      return { loading: false, repo: action.payload }
    case USER_REPO_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
