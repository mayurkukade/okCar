import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[]
}



const bookingStoreSlice = createSlice({
    name:'askingPriceStore',
    initialState,
    reducers:{
        askingPriceDetails:(state,action)=>{
            console.log(action.payload)
            state.value.push(action.payload)
        }
    }
})
export const selectAskingPriceDetails = (state)=>state.askingPriceStore.value

export const {askingPriceDetails} = bookingStoreSlice.actions

export default bookingStoreSlice.reducer