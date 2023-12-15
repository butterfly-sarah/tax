import {  createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "Users",
  initialState: [
   
  ],
  reducers: {
    Users: (state, action) => {
      state.push(action.payload);
    },
  
  },
 
});

export const { removeUsers, Users } = UsersSlice.actions;
export default UsersSlice.reducer;
