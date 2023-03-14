import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Books/bookSlice";
export const store = configureStore({
  reducer: {
    book: cartReducer,
  },
});
