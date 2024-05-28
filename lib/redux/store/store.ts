import { Tuple, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../root reducer/rootReducer";
import { logger } from "redux-logger";
// ...

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
