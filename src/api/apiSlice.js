/* eslint-disable no-unused-vars */
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const baseUrl = "http://localhost:8088";
export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("userToken");
    console.log(token);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});


export const apiSlice = createApi({
  baseQuery,

  tagTypes: ["User", "Admin", "Dealer", "Booking"],
  endpoints: (builder) => ({}),
});
