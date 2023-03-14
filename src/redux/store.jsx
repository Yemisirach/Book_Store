import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: cartReducer,
    categories: categoriesReducer,
  },
});

export default store;
