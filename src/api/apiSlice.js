/* eslint-disable no-unused-vars */
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

// const baseQuery = fetchBaseQuery({baseUrl:'https://crazy-geckos-hang.loca.lt'})
 const baseQuery = fetchBaseQuery({baseUrl:'https://a537-144-48-178-178.ngrok-free.app'},)


export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User', "Admin", "Dealer"],
    endpoints: (builder) => ({})
})