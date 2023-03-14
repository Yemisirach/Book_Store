import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  bookItems: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,

  reducers: {
    addBook: (state, action) => ({
      ...state,
      book: [...state, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      book: state.books.filter((book) => book.id !== action.payload),
    }),
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
