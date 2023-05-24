import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// configureStore allows us to specify options and default middleware for the store
export const store = configureStore({
  reducer: {
    counterReducer,
    [userApi.reducerPath]: userApi.reducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([userApi.middleware]),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// by inferring these types now, we can ensure they are up to date as we add new state slices or make changes to middleware
// both are from the store instance