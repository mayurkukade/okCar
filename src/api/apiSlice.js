/* eslint-disable no-unused-vars */
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

export const baseUrl = 'http://192.168.1.71:8088';
export const baseQuery = fetchBaseQuery({ baseUrl })

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["User", "Admin", "Dealer","Booking"],
    endpoints: (builder) => ({})
})

