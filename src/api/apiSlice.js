/* eslint-disable no-unused-vars */
import {fetchBaseQuery,createApi} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({baseUrl:'http://localhost:8088'},)

export const apiSlice = createApi({
    baseQuery,
    tagTypes:['User',"Admin","Vendor","Dealer"],
    endpoints:(builder)=>({})
})