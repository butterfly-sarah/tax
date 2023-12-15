import {  createSlice } from "@reduxjs/toolkit";

export const plogSlice = createSlice({
  name: "plog",
  initialState: [
   
  ],
  reducers: {
    plog: (state, action) => {
      state.push(action.payload);
    },
  
  },
 
});

export const { removeplog, plog } = plogSlice.actions;
export default plogSlice.reducer;
