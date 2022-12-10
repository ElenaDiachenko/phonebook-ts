import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    changeFilter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.changeFilter = action.payload;
    },
  },
});
export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
