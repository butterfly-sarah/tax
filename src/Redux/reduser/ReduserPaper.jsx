import {  createSlice } from "@reduxjs/toolkit";

export const paperSlice = createSlice({
  name: "paper",
  initialState: [
   
  ],
  reducers: {
    paper: (state, action) => {
      state.push(action.payload);
    },
  
  },
 
});

export const { removepaper, paper } = paperSlice.actions;
export default paperSlice.reducer;
