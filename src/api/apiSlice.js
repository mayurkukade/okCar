/* eslint-disable no-unused-vars */
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import Cookies from "js-cookie";
export const baseUrl = 'https://carresell-production.up.railway.app';
export const baseQuery = fetchBaseQuery({ baseUrl })

export const apiSlice = createApi({
    baseQuery,
    prepareHeaders:(headers)=>{
        let token = Cookies.get('cookie')
    
      
        if(token){
          token = Cookies.get('cookie')
        }
        if (token) {
          token =  JSON.parse(Cookies.get('cookie')) 
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
    tagTypes: ["User", "Admin", "Dealer"],
    endpoints: (builder) => ({})
})

