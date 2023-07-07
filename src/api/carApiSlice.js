import { apiSlice } from "./apiSlice";

export const carApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Add car query
        addCar: builder.mutation({
            //done page
            query: (data) => ({
                url: "/car/carregister",
                method: "POST",
                body: data,
            }),

        }),

        // get all cars query
        allCars: builder.query({
            query: (userToken) => ({
                url: `/car/getAllCars?pageNo=0`,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userToken}`
                },
            }),
        }),

        // edit cars query
        editCar: builder.mutation({
            //done page
            query: (id) => ({
                url: `/car/edit/${id}`,
                method: "PUT",

            }),

        }),
        //delete car query
        deleteCar: builder.mutation({
            //done page
            query: (id) => ({
                url: `/car/delete/${id}`,
                method: "DELETE",

            }),

        }),


        //filter car query
        filterCarQuery: builder.query({
            query: (data, id) => ({
                url: `/car/mainFilter/${id}`,
                method: "POST",
                body: data,
            }),
        })

    }),

});




export const { useAddCarMutation, useAllCarsQuery, useFilterCarQuery } = carApiSlice;