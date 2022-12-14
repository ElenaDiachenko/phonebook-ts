import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsAxios } from 'servises/ContactsAPI';
import { IContact } from 'interfaces/IContact';

const ContactsAPI = contactsAxios;

export const fetchContacts = createAsyncThunk<
  IContact[],
  undefined,
  { rejectValue: string }
>('contacts/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const res = await ContactsAPI.get('/contacts');
    return res.data;
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message);
    } else {
      console.log('Unexpected error', err);
    }
  }
});

export const addContact = createAsyncThunk<
  IContact,
  IContact,
  { rejectValue: string }
>('contacts/addContact', async (contact, { rejectWithValue }) => {
  try {
    const res = await ContactsAPI.post('/contacts', contact);
    return res.data;
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message);
    } else {
      console.log('Unexpected error', err);
    }
  }
});
export const editContact = createAsyncThunk<
  IContact,
  IContact,
  { rejectValue: string }
>('contacts/editContact', async ({ id, ...values }, { rejectWithValue }) => {
  try {
    const res = await ContactsAPI.patch(`/contacts/${id}`, values);
    return res.data;
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message);
    } else {
      console.log('Unexpected error', err);
    }
  }
});

export const deleteContact = createAsyncThunk<
  IContact,
  IContact['id'],
  { rejectValue: string }
>('contacts/deleteContact', async (contactId, { rejectWithValue }) => {
  try {
    const res = await ContactsAPI.delete(`/contacts/${contactId}`);
    return res.data;
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message);
    } else {
      console.log('Unexpected error', err);
    }
  }
});
