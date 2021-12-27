import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { userDetailReducer } from "./reducers/userDetailReducer"
import { userRepoReducer } from "./reducers/userRepoReducer"

const reducer = combineReducers({
  userDetail: userDetailReducer,
  userRepo: userRepoReducer,
})
const initialState = {}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store
