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
import {historyPush} from "../actions/historyActions";

export function* registerUserSaga({payload: userData}) {
  try {
    const response = yield axiosApi.post('/users', userData)
    yield put(registerSuccess(response.data))
    yield put(historyPush('/new'));
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
      yield put(historyPush('/new'));
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
    yield put(historyPush('/login'));
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