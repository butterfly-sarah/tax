import {  createSlice } from "@reduxjs/toolkit";

export const ServicesSlice = createSlice({
  name: "Services",
  initialState: [
   
  ],
  reducers: {
    Services: (state, action) => {
      state.push(action.payload);
    },
  
  },
 
});

export const { removeServices, Services } = ServicesSlice.actions;
export default ServicesSlice.reducer;
