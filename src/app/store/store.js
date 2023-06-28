import {configureStore} from '@reduxjs/toolkit'
// import googleReducer from '../../features/googleTokenSlice'
import authReducer from '../../api/authSlice'
import { apiSlice } from '../../api/apiSlice'

import {dealersManegmentApiSlice} from '../../api/dealersManegmentApiSlice'
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [dealersManegmentApiSlice.reducerPath]:dealersManegmentApiSlice.reducer,
     

        auth: authReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
      devTools: true,
})