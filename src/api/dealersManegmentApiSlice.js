import { apiSlice } from "./apiSlice";
const USERS_URL = "/admin";
const token = localStorage.getItem("userToken");

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
        },
        
      }),
      providesTags:['Dealer']
    }),
    editDealer: builder.query({
      query:({userToken,id}) =>({
        url:`/dealer/updateDealer/${id}`,
        headers:{
          "Content-Type" :"application/json",
          Authorization:`Bearer ${userToken}`
        },
        
        
      }),
      providesTags:['Dealer']
    }),
    deleteDealer: builder.mutation({
      query:({userToken,id}) =>({
        url:`/dealer/${id}`,
       
        headers:{
          "Content-Type" :"application/json",
          Authorization:`Bearer ${userToken}`
        },
        method:"DELETE",
        body:id
      }),
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
  useGetDealerIdQuery
} = dealersManegmentApiSlice
