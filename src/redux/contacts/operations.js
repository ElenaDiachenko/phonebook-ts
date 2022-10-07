import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsAxios } from 'servises/ContactsAPI';

const ContactsAPI = contactsAxios;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await ContactsAPI.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const res = await ContactsAPI.post('/contacts', contact);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, ...values }, thunkAPI) => {
    try {
      const res = await ContactsAPI.patch(`/contacts/${id}`, values);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const res = await ContactsAPI.delete(`/contacts/${contactId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
