import {configureStore} from '@reduxjs/toolkit';
import employeesReducer from './employeeReducer';
// import { employeeApi } from '../api/employee.api';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
    reducer:{
        employees:employeesReducer,
        // [employeeApi.reducerPath]: employeeApi.reducer
    },
    // middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(employeeApi.middleware)
})
setupListeners(store.dispatch)

export default store;