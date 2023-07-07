import { apiSlice } from "./apiSlice";

const token = localStorage.getItem("userToken");
export const dealersManegmentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addDealer: builder.mutation({
      query: (body) => ({
        url: `/account/register `,
        method: "POST",
        
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:`Bearer ${token}`
        },
        body: body,
      }),
      invalidatesTags: ["Dealer"],
    }),
    getAllDealer: builder.query({
      query: (userToken) => ({
        transformResponse: console.log(userToken),
        url: `/dealer/allDealers/0`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }),
      providesTags: ["Dealer"],
    }),
    getDealer: builder.query({
      query: ({ id }) => ({
        transformResponse: console.log(token),
        url: `/dealer/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Dealer"],
    }),

    deleteDealer: builder.mutation({
      query: ({ userToken, id }) => ({
        url: `/dealer/${id}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${userToken}`,
        },
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ['Dealer']
    }),

    updateDealer:builder.mutation({
      query:(body) =>({
        transformResponse:console.log({body}),
        url:`/dealer/updateDealer/1001`,
        headers:{
          "Content-Type": "application/json",
          Authorization:`Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXJwQGFkbWluLmNvbSIsImF1dGhvcml0aWVzIjpbIkFETUlOIl0sInJvbGVzIjpbIkFETUlOIl0sImlzRW5hYmxlIjp0cnVlLCJpYXQiOjE2ODg3NDAzNTEsImV4cCI6MTY4ODc0Mzk1MX0.S1dDWHQB9jBbAIg878EZd0CeSGjs1EjbIoDmqmQEhQU`
        },
        method:"PUT",
        body:body
        
      }),
      invalidatesTags: ['Dealer']
    })
  }),
});

export const {
  useAddDealerMutation,
  useGetAllDealerQuery,
  useGetDealerQuery,
  useDeleteDealerMutation,
  useUpdateDealerMutation
} = dealersManegmentApiSlice;
