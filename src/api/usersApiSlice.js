import { apiSlice } from "./apiSlice";
const USERS_URL = "/admin";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      //done page
      query: (data) => ({
        url: "/jwt/login",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      //done page
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      //done page  this same api is user for user and dealer register
      query: (data) => ({
        
        url: "/account/register",

        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    getAllUsers: builder.query({
      //not done page
      query: (id) => `/user/getAllUsers?pageNo=${id}`,
    }),
    resetPassword: builder.mutation({
      // done page
      query: (data) => ({
        url: `/user/changedPassword/${data.id}`,
        method: "PUT",
        body: data,
        
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    editUser: builder.mutation({
      //not done page
      query: (data) => ({
        url: `/user/edit/${data.id}`,
        method: "PUT",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    deleteUser: builder.mutation({
      query: (data) => ({
        url: `/user/delete/${data.id}`,
        method: "DELETE",
        body: data,
        headers: {
          "Content-type": "application/json:charset=UTF-8",
        },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ password, token }) => ({
        url: `/reset-password`,
        method: 'POST',
        body: { password, token }
      }),
    }),
    
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetAllUsersQuery,
  useResetPasswordMutation,
  useEditUserMutation,
  useDeleteUserMutation,
} = userApiSlice;
