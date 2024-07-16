import { createReducer,createAction } from "@reduxjs/toolkit";
import employeesRecord from "../components/EmployeeRecords.json"

const addEmployee = createAction('ADD_EMPLOYEE');
const deleteEmployee = createAction('DELETE_EMPLOYEE')
const updateEmployee = createAction('UPDATE_EMPLOYEE')

const employeesReducer = createReducer({ employees:employeesRecord},(builder)=>{
    builder.addCase(addEmployee, (state, action)=>{
        state.employees.push(action.payload)
    })
    builder.addCase(deleteEmployee,(state,action)=>{
        state.employees = state.employees.filter(employee => employee.id !== action.payload)
    })
    builder.addCase(updateEmployee,(state,action)=>{
        state.employees = state.employees.map(employee => employee.id === action.payload.id ? action.payload : employee)
    })
})

export { employeesReducer as default, addEmployee ,deleteEmployee, updateEmployee}