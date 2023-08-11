import { apiSlice } from "./apiSlice";
const BOOKING_URL = "/booking";

// const token = localStorage.getItem("userToken");

export const bookingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    pendingCarBooking: builder.mutation({
      query: (askingPrice) => ({
        transformResponse: console.log(askingPrice),
        url: `${BOOKING_URL}/request`,
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // Authorization: `Bearer ${token}`,
        },
        body: askingPrice,
      }),
      invalidatesTags: ["Dealer", "Admin", "User"],
    }),

    mobileBookingPending: builder.query({
      query: () => ({
        url: `${BOOKING_URL}/getByUserId?userId=1052&pageNo=11`,
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Dealer"],
    }),
  }),
});

export const { usePendingCarBookingMutation, useMobileBookingPendingQuery } =
  bookingApiSlice;
