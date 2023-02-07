
import dataSlice from "../slices/dataSlice";

export const {
    getDataRequest,
    getDataSuccess,
    getDataFailure,
    getByIdDataRequest,
    getByIdDataSuccess,
    getByIdDataFailure,
    createDataRequest,
    createDataSuccess,
    createDataFailure,
} = dataSlice.actions;