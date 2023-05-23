import { configureStore } from "@reduxjs/toolkit";

// configureStore allows us to specify options and default middleware for the store
    // currently there are no middleware or reducers
export const store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// by inferring these types now, we can ensure they are up to date as we add new state slices or make changes to middleware