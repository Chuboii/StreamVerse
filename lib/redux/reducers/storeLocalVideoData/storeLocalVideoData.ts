import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { Album } from "expo-media-library";

interface StoreLocalVideoDataProp {
  localVideoParentHeader: string | null;
  localVideoAlbum: Album[] | null;
  localVideoAlbumContents: [] | null;
  localVideoContentUrl: string | null;
}

const initialState: StoreLocalVideoDataProp = {
  localVideoParentHeader: null,
  localVideoAlbum: [],
  localVideoAlbumContents: [],
  localVideoContentUrl: null,
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
    localVideoAlbumContents(state, action: PayloadAction<[] | null>) {
      state.localVideoAlbumContents = action.payload;
    },
    localVideoContentUrl(state, action: PayloadAction<string | null>) {
      state.localVideoContentUrl = action.payload;
    },
  },
});

export const {
  localVideoParentHeader,
  localVideoAlbum,
  localVideoAlbumContents,
  localVideoContentUrl,
} = storeLocalVideoSlice.actions;

export default storeLocalVideoSlice.reducer;
