import { apiSlice } from "./apiSlice";
const USERS_URL = "/admin";

export const dealersManegmentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addDealer: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/ `,
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ['Dealer'],
    }),
    getAllDealer:builder.query({
      query:(userToken) =>({
        url:`/dealer/allDealers/0`,
        headers:{
          "Content-Type" :"application/json",
          Authorization:`Bearer ${userToken}`
        }
      }),
      providesTags:['Dealer']
    }) ,
    getDealer: builder.query({
      query:({userToken,id}) =>({
        url:`/dealer/${id}`,
        headers:{
          "Content-Type" :"application/json",
          Authorization:`Bearer ${userToken}`
        }
      }),
      providesTags:['Dealer']
    }),
    deleteDealer: builder.mutation({
      query:({userToken,id}) =>({
        url:`/dealer/${id}`,
        headers:{
          "Content-Type" :"application/json",
          Authorization:`Bearer ${userToken}`
        }
      }),
    }),
  }),
});

export const {
  useAddDealerMutation,
  useGetAllDealerQuery,
  useGetDealerQuery,
  useDeleteDealerMutation,
} = dealersManegmentApiSlice
