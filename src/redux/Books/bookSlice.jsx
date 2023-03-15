import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
    // addBook: (state, action) => {
    //   state.books = [
    //     ...state.books,
    //     {
    //       id: Math.floor(Math.random() * 100),
    //       title: action.payload.title,
    //       author: action.payload.author,
    //     },
    //   ];
    // },
    addBook: (state, action) => {
      state.books.push([
        ...state.books,
        {
          id: Math.floor(Math.random() * 100),
          title: action.payload.title,
          author: action.payload.author,
        },
      ]);
    },

    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((books) => books.item_id !== action.payload),
    }),
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
