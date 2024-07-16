import {configureStore} from '@reduxjs/toolkit';
import employeesReducer from './employeeReducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import { employeeBaseApi } from '../api/employeeApi';

const store = configureStore({
    reducer:{
        employees:employeesReducer,
        [employeeBaseApi.reducerPath]: employeeBaseApi.reducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(employeeBaseApi.middleware)
})
setupListeners(store.dispatch)

export default store;