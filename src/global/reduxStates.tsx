import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
  toggle: false,
  count: 1 as any,
};

const reduxStates = createSlice({
  name: "states",
  initialState,
  reducers: {
    onUserState: (state, { payload }) => {
      state.user = payload;
    },
    onToggleState: (state, { payload }) => {
      state.toggle = payload;
    },
    onLogOutState: (state) => {
      state.user = null;
    },
    onCountState: (state, { payload }) => {
      state.count = payload;
    },
  },
});

export const { onUserState, onToggleState, onLogOutState, onCountState } =
  reduxStates.actions;

export default reduxStates.reducer;
