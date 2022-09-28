import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63322d83a54a0e83d24d3aa9.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
