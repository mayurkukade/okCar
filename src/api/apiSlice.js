/* eslint-disable no-unused-vars */
import {fetchBaseQuery,createApi} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({baseUrl:'http://192.168.1.71:8088'})

export const apiSlice = createApi({
    baseQuery,
    tagTypes:['User',"Admin","Vendor","Driver"],
    endpoints:(builder)=>({})
})