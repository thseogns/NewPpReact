/** @format */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WindowState {
  windowToggle: boolean;
  backgroundNumber: number;
}
let randomNumber = Math.random();
randomNumber = randomNumber * 3;
randomNumber = Math.floor(randomNumber);

const initialState: WindowState = {
  windowToggle: false,
  backgroundNumber: randomNumber,
};

export const WindowSlice = createSlice({
  name: "windowState",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.windowToggle = action.payload;
    },
    number: (state, action: PayloadAction<number>) => {
      state.backgroundNumber = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle, number } = WindowSlice.actions;

export default WindowSlice.reducer;
