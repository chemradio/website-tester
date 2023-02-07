import {put, takeEvery} from "redux-saga/effects";
import axiosApi from "../../axiosApi";
import {
    createDataFailure,
    createDataRequest,
    createDataSuccess,
    getByIdDataFailure,
    getByIdDataRequest,
    getByIdDataSuccess,
    getDataFailure,
    getDataRequest,
    getDataSuccess
} from "../actions/dataActions";

export function* getDataSagas() {
    try {
        const response = yield axiosApi('/orders/')
        yield put(getDataSuccess(response.data))
    } catch (e) {
        yield put(getDataFailure(e))
    }
}

export function* getByIdDataSagas({ payload: id }) {
    try {
        const response = yield axiosApi(`/orders/${id}`)
        yield put(getByIdDataSuccess(response.data))
    } catch (e) {
        yield put(getByIdDataFailure(e))
    }
}

export function* createDataSaga({payload: data}) {
    try {
        const response = yield axiosApi.post('/orders/add_order_web', data);
        yield put(createDataSuccess(response.data));
    }
    catch (e) {
        if(e.response && e.response.data ){
            yield put(createDataFailure(e.response.data));
        }
    }
}

const dataSagas = [
    takeEvery(getDataRequest, getDataSagas),
    takeEvery(getByIdDataRequest, getByIdDataSagas),
    takeEvery(createDataRequest, createDataSaga),
];

export default dataSagas;