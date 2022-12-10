import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';
import { IContact } from 'interfaces/IContact';

interface IContactState {
  items: IContact[];
  isLoading: boolean;
  error: null | string;
}

const initialState: IContactState = {
  items: [],
  isLoading: false,
  error: null,
};

const handleFetchContacts = (
  state: IContactState,
  action: PayloadAction<IContact[]>
) => {
  state.items = action.payload;
  state.isLoading = false;
  state.error = null;
};

const handleAddContact = (
  state: IContactState,
  action: PayloadAction<IContact>
) => {
  state.items.push(action.payload);
  state.isLoading = false;
  state.error = null;
};
const handleEditContact = (
  state: IContactState,
  action: PayloadAction<IContact>
) => {
  const idx = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(idx, 1, action.payload);
  state.isLoading = false;
  state.error = null;
};
const handleDeleteContact = (
  state: IContactState,
  action: PayloadAction<IContact>
) => {
  const idx = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(idx, 1);
  state.isLoading = false;
  state.error = null;
};

const handleAnyPending = (state: IContactState) => {
  state.isLoading = true;
};

const handleAnyRejected = (
  state: IContactState,
  action: PayloadAction<any>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(editContact.fulfilled, handleEditContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addCase(fetchContacts.pending, handleAnyPending)
      .addCase(addContact.pending, handleAnyPending)
      .addCase(editContact.pending, handleAnyPending)
      .addCase(deleteContact.pending, handleAnyPending)
      .addCase(fetchContacts.rejected, handleAnyRejected)
      .addCase(addContact.rejected, handleAnyRejected)
      .addCase(editContact.rejected, handleAnyRejected)
      .addCase(deleteContact.rejected, handleAnyRejected),
});

export const contactsReducer = contactsSlice.reducer;
