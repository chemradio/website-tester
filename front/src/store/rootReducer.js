import { combineReducers } from 'redux'
import usersSlice from './slices/usersSlice'
import dataSlice from "./slices/dataSlice";

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  data: dataSlice.reducer,
})

export default rootReducer
