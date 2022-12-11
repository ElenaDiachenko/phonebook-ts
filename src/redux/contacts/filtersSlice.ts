import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    changeFilter: '',
  },
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.changeFilter = action.payload;
    },
  },
});
export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
