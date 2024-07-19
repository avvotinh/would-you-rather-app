import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const authedUserSlice = createSlice({
  name: "authedUser",
  initialState,
  reducers: {
    setAuthedUser(state, action) {
      return action.payload;
    },
  },
});

export const { setAuthedUser } = authedUserSlice.actions;

export default authedUserSlice.reducer;
