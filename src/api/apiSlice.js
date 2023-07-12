/* eslint-disable no-unused-vars */
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

export const baseUrl = 'https://eeae-144-48-178-178.ngrok-free.app';
export const baseQuery = fetchBaseQuery({ baseUrl })

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User', "Admin", "Dealer"],
    endpoints: (builder) => ({})
})