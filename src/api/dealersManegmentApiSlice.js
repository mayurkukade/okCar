import { apiSlice } from "./apiSlice";



const token = localStorage.getItem("userToken");
export const dealersManegmentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addDealer: builder.mutation({
      query: (body) => ({
        url: `/account/register `,
        method: "POST",
        
     
        body,
      }),
      invalidatesTags: ["Dealer"],
    }),
    getAllDealer: builder.query({
      query: (userToken) => ({
        transformResponse: console.log(userToken),
        url: `/dealer/allDealers/0`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Dealer"],
    }),
    getDealer: builder.query({
      query: ({ id }) => ({
        transformResponse: console.log(id),
        url: `/dealer/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Dealer"],
    }),

    deleteDealer: builder.mutation({
      query: (body) => ({
        transformResponse:console.log(body),
        url: `/dealer/delete/${body}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
        body
      }),
      invalidatesTags: ['Dealer'],
    }),

    updateDealer:builder.mutation({
      query:(body) =>({
        transformResponse:console.log(body),
        url:`/dealer/updateDealer/${body.userid}`,
        headers:{
          "Content-Type": "application/json",
          Authorization:`Bearer ${token}`
        },
        method:"PUT",
        body:body
        
      }),
      invalidatesTags:["Dealer"]
    }),
    getDealerCars: builder.query({
      query: ({id}) => ({
        url: `car/dealer/${id}/status/Active`,
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${token}`,
        }
      }),
      providesTags:['Dealer']
    })
  }),
});

export const {
  useAddDealerMutation,
  useGetAllDealerQuery,
  useGetDealerQuery,
  useDeleteDealerMutation,
  useGetDealerCarsQuery,
  useGetDealerIdQuery,
  useUpdateDealerMutation
} = dealersManegmentApiSlice
