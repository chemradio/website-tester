
import usersSlice from "../slices/usersSlice";

export const {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  logOutRequest,
} = usersSlice.actions;