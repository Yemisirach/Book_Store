import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Books/bookSlice';

const store = configureStore({
  reducer: {
    book: cartReducer,
  },
});

export default store;
