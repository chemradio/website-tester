import {put, takeEvery} from "redux-saga/effects";
import axiosApi from "../../axiosApi";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginUserFailure,
  loginUserSuccess,
  loginUserRequest,
  logOutRequest,
} from "../actions/usersActions";
import {addNotification} from "../actions/notifierActions";
import {historyPush} from "../actions/historyActions";

export function* registerUserSaga({payload: userData}) {
  try {
    const response = yield axiosApi.post('/users', userData);

    yield put(registerSuccess(response.data));
    yield put(addNotification('Register successful!', 'success'));
    yield put(historyPush('/'))

  }
  catch (e) {
    if(e.response && e.response.data ){
      yield put(registerFailure(e.response.data));
      yield put(historyPush('/register'))
    }
  }
}

export function* loginUserSaga({payload: userData}) {
  try {
    const response = yield axiosApi.post('/users/sessions', userData);
      yield put(loginUserSuccess(response.data));
      yield put(addNotification('Register successful!', 'success'));
      yield put(historyPush('/'));
  }
  catch (e) {
    if(e.response && e.response.data ){
      yield put(loginUserFailure(e.response.data));
      yield put(historyPush('/login'))
    }
  }
}

export function* logoutUserSaga () {
    try {
      yield axiosApi.delete('/users/sessions');
    } catch (e) {
      yield put(addNotification('Logout not successful!', 'failure'));
    }
}

const userSagas = [
  takeEvery(registerRequest, registerUserSaga),
  takeEvery(loginUserRequest, loginUserSaga),
  takeEvery(logOutRequest, logoutUserSaga),
];

export default userSagas;