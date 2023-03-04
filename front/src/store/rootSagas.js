import {all} from 'redux-saga/effects';
import userSagas from "./sagas/usersSagas";
import dataSagas from "./sagas/dataSagas";
import historySagas from "./sagas/historySagas";
import history from '../history';

export default function* rootSagas(){
  yield all([
    ...userSagas,
    ...dataSagas,
    ...historySagas(history),
  ]);
}