import {put, takeEvery} from "redux-saga/effects";
import axiosApi from "../../axiosApi";
import Cookies from 'js-cookie'
import {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginUserFailure,
  loginUserSuccess,
  loginUserRequest,
  logOutRequest,
} from "../actions/usersActions";
import {UseHistoryPath} from "../../hooks/UseHistory";

export function* registerUserSaga({payload: userData}) {
  try {
    const response = yield axiosApi.post('/users', userData)
    yield put(registerSuccess(response.data))
    UseHistoryPath('/')
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(registerFailure(e.response.data))
    }
  }
}

export function* loginUserSaga({ payload }) {
  try {
    let response
    if (!payload) {
      response = yield axiosApi.post(`/users/sessions`)
    }
    if (payload) {
      Cookies.remove('jwt')
      response = yield axiosApi.post(`/users/sessions`, payload.userData)
      UseHistoryPath('/')
    }
    yield put(loginUserSuccess(response.data))

  } catch (e) {
    if (e.response && e.response.data) {
      yield put(loginUserFailure(e.response.data))
    }
  }
}

export function* logoutUserSaga() {
  try {
    yield axiosApi.delete('users/sessions')

    yield Cookies.remove('jwt')
    UseHistoryPath('/login')
  } catch (e) {
    console.log(e)
  }
}


const userSagas = [
  takeEvery(registerRequest, registerUserSaga),
  takeEvery(loginUserRequest, loginUserSaga),
  takeEvery(logOutRequest, logoutUserSaga),
];

export default userSagas;