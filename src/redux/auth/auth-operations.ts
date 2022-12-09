import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactToken, contactsAxios } from 'servises/ContactsAPI';
import {
  IRegisterCredentials,
  ILoginCredentials,
} from 'interfaces/ICredentials';

const token = contactToken;
const ContactsAPI = contactsAxios;

export const register = createAsyncThunk(
  'auth/register',
  async (credentials: IRegisterCredentials, { rejectWithValue }: any) => {
    try {
      const { data } = await ContactsAPI.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err);
      } else {
        console.log('Unexpected error', err);
      }
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials: ILoginCredentials, { rejectWithValue }: any) => {
    try {
      const { data } = await ContactsAPI.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err);
      } else {
        console.log('Unexpected error', err);
      }
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }: any) => {
    try {
      await ContactsAPI.post('/users/logout');
      token.unset();
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err);
      } else {
        console.log('Unexpected error', err);
      }
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI: any) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await ContactsAPI.get('/users/current');
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err);
      } else {
        console.log('Unexpected error', err);
      }
    }
  }
);
