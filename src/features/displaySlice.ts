/** @format */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  toggle: boolean;
}

const initialState: CounterState = {
  toggle: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.toggle = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = toggleSlice.actions;

export default toggleSlice.reducer;
