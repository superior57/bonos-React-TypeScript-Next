import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { themeSlice } from "./theme";
import { useSelector, TypedUseSelectorHook } from "react-redux";

const rootReducers = combineReducers({
  theme: themeSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof rootReducers>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
