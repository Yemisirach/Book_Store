import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const Base_Url ='https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi'
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CJRjcF1o6N2Fib9dpCal';

export const postBook = createAsyncThunk(
  'books/postBook',
  async (bookData, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/books`, bookData);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'Something went wrong!',
      );
    }
  },
);

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${API_URL}/books`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'Something went wrong!',
      );
    }
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${API_URL}/books/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'Something went wrong!',
      );
    }
  },
);
const initialState = {
  isLoading: false,
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, actions) => {
      const bookData = actions.payload;
      state.books.push(bookData);
    },

    removeBook: (state, actions) => {
      const idOfBookToRemove = actions.payload;
      state.books = state.books.filter(
        (book) => book.item_id !== idOfBookToRemove,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postBook.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const resObject = action.payload;

        const newBooksArr = [];
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const id in resObject) {
          const bookObj = resObject[id][0];
          bookObj.item_id = id;
          newBooksArr.push(bookObj);
        }
        state.books = newBooksArr;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const booksActions = booksSlice.actions;
export default booksSlice.reducer;
