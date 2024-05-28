import { combineReducers } from "@reduxjs/toolkit";
import toggleReducer from "../reducers/toggle reducer/toggleReducer";
import storeLocalVideoData from "../reducers/storeLocalVideoData/storeLocalVideoData";

export const rootReducer = combineReducers({
  toggle: toggleReducer,
  localVideo: storeLocalVideoData,
});
