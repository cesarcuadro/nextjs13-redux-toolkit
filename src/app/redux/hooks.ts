import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "./store"
// how you import types
// types imported from store.ts

//instead of importing RootState and AppDispatch into each component, you create a hooks with them for useDispatch and useSelector

export const useAppDispatch = () => useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 