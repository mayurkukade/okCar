import { apiSlice } from "./apiSlice";

export const carApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        addCar:builder.mutation({ //done page
            query:(data)=>({
                url:'/car/register',
                method:"POST",
                body:data
            }),
        }),
     



    })
})