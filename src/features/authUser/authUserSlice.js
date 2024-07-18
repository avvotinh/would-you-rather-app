import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    setAuthedUser(state, action) {
      return action.payload;
    },
  },
});

export const { setAuthedUser } = authUserSlice.actions;

export default authUserSlice.reducer;
