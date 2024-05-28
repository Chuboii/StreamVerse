import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface ToggleState {
  toggleReelsComment: boolean;
}

const initialState: ToggleState = {
  toggleReelsComment: false,
};

export const toggleReducerSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleReelsComment(state, action: PayloadAction<boolean>) {
      state.toggleReelsComment = action.payload;
    },
  },
});

export const { toggleReelsComment } = toggleReducerSlice.actions;

export default toggleReducerSlice.reducer;
