import { apiSlice } from "./apiSlice";

export const carApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addCar: builder.mutation({
      //done page
      query: (data) => ({
        url: "/car/register",
        method: "POST",
        body: data,
      }),
    }),
    allCars: builder.query({
      query: (userToken) => ({
        
        url: `/car/getAllCars?pageNo=0`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`
        },
      }),
    }),
  }),
});

export const { useAddCarMutation, useAllCarsQuery } = carApiSlice;
