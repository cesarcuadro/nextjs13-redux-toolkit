import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"

// configureStore allows us to specify options and default middleware for the store
export const store = configureStore({
  reducer: {
    counterReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// by inferring these types now, we can ensure they are up to date as we add new state slices or make changes to middleware
// both are from the store instance