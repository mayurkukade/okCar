/* eslint-disable no-unused-vars */
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

<<<<<<< Updated upstream
export const baseUrl = 'http://localhost:8088';
export const baseQuery = fetchBaseQuery({ baseUrl })
=======
export const baseUrl = "https://carresell-production.up.railway.app";
export const baseQuery = fetchBaseQuery({ baseUrl });
>>>>>>> Stashed changes

export const apiSlice = createApi({
  baseQuery,

<<<<<<< Updated upstream
=======
  tagTypes: ["User", "Admin", "Dealer"],
  endpoints: (builder) => ({}),
});
>>>>>>> Stashed changes
