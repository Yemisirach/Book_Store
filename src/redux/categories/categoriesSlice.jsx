import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoies: [],
  status: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,

  reducers: {
    checkStatus: (state) => ({
      ...state,
      status: 'Under construction',
    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
