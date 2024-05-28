import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface StoreLocalVideoDataProp {
  localVideoParentHeader: string | null;
  localVideoAlbum: [] | null;
}

const initialState: StoreLocalVideoDataProp = {
  localVideoParentHeader: null,
  localVideoAlbum: [],
};

export const storeLocalVideoSlice = createSlice({
  name: "local video",
  initialState,
  reducers: {
    localVideoParentHeader(state, action: PayloadAction<string | null>) {
      state.localVideoParentHeader = action.payload;
    },
    localVideoAlbum(state, action: PayloadAction<[] | null>) {
      state.localVideoAlbum = action.payload;
    },
  },
});

export const { localVideoParentHeader, localVideoAlbum } =
  storeLocalVideoSlice.actions;

export default storeLocalVideoSlice.reducer;
