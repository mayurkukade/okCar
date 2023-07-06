/* eslint-disable no-unused-vars */
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({baseUrl:'https://bumpy-snails-wear.loca.lt'})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User', "Admin", "Driver"],
    endpoints: (builder) => ({})
})