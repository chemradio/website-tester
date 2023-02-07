import {createSlice} from "@reduxjs/toolkit";

const name = 'data';

export const initialState = {
    data: [],
    order: null,
    loading: false,
    error: null,
};

const dataSlice = createSlice({
    name,
    initialState,
    reducers: {
        getDataRequest(state) {
            state.loading = true;
            state.error = null;
        },
        getDataSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
        },
        getDataFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        getByIdDataRequest(state) {
            state.loading = true;
            state.error = null;
        },
        getByIdDataSuccess(state, action) {
            state.loading = false;
            state.order = action.payload;
        },
        getByIdDataFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        createDataRequest(state) {
            state.loading = true;
            state.error = null;
        },
        createDataSuccess(state) {
            state.loading = false;
        },
        createDataFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export default dataSlice;















