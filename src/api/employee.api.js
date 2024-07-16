import apiWithTag from "./employeeApi";

export const employeeApi = apiWithTag.injectEndpoints({
    endpoints:(builder)=>({
        getEmployeeList: builder.query({
            query:() => '/employee',
            // providesTags:['EMPLOYEE_LIST']
        }),
    //     getEmployeeDetails:builder.query({
    //         query:(id)=> `/employee/${id}`
    //     }),
        addEmployee:builder.mutation({
            query: (body)=> ({
                url:'/employee',
                method:'POST',
                body
            })
        })
    }),
});

export const { useLazyGetEmployeeListQuery,useGetEmployeeListQuery,
    useAddEmployeeMutation } = employeeApi;