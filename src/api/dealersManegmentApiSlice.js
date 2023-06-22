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
    }),
    getAllDealer: builder.query({
      query: () => "/getall",
    }),
    getDealer: builder.query({
      query: (id) => `/url/${id}`,
    }),
    deleteDealer: builder.mutation({
      query: (id) => ({
        url: `/url/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddDealerMutation,
  useGelAllDealerQuery,
  useGetDealerQuery,
  useDeleteDealerMutation,
} = dealersManegmentApiSlice
