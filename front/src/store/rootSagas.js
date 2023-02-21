import {all} from 'redux-saga/effects';
import userSagas from "./sagas/usersSagas";
import dataSagas from "./sagas/dataSagas";

export default function* rootSagas(){
  yield all([
    ...userSagas,
    ...dataSagas,
  ]);
}