/* eslint-disable no-unused-vars */
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

export const baseQuery = fetchBaseQuery({ baseUrl: 'https://1eff-144-48-178-178.ngrok-free.app' })
// const baseQuery = fetchBaseQuery({baseUrl:'http://localhost:8088'},)
// const baseQuery = fetchBaseQuery({ baseUrl: 'http://192.168.1.59:5173/' },)



export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User', "Admin", "Dealer"],
    endpoints: (builder) => ({})
})