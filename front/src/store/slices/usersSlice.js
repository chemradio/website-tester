import {createSlice} from "@reduxjs/toolkit";

const name = 'users';

export const initialState = {
  user: null,
  registerLoading: false,
  registerError: null,
  loginLoading: false,
  loginError: null,
  FriendLoading: false,
  FriendError: null,
};

const usersSlice = createSlice({
  name,
  initialState,
  reducers: {
    registerRequest(state) {
      state.registerLoading = true;
      state.registerError = null;
    },
    registerSuccess(state, action) {
      state.registerLoading = false;
      state.user = action.payload;
    },
    registerFailure(state, action) {
      state.registerLoading = false;
      state.registerError = action.payload;
    },
    loginUserRequest(state) {
      state.loginLoading = true;
      state.loginError = null;
    },
    loginUserSuccess(state, action) {
      state.loginLoading = false;
      state.user = action.payload;
    },
    loginUserFailure(state, action) {
      state.loginLoading = false;
      state.loginError = action.payload;
    },
    logOutRequest(state) {
      state.user = null;
    },
  }
});

export default usersSlice;















