const actionTypes = {
    ADD_EMPLOYEE: 'ADD_EMPLOYEE',
    DELETE_EMPLOYEE: 'DELETE_EMPLOYEE'

};

const reducer = (state,action)=> {
    switch (action.type){
        case actionTypes.ADD_EMPLOYEE:
            return{
                ...state,
                employees:[...state.employees, action.payload]
            };
        case actionTypes.DELETE_EMPLOYEE:
            const employees = [...state.employees];
            console.log(action)
            return{
                ...state,
                employees:employees.filter(employees => employees.id !== action.payload)
            }
        default:
            return state;
    }
};

export {reducer as default, actionTypes};