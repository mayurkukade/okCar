import {configureStore} from '@reduxjs/toolkit'
// import googleReducer from '../../features/googleTokenSlice'
import authReducer from '../../api/authSlice'
import { apiSlice } from '../../api/apiSlice'

import {dealersManegmentApiSlice} from '../../api/dealersManegmentApiSlice'
import { LOGIN_STATUS } from '../../constants/common.constants'
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [dealersManegmentApiSlice.reducerPath]:dealersManegmentApiSlice.reducer,
     

        auth: authReducer,
        isLoggedIn: (state = false, action) => {
          switch (action.type) {
            case LOGIN_STATUS.SET_LOGGED_IN:
              return true;
            case LOGIN_STATUS.SET_LOGGED_OUT:
              return false;
            default:
              return state;
          }
        }
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
      devTools: true,
})