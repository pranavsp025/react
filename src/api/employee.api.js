import apiWithTag from "./employeeApi";

export const employeeApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getEmployeeList: builder.query({
            query: () => '/employee',
            providesTags:['EMPLOYEE_LIST']
        }),
        getEmployeeDetails: builder.query({
            query: (id) => `/employee/${id}`
        }),
        addEmployee: builder.mutation({
            query: (body) => ({
                url: '/employee',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['EMPLOYEE_LIST']

        }),
        updateEmployee: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `/employee/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['EMPLOYEE_LIST']

        }),
        deleteEmployee: builder.mutation({
            query: (id) => ({
                url: `/employee/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['EMPLOYEE_LIST']
        }),
    }),
});

export const { 
    useLazyGetEmployeeListQuery,
    useGetEmployeeListQuery,
    useAddEmployeeMutation,
    useGetEmployeeDetailsQuery,
    useUpdateEmployeeMutation,
    useDeleteEmployeeMutation 
} = employeeApi;
